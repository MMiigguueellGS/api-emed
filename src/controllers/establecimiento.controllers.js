const catchError = require('../utils/catchError');
const Establecimiento = require('../models/Establecimiento.model');
const Emed = require('../models/Emed.model');
const { Op } = require('sequelize');

const getAllEstablecimiento = catchError(async(req, res) => {
  const idEmed = req.usuario.idEmed;
  const { nombreEmed } = await Emed.findOne({ where: { id: idEmed } });
  const where = {};
  if (nombreEmed !== "GERESA") { where.red = { [Op.iLike]: `%${nombreEmed}%` }; }
 
  const establecimientos = await Establecimiento.findAll({where: where})
    return res.json(establecimientos)
});

module.exports = {
  getAllEstablecimiento
}