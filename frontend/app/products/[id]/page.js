"use client";

import React, { useState, useEffect, useContext } from 'react';
import api from '@/lib/api';
import { CartContext } from '@/context/CartContext';

// Add a simple loading spinner component
const Spinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default function ProductDetailPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const { data } = await api.get(`/products/${id}`);
          setProduct(data);
          setError(null);
        } catch (err) {
          console.error("Failed to fetch product:", err);
          setError("Product not found or an error occurred.");
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // You could add a toast notification here
      console.log(`Added ${quantity} of ${product.name} to cart`);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-center text-red-500 py-20">{error}</div>;
  }

  if (!product) {
    return <div className="text-center text-gray-500 py-20">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover aspect-square"
            onError={(e) => { e.target.src = 'https://placehold.co/600x600/EEE/313131?text=Image'; }}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          
          <p className="text-3xl text-blue-600 font-semibold mb-6">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
          
          <div className="flex items-center gap-4 mb-8">
            <label htmlFor="quantity" className="text-lg font-semibold text-gray-700">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              className="w-20 border border-gray-300 rounded-md shadow-sm p-2 text-center focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full py-3 px-6 rounded-md text-white font-semibold text-lg transition-colors ${
              product.stock === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            }`}
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}