const catchError = require("../utils/catchError");
const Ambulancia = require("../models/Ambulancia.model");
const { Op } = require("sequelize");

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const {nPlaca} = req.query 
  const where = {}
  if(nPlaca){ where.nPlaca = {[Op.iLike]: `%${nPlaca}%`}}
  const ambulancias = await Ambulancia.findAll({where: where});
  return res.json(ambulancias);
});
const createAmbulancia = catchError(async (req, res) => {
  // Operaciones...
  const {
    redSalud,
    microRed,
    idEstablecimiento,
    matricula,
    marcaVehiculo,
    nPlaca,
    modelo,
    anioFabricacion,
    propietario,
    soat,
    revicionTecnica,
    condicion,
  } = req.body;

  const ambulancia = await Ambulancia.create({
    redSalud,
    microRed,
    idEstablecimiento,
    matricula,
    marcaVehiculo,
    nPlaca,
    modelo,
    anioFabricacion,
    propietario,
    soat,
    revicionTecnica,
    condicion,
  });
  return res.json(ambulancia);
});
const deleteAmbulancia = catchError(async (req, res) => {
  // Operaciones...
  const {id} = req.params
   await Ambulancia.destroy({
    where:{
      id: id
    }
   });
  return res.sendStatus(204)
});
const updateAmbulancia = catchError(async (req, res) => {
  // Operaciones...
  const {id} = req.params
  const {redSalud, microRed, idEstablecimiento,  matricula,  marcaVehiculo,  nPlaca, modelo,
    anioFabricacion, propietario, soat, revicionTecnica, condicion} = req.body;
   const ambulancia=  await Ambulancia.update(
    {redSalud, microRed, idEstablecimiento,  matricula,  marcaVehiculo,  nPlaca, modelo,
      anioFabricacion, propietario, soat, revicionTecnica, condicion},{
        where:{
          id: id
        },returning:true
      }
   );
  return res.json(ambulancia[1][0])
});
module.exports = {
  getAll,
  createAmbulancia,
  deleteAmbulancia,
  updateAmbulancia,
};
