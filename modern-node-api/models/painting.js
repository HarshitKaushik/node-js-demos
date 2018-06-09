const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PaintingSchema = new schema({
  name: String,
  url: String,
  techniques: [String]
});

module.exports = mongoose.model('Painting', PaintingSchema);