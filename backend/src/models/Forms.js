const {DataTypes}=require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('forms', {
    name: {
      type: DataTypes.STRING,
      allowNull:false
  },
  });
};