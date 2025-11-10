"use client"; // For onClick handler

import React, { useContext } from 'react';
// import { CartContext } from '@/context/CartContext';

export default function ProductCard({ product }) {
  // const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // addToCart(product, 1);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-lg">
      <a href={`/products/${product._id}`} className="block">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://placehold.co/600x400/EEE/313131?text=Image'; }}
          />
        </div>
      </a>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate" title={product.name}>
          <a href={`/products/${product._id}`}>{product.name}</a>
        </h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}