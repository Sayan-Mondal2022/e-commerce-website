// Import required packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the connectDB function

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// --- Connect to MongoDB ---
connectDB(); // Call the connection function

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS)
// Configure this to only allow your Next.js frontend URL in production
app.use(cors());

// Enable a middleware to parse JSON request bodies
app.use(express.json());

// --- API Routes ---
// A simple test route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the E-commerce API' });
});

// Import and use your API routes
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
// ... etc.


// --- Start the Server ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});