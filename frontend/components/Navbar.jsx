"use client"; // This component uses client-side hooks (e.g., useContext)

import React, { useContext } from 'react';
// import { AuthContext } from '@/context/AuthContext'; // Will be used later
// import { CartContext } from '@/context/CartContext'; // Will be used later

export default function Navbar() {
  // const { user, logout } = useContext(AuthContext);
  // const { cart } = useContext(CartContext);
  
  // Placeholder values for now
  const user = null;
  const cartItemCount = 0; // cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          StoreLogo
        </a>
        <div className="flex space-x-6 items-center">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/products" className="text-gray-600 hover:text-gray-900">Products</a>
          
          {user ? (
            <>
              <a href="/profile" className="text-gray-600 hover:text-gray-900">Profile</a>
              <button 
                // onClick={logout} 
                className="text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="text-gray-600 hover:text-gray-900">Login</a>
              <a href="/register" className="text-gray-600 hover:text-gray-900">Register</a>
            </>
          )}

          <a href="/cart" className="relative text-gray-600 hover:text-gray-900">
            {/* Shopping Cart Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
}