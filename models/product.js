const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Product extends Model { }

Product.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Product',
});

module.exports = Product;