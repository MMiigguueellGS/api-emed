const express = require("express")
const { getAllEstablecimiento } = require("../controllers/establecimiento.controllers")
const verifyJWT = require("../utils/verifyJWT")
const establecimientoRouter = express.Router()
establecimientoRouter.route('/')
.get(verifyJWT,getAllEstablecimiento)
module.exports = establecimientoRouter