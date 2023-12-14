const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
// En Mayúsculas y singular      // en minúsculas y singular
const Ubigeo = sequelize.define('ubigeo', {
  // Definimos las columnas aquí
  idUbigueoInei: {
    type: DataTypes.STRING(6),
    primaryKey: true,
    allowNull: false,
    field: 'id_ubigueo_inei',
  },
  idUbigueoReniec: {
    type: DataTypes.STRING(6),
    allowNull: false,
    field: 'id_ubigueo_reniec',
  },
  departamento: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  provincia: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  distrito: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  codiDepartamentoInei: {
    type: DataTypes.STRING(2),
    allowNull: true,
    field: 'codi_departamento_inei',
  },
  codiProvinciaInei: {
    type: DataTypes.STRING(2),
    allowNull: true,
    field: 'codi_provincia_inei',
  },
  codi_distrito_inei: {
    type: DataTypes.STRING(2),
    allowNull: true,
    field: 'codi_distrito_inei',
  },
  codiDepartamentoReniec: {
    type: DataTypes.STRING(2),
    allowNull: true,
    field: 'codi_departamento_reniec',
  },
  codiProvinciaReniec: {
    type: DataTypes.STRING(2),
    allowNull: true,
    field: 'codi_provincia_reniec',
  },
  codiDistritoReniec: {
    type: DataTypes.STRING(2),
    allowNull: true,
    field: 'codi_distrito_reniec',
  },
});


module.exports = Ubigeo;
