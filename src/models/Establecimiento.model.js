const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Ubigeo = require('./Ubigeo.model');
// En Mayúsculas y singular      // en minúsculas y singular
const Establecimiento = sequelize.define('establecimiento', {
  // Definimos las columnas aquí
  idEstablecimiento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    field: 'id_establecimiento'
  },
  NombreEstablecimiento: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'nombre_establecimiento'
  },
  ubigueoEstablecimiento: {
    type: DataTypes.STRING(6),
    allowNull: false,
    field: 'ubigueo_establecimiento'
  },
  codiDisa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'codi_disa'
  },
  disa: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  codiRed: {
    type: DataTypes.STRING(2),
    allowNull: false,
    field: 'codi_red'
  },
  red: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  codiMicroRed: {
    type: DataTypes.STRING(2),
    allowNull: false,
    field: 'codi_microred'
  },
  microRed: {
    type: DataTypes.STRING(80),
    allowNull: false,
    field:"microred"
  },
  codiUnico: {
    type: DataTypes.STRING(9),
    allowNull: false,
    field: 'codi_unico'
  },
  codiSector: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'codi_sector'
  },
  descripcionSector: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'descripcion_sector'
  },
  departamento: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  provincia: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  distrito: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  categoriaEstablecimiento: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field:'categoria_establecimiento'
  },
});

Establecimiento.belongsTo(Ubigeo, {
  foreignKey: 'ubigueoEstablecimiento',
  targetKey: 'idUbigueoInei',
  as: 'ubigeo'
});
module.exports = Establecimiento;
