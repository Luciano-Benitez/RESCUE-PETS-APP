const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('pet_status', {
    status: {
        type: DataTypes.TEXT,
        allowNull:false
    }
    },
    {
        timestamps: false,
    }
    );
};