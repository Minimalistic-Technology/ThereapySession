import { Heart } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-yellow-50/70 backdrop-blur-sm py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-200 to-yellow-200 rounded-full flex items-center justify-center mr-4">
            <Heart className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="text-2xl font-bold text-gray-800">
           Ana Paula
          </h4>
        </div>
        <p className="text-gray-600 mb-8">
          Transforming lives through the union of science, technique, and
          sensitivity
        </p>
        <div className="text-gray-500">
          <p>&copy; 2024 Psychology Practice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer