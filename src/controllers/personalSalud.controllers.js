const catchError = require("../utils/catchError");
const PersonalSalud = require("../models/PersonalSalud.model");
const Establecimiento = require("../models/Establecimiento.model");
const CondicionContrato = require("../models/CondicionContrato.model");
const sequelize = require("../utils/connection");
const { Sequelize, Op } = require("sequelize");
const Profesion = require("../models/Profesion.model");
const Ambulancia = require("../models/Ambulancia.model");
const Bien = require("../models/Bien.model");
const Emed = require("../models/Emed.model");

const getAll = catchError(async (req, res) => {
  const { dni } = req.query;
  const idEmed = req.usuario.idEmed;
  const { nombreEmed } = await Emed.findOne({ where: { id: idEmed } });
  const where = {};
  if (dni) {    where.dni = { [Op.iLike]: `%${dni}%` }; }
  if (nombreEmed !== "GERESA") { where.redSalud = { [Op.iLike]: `%${nombreEmed}%` }; }
  const results = await PersonalSalud.findAll({
    where: where,
    include: [
      { model: Establecimiento, as: "PersonalSaludEstablecimiento" },
      { model: CondicionContrato, as: "condicionContrato" },
      { model: Profesion, as: "PersonalSaludProfesion" },
    ],
  });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await PersonalSalud.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await PersonalSalud.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await PersonalSalud.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await PersonalSalud.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});
const numBrigadista = catchError(async (req, res) => {
  const idEmed = req.usuario.idEmed
  const { nombreEmed } = await Emed.findOne({ where: { id: idEmed } });
  const where = {};
  if (nombreEmed !== "GERESA") { where.redSalud = { [Op.iLike]: `%${nombreEmed}%` }; }
  const numBrigadistas = await PersonalSalud.findAll({
    where:where,
    attributes: [
      "brigadista",
      [sequelize.fn("COUNT", Sequelize.col("brigadista")), "numBrigadista"],
    ],
    group: ["brigadista"],
  });

  return res.status(200).json(numBrigadistas);
});
const personalPorContrato = catchError(async (req, res) => {

  const idEmed = req.usuario.idEmed
  const { nombreEmed } = await Emed.findOne({ where: { id: idEmed } });
  const where = {};
  if (nombreEmed !== "GERESA") { where.redSalud = { [Op.iLike]: `%${nombreEmed}%` }; }
  const cantidadPorContrato = await PersonalSalud.findAll({
    where:where,
    attributes: [
      [sequelize.col("condicionContrato.descripcion"), "descripcion"],
      [
        sequelize.fn("COUNT", sequelize.col("condicionContrato.descripcion")),
        "cantidad",
      ],
    ],
    include: [
      {
        model: CondicionContrato,
        as: "condicionContrato",
        attributes: [],
      },
    ],
    group: ["condicionContrato.descripcion"],
  });

  return res.json(cantidadPorContrato);
});

const obtenerTotales = catchError(async (req, res) => {
  const totalAmbulancias = await Ambulancia.count();
  const totalBienes = await Bien.count();
  const totalPersonal = await PersonalSalud.count();
  return res.json({ totalPersonal, totalAmbulancias, totalBienes });
});
module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  numBrigadista,
  personalPorContrato,
  obtenerTotales,
};
