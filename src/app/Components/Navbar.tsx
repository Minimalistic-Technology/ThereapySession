"use client";
import React, { useState } from "react";
import { Heart, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "pt-br", name: "Brazilian Portuguese", flag: "🇧🇷" },
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="max-w-9xl mx-auto px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-200 to-yellow-200 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Ana Paula
            </h1>
          </div>

          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#products"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Products
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="text-lg">
                  {
                    languages.find((lang) => lang.name === selectedLanguage)
                      ?.flag
                  }
                </span>
                <span className="text-sm font-medium">{selectedLanguage}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language.name)}
                      className={`w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-blue-50 transition-colors ${
                        selectedLanguage === language.name
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm">{language.name}</span>
                      {selectedLanguage === language.name && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Signup & Login Buttons */}
            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                Sign Up
              </button>
              <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;