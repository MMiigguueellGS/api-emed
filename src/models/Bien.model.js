const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Emed = require('./Emed.model');
const Bien = sequelize.define('bien',{
  codigoPatrimonial:{
    type: DataTypes.STRING(20),
    allowNull:false,
    field:"codigo_patrimonial"
  },
  codigoBien:{
    type: DataTypes.STRING(20),
    allowNull:false,
    field:'codigo_bien',
  },
  nombreBien: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'nombre_bien'
  },
  estadoBien: {
    type: DataTypes.STRING(20),
    allowNull:false,
    field:'estado_bien'
  },
  descripcion: {
    type: DataTypes.STRING(150),
    allowNull:false,
  },
  idEmed: {
    type: DataTypes.INTEGER,
    allowNull:false,
    field:'id_emed'
  }
})
Bien.belongsTo(Emed,{
  foreignKey:'idEmed',
  targetKey:'id',
  as:'BienEmed'
})
module.exports = Bien