"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING,
    completedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function() {
      }
    },
    instanceMethods: {
      markCompleted: function() {
        this.completedAt = new Date();
        return this.save();
      }
    }
  });

  return Task;
};
