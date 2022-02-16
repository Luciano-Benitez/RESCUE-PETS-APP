const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('refugio', {
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {
        timestamps: false,
    }
    );
};