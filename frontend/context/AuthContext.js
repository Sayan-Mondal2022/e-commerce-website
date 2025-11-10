"use client";

import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import api from '@/lib/api'; // We'll use this later

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // On component mount, check if user is logged in (e.g., from localStorage)
  useEffect(() => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   // You'd typically verify the token with a /me endpoint
    //   // For now, let's assume token is valid if it exists
    //   const userData = JSON.parse(localStorage.getItem('user'));
    //   setUser(userData);
    // }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // try {
    //   const { data } = await api.post('/auth/login', { email, password });
    //   setUser(data);
    //   localStorage.setItem('user', JSON.stringify(data));
    //   localStorage.setItem('token', data.token);
    //   router.push('/profile');
    // } catch (error) {
    //   console.error('Login failed', error.response.data.message);
    // }
    console.log('Login function called');
  };

  const register = async (name, email, password) => {
    // try {
    //   const { data } = await api.post('/auth/register', { name, email, password });
    //   setUser(data);
    //   localStorage.setItem('user', JSON.stringify(data));
    //   localStorage.setItem('token', data.token);
    //   router.push('/profile');
    // } catch (error) {
    //   console.error('Registration failed', error.response.data.message);
    // }
    console.log('Register function called');
  };

  const logout = () => {
    // setUser(null);
    // localStorage.removeItem('user');
    // localStorage.removeItem('token');
    // router.push('/login');
    console.log('Logout function called');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};