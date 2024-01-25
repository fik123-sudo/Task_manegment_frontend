'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  task.init({
    id: DataTypes.CHAR,
    t_name: DataTypes.STRING,
    assigned_date: DataTypes.DATE,
    status: DataTypes.STRING,
    user_id: DataTypes.STRING,
    completed_date: DataTypes.DATE,
    assigned_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
  /// the fllwing code is changing  the database in to orm tool
};