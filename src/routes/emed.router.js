const { getAll, create, getOne, remove, update } = require('../controllers/emed.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const emedRouter = express.Router();

emedRouter.route('/')
    .get(getAll)
    .post(create);

emedRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = emedRouter;