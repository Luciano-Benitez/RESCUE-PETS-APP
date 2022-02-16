const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('countries',{
        country: {
            type:  DataTypes.STRING,
            allowNull: false
        },
        
    },{timestamps: false})
};