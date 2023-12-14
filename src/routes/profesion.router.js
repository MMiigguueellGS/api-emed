const { getAll, create, getOne, remove, update } = require('../controllers/profesion.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const profesionRouter = express.Router();

profesionRouter.route('/')
    .get(getAll)
    .post(create);

profesionRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = profesionRouter;