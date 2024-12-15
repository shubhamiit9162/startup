const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// Guest route - fetch products without authentication
router.get('/guest', getProducts);

// Authenticated routes
router.route('/')
  .get(authMiddleware, getProducts)   // Fetch products (authenticated)
  .post(authMiddleware, createProduct); // Create a product

router.route('/:id')
  .get(getProductById)  // Get product by ID (public)
  .put(authMiddleware, updateProduct) // Update a product (authenticated)
  .delete(authMiddleware, deleteProduct); // Delete a product (authenticated)

module.exports = router;
