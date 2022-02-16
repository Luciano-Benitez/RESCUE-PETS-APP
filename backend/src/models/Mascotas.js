const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('mascotas', {
    nombre: {
        type: DataTypes.STRING,
        allowNull:false
    },
    esterelizacion: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    }
    },
    {
        timestamps: false,
    }
    );
};