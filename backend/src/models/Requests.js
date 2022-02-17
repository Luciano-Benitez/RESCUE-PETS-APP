const { DataTypes }= require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('requests', {
    answers: {
        type: DataTypes.STRING,
        allowNull:false
    },
    
    },
    {
        timestamps: false,
    }
    );
};