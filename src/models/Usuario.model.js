const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Emed = require('./Emed.model');

const Usuario = sequelize.define('usuario', {
    idEmed: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clave:{
      type: DataTypes.STRING,
      allowNull: false
    }
});
Usuario.belongsTo(Emed,{
  foreignKey:'idEmed',
  targetKey:'id',
  as:'UsuarioEmed'
})

module.exports = Usuario;