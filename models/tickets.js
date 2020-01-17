'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tickets = sequelize.define('Tickets', {
    title: DataTypes.STRING,
    info: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }, {});
  Tickets.associate = function(models) {
    Tickets.belongsToMany(models.Users, {through: "RecordHistory", foreignKey: "ticketId"})
  };
  return Tickets;
};
