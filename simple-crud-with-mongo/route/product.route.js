const express = require('express');
const router = express.Router();

// Require the controller
const productController = require('../controller/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', productController.test);

// Create a new product
router.post('/create', productController.createProduct);

// Get a product by ID
router.get('/:id', productController.productDetails);

// Update a product by ID
router.put('/:id', productController.productUpdate);

// Delete a product by ID
router.delete('/:id', productController.productDelete);

module.exports = router;