const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
const Establecimiento = require("./Establecimiento.model");
// En Mayúsculas y singular      // en minúsculas y singular
const Ambulancia = sequelize.define('ambulancia', {
  // Definimos las columnas aquí
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
  matricula: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  marcaVehiculo: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'marca_vehiculo',
  },
  nPlaca: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'n_placa',
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anioFabricacion: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'anio_fabricacion',
  },
  propietario: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  soat: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  revicionTecnica: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'revision_tecnica',
  },
  condicion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

Ambulancia.belongsTo(Establecimiento, {
  foreignKey: 'idEstablecimiento',
  targetKey: 'idEstablecimiento',
  as: 'ubigeo',
});

module.exports = Ambulancia;
