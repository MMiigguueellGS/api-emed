const catchError = require('../utils/catchError');
const CondicionContrato = require('../models/CondicionContrato.model');

const getAll = catchError(async(req, res) => {
  const modalidadContrato = await CondicionContrato.findAll()
    return res.json(modalidadContrato)
});
const create = catchError(async(req, res) => {
  
  const contrato = await CondicionContrato.create(req.body)
    return res.json(contrato)
});
module.exports = {
    getAll,
    create
}