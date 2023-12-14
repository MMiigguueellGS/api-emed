const { getAll, createAmbulancia, deleteAmbulancia, updateAmbulancia } = require('../controllers/ambulancia.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const ambulanciaRouter = express.Router();

ambulanciaRouter.route("/")
		.get(verifyJWT,getAll)
		.post(verifyJWT,createAmbulancia)

ambulanciaRouter.route("/:id")
		.delete(deleteAmbulancia)
		.put(updateAmbulancia)

module.exports = ambulanciaRouter;