'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category);
      this.belongsTo(models.Brand);
      // this.belongsTo(models.User);
      // this.belongsTo(models.Item);
    }
  };
  Product.init({
    category_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    name: DataTypes.STRING(70),
    model_1: DataTypes.STRING(45),
    model_2: DataTypes.STRING(45),
    model_3: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,0),
    img: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false
  });
  return Product;
};