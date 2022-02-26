const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('followUp',{
        followUpDate1: {
            type:  DataTypes.DATE,
            allowNull: false
        },
        followUpDate2: {
            type:  DataTypes.DATE,
            allowNull: false
        },
        followUpDate3: {
            type:  DataTypes.DATE,
            allowNull: false
        },
        
    },{timestamps: false})
};