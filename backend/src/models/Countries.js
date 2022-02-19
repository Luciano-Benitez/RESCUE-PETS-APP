const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('countries',{
        id:{
            type:  DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        country: {
            type:  DataTypes.STRING,
            allowNull: false
        },
        
    },{timestamps: false})
};