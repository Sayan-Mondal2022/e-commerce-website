const express = require('express');
const router = express.Router();
const { getProducts, getProductById, seedProducts } = require('../controllers/product.controller');
// const { protect, admin } = require('../middleware/auth.middleware'); // For admin actions

// @route   GET /api/products/seed
// @desc    Create sample products
// @access  Public (for testing)
router.post('/seed', seedProducts);

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get('/', getProducts);

// @route   GET /api/products/:id
// @desc    Get a single product by ID
// @access  Public
router.get('/:id', getProductById);

// --- Admin Routes (Example) ---
// router.post('/', protect, admin, createProduct);
// router.put('/:id', protect, admin, updateProduct);

module.exports = router;