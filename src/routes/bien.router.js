const { getAll, create, getOne, remove, update } = require('../controllers/bien.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const bienRouter = express.Router();

bienRouter.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create);

bienRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = bienRouter;