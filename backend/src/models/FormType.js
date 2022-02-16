const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("formtype",
    {
      Type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
