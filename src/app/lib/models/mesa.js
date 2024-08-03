const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Mesa = sequelize.define('Mesa', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('disponible', 'en uso'),
        defaultValue: 'disponible'
    }
});

module.exports = Mesa;
