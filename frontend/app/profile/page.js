"use client";

import React, { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import ProtectedPage from '@/components/ProtectedPage';

function ProfilePageContent() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    // This part should technically not be reached if ProtectedPage works,
    // but it's good practice.
    return <div>Loading user data...</div>;
  }

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome, {user.name}!
        </h1>
        
        <div className="space-y-4 mb-8">
          <div className="text-lg">
            <span className="font-semibold text-gray-700">Full Name:</span>
            <span className="text-gray-600 ml-2">{user.name}</span>
          </div>
          <div className="text-lg">
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-600 ml-2">{user.email}</span>
          </div>
          <div className="text-lg">
            <span className="font-semibold text-gray-700">Role:</span>
            <span className="text-gray-600 ml-2">{user.isAdmin ? 'Admin' : 'Customer'}</span>
          </div>
        </div>

        <button
          onClick={logout}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

// Wrap the content in the ProtectedPage component
export default function ProfilePage() {
  return (
    <ProtectedPage>
      <ProfilePageContent />
    </ProtectedPage>
  );
}