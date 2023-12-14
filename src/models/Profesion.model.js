const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Profesion = sequelize.define('profesion', {
    idProfesion: {
        type: DataTypes.STRING(2),
        allowNull: false,
        primaryKey: true
    },
    descripcion:{
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = Profesion;