// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category // do
Product.belongsTo(Category, { // done
  foreignKey: 'category_id',
});

// Categories have many Products  // do
Category.hasMany(Product, {   // done
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)  // do
Product.belongsToMany(Tag, {
  through: ProductTag,  //  done
  foreignKey: 'product_id',
  otherKey: 'tag_id'
});

// Tags belongToMany Products (through ProductTag)  // do
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',   // done
  otherKey: 'product_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
