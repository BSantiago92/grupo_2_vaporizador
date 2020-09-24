'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User);
    }
  };
  User_category.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_category',
    timestamps: false
  });
  return User_category;
};