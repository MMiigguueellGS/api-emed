const { getAll, create, login } = require('../controllers/usuario.controllers');
const express = require('express');

const usuarioRouter = express.Router();

usuarioRouter.route('/')
    .get(getAll)
    .post(create)
usuarioRouter.route('/api/login')
.post(login) 

module.exports = usuarioRouter;