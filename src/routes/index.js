const express = require('express');
const ambulanciaRouter = require('./ambulancia.router');
const establecimientoRouter = require('./establecimiento.router');
const condicionContratoRouter = require('./condicionContrato.router');
const personalSaludRouter = require('./personalSalud.router');
const eventoRouter = require('./evento.router');
const bienRouter = require('./bien.router');
const emedRouter = require('./emed.router');
const profesionRouter = require('./profesion.router');
const usuarioRouter = require('./usuario.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/ambulancias",ambulanciaRouter)
router.use('/establecimientos',establecimientoRouter)
router.use('/contratos',condicionContratoRouter)
router.use('/personalSalud',personalSaludRouter)
router.use('/eventos',eventoRouter)
router.use('/bienes',bienRouter)
router.use('/emeds',emedRouter)
router.use('/profesiones',profesionRouter)
router.use('/usuarios',usuarioRouter)



module.exports = router;