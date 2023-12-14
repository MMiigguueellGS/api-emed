const { getAll, create, getOne, remove, update } = require('../controllers/evento.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const eventoRouter = express.Router();

eventoRouter.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create);

eventoRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = eventoRouter;