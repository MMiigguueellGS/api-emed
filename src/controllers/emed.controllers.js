const catchError = require("../utils/catchError");
const Emed = require("../models/Emed.model");
const { Op } = require("sequelize");

const getAll = catchError(async (req, res) => {
  const idEmed = req.usuario.idEmed;
  const where = {};
  const { nombreEmed } = await Emed.findOne({ where: { id: idEmed } });
  if (nombreEmed !== "GERESA") {
    where.id = idEmed;  }
  const results = await Emed.findAll({ where: where });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Emed.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Emed.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Emed.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Emed.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};
