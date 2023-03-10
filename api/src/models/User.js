const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: "Basic",
        validate: {
          customValidator: (value) => {
            const enums = ["Admin", "Verified", "Basic"];
            if (!enums.includes(value)) {
              throw new Error("not a valid option");
            }
          },
        },
        allowNull: true,
      },
      dni: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
      },
      profile_pic: {
        type : DataTypes.TEXT,
        allowNull: true,
      }
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
