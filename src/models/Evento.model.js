const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Ubigeo = require('./Ubigeo.model');

const Evento = sequelize.define('envento', {
    nombre: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    tipoEvento: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field:'tipo_evento'
    },
    fechaEvento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field:'fecha_evento'
    },
    horaEvento: {
        type: DataTypes.TIME,
        allowNull: false,
        field:'hora_evento'
    },
    provincia: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    distrito: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    lesionados: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fallecidos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    desaparecidos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUbigueoInei: {
        type: DataTypes.STRING(6),
        allowNull: false,
        field:'id_ubigueo_inei'
    }
});
Evento.belongsTo(Ubigeo,{
  foreignKey:'idUbigueoInei',
  targetKey:'idUbigueoInei',
  as:'eventoUbigueo'
})



module.exports = Evento;