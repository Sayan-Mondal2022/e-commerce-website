"use client";

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });

  // Load cart from localStorage on mount
  useEffect(() => {
    // const localCart = localStorage.getItem('cart');
    // if (localCart) {
    //   setCart(JSON.parse(localCart));
    // }
  }, []);

  // Persist cart to localStorage
  useEffect(() => {
    // if (cart.items.length > 0) {
    //   localStorage.setItem('cart', JSON.stringify(cart));
    // }
  }, [cart]);

  const addToCart = (product, quantity) => {
    // Logic to add item to cart
    console.log('Add to cart called', product.name, quantity);
  };

  const removeFromCart = (productId) => {
    // Logic to remove item from cart
    console.log('Remove from cart called', productId);
  };

  const updateQuantity = (productId, newQuantity) => {
    // Logic to update item quantity
    console.log('Update quantity called', productId, newQuantity);
  };

  const clearCart = () => {
    // setCart({ items: [] });
    // localStorage.removeItem('cart');
    console.log('Clear cart called');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};