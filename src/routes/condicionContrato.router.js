const { getAll, create } = require('../controllers/condicionContrato.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const condicionContratoRouter = express.Router();

condicionContratoRouter.route('/')
    .get(getAll)
    .post(create)

module.exports = condicionContratoRouter;