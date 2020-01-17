'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    token: DataTypes.TEXT,
    authType: DataTypes.BOOLEAN
  }, {
    defaultScope: {
      attributes: { exclude: ['password', 'token'] }
    }
  });
  Users.associate = function(models) {
    Users.belongsToMany(models.Tickets, {through: "RecordHistory", foreignKey: "userId"})
  };
  return Users;
};
