const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('genre', {
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
};

