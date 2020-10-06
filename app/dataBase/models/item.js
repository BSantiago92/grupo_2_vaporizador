'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Item.init({
    salePrice: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    subTotal: DataTypes.INTEGER,
    state: DataTypes.TINYINT,
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    cart_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items'
  });
  return Item;
};