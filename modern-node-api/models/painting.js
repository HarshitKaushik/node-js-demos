const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PaintingSchema = new schema({
  name: String,
  url: String,
  technique: String
});

module.exports = mongoose.model('Painting', PaintingSchema);