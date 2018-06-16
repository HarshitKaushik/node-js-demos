const product = require('../model/product');

// Create a test controller
//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

// Create a new product in the database
// POST request
exports.createProduct = function (req, res) {
  console.log('here');
  console.log(req.body);
  const productObj = new product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );

  productObj.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully')
  })
};

// GET request to fetch a product by ID
exports.productDetails = function (req, res) {
  product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  })
};

// PUT request to update the product
exports.productUpdate = function (req, res) {
  product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return next(err);
    res.send('Product updated.');
  });
};

// DELETE request to delete a product
exports.productDelete = function (req, res) {
  product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Deleted successfully!');
  })
};