'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecordHistory = sequelize.define('RecordHistory', {
    userId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER
  }, {});
  RecordHistory.associate = function(models) {
    RecordHistory.belongsTo(models.Users, { foreignKey: 'userId'})
    RecordHistory.belongsTo(models.Tickets, { foreignKey: 'ticketId'})
  };
  return RecordHistory;
};
