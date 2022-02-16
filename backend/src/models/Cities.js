const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('cities', {
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{timestamps: false})
};