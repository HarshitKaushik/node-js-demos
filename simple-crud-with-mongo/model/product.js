const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductSchema = new schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);