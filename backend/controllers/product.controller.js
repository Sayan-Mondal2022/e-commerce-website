const Product = require('../models/Product.model');

const sampleProducts = [
  { id: 1, name: 'Classic T-Shirt', price: 25.00, imageUrl: 'https://placehold.co/600x400/f0f0f0/313131?text=T-Shirt', category: 'Apparel', stock: 100 },
  { id: 2, name: 'Leather Wallet', price: 45.00, imageUrl: 'https://placehold.co/600x400/e0e0e0/313131?text=Wallet', category: 'Accessories', stock: 50 },
  { id: 3, name: 'Canvas Backpack', price: 75.00, imageUrl: 'https://placehold.co/600x400/d0d0d0/313131?text=Backpack', category: 'Bags', stock: 30 },
  { id: 4, name: 'Sunglasses', price: 120.00, imageUrl: 'https://placehold.co/600x400/c0c0c0/313131?text=Sunglasses', category: 'Accessories', stock: 75 },
];

// @desc    Seed sample products
// @route   POST /api/products/seed
// @access  Public (for testing)
const seedProducts = async (req, res) => {
  try {
    // Clear existing products
    await Product.deleteMany({});
    
    // Insert new sample products
    const createdProducts = await Product.insertMany(sampleProducts);
    res.status(201).json(createdProducts);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// @desc    Get a single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

module.exports = { seedProducts, getProducts, getProductById };