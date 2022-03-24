// Employee model - For .....
// Author: vickybaskae7@gmail.com
// Date: 23 Mar, 2022.

module.exports = (sequelize, DataTypes) => {
  const pro = sequelize.define("employe", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  return pro;
};