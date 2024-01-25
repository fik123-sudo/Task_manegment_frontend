'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_user_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_user_type.init({
    id: DataTypes.CHAR,
    user_id: DataTypes.CHAR,
    user_type_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_user_type',
  });
  return user_user_type;
};