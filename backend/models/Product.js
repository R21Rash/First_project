const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  genre: String,
  description: String,
  price: Number,
  imgSrc: String,
  // Assuming images are stored as file paths
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
