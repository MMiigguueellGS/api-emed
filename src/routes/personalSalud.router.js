const {
  getAll,
  create,
  getOne,
  remove,
  update,
  numBrigadista,
  personalPorContrato,
  obtenerTotales,
} = require("../controllers/personalSalud.controllers");
const express = require("express");
const verifyJWT = require("../utils/verifyJWT");

const personalSaludRouter = express.Router();

personalSaludRouter.route("/").get(verifyJWT,getAll).post(verifyJWT,create);
personalSaludRouter.route("/totales").get(verifyJWT,obtenerTotales);
personalSaludRouter.route("/numBrigadistas").get(verifyJWT,numBrigadista);
personalSaludRouter.route("/personasContratos").get(verifyJWT,personalPorContrato);

personalSaludRouter.route("/:id").get(getOne).delete(remove).put(update);

module.exports = personalSaludRouter;
