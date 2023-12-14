const catchError = require('../utils/catchError');
const Bien = require('../models/Bien.model');
const Emed = require('../models/Emed.model');
const { Op } = require('sequelize');

const getAll = catchError(async(req, res) => {
    const {codigoBien,codigoPatrimonial} = req.query 
    const where ={}
    if(codigoBien){where.codigoBien = {[Op.iLike]: `%${codigoBien}%`}}
    // if(codigoPatrimonial){where.codigoPatrimonial= {[Op.iLike]: `%${codigoPatrimonial}%`}}
    const results = await Bien.findAll({
        where: where,
        include:[{model : Emed, as : "BienEmed"}]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Bien.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Bien.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Bien.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Bien.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}