const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const CondicionContrato = require('./CondicionContrato.model');
const Establecimiento = require('./Establecimiento.model');
const Profesion = require('./Profesion.model');

const PersonalSalud = sequelize.define('personalSalud', {
  redSalud: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'red_salud',
  },
  microRed: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'microred',
  },
  idEstablecimiento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_establemiento',
  },
  dni:{
    type:DataTypes.STRING(8),
    allowNull:false,
    unique:true
  },
  nombres:{
    type:DataTypes.STRING(200),
    allowNull: false
  },
  apellidos:{
    type: DataTypes.STRING(200),
    allowNull:false
  },
  correo:{
    type: DataTypes.STRING(200),
    allowNull:false
  },
  celular:{
    type: DataTypes.STRING(9),
    allowNull: false
  },
  direccionActual: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  profesion: {
    type: DataTypes.STRING(2),
    allowNull: false
  },
  especialidad:{
    type: DataTypes.STRING(150),
    allowNull: false
  },
  brigadista:{
    type: DataTypes.STRING(50),
    allowNull: false
  },
  plataformaDefensa:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  idCondicion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  localidad: {
    type: DataTypes.STRING(150),
    allowNull: true
  }
})
PersonalSalud.belongsTo(CondicionContrato,{
  foreignKey:'idCondicion',
  targetKey:'idCondicion',
  as: 'condicionContrato'
})
PersonalSalud.belongsTo(Establecimiento,{
  foreignKey:'idEstablecimiento',
  targetKey:'idEstablecimiento',
  as: 'PersonalSaludEstablecimiento'
})
PersonalSalud.belongsTo(Profesion,{
  foreignKey:'profesion',
  targetKey:'idProfesion',
  as: 'PersonalSaludProfesion'
})

module.exports = PersonalSalud;