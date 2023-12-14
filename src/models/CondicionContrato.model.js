const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const CondicionContrato = sequelize.define('condicionContrato', {
    idCondicion: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        field:'id_contrato'
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull:false
    }
});



module.exports = CondicionContrato;