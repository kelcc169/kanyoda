const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  quote: String,
  photo: String
})


module.exports = mongoose.model('Favorite', favoriteSchema);