const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const PersonalSalud = require('./PersonalSalud.model');
const Emed = sequelize.define('emed',{
    nombreEmed: {
    type: DataTypes.STRING(80),
    allowNull: false,
    field: 'nombre_emed'
  },
  direccionEmed: {
    type: DataTypes.STRING(100),
    allowNull:false,
    field:'direccion_emed'
  },
  celular: {
    type: DataTypes.STRING(9),
    allowNull:false,
  },
  correo: {
    type: DataTypes.STRING(80),
    allowNull:false,
  }
})

module.exports = Emed