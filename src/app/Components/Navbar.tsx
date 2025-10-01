"use client";
import React, { useState, useEffect } from "react";
import { Heart, ChevronDown, Menu, X, User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [user, setUser] = useState<{ fullName: string; email: string } | null>(
    null
  );

  const router = useRouter();

  const languages = [
    { code: "en", name: "English", flag: "https://flagcdn.com/w40/us.png" },
    {
      code: "pt-br",
      name: "Português Brasileiro",
      flag: "https://flagcdn.com/w40/br.png",
    },
  ];

  // Check for user data in localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("therapy-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsUserDropdownOpen(false); // Close user dropdown when toggling mobile menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("therapy-user");
    setUser(null);
    setIsUserDropdownOpen(false);
    router.push("/Login");
  };

  return (
    <header className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-200 to-yellow-200 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
              Ana Paula
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Navigation Links */}
            <nav className="flex space-x-8">
              <a
                href="#products"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Products
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
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
                {languages.find((lang) => lang.name === selectedLanguage) && (
                  <img
                    src={
                      languages.find((lang) => lang.name === selectedLanguage)
                        ?.flag
                    }
                    alt={selectedLanguage}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                )}
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
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-sm">{language.name}</span>
                      {selectedLanguage === language.name && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Icon or Auth Buttons */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">{user.fullName}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isUserDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                    <button
                      onClick={() => {
                        router.push("/profile");
                        setIsUserDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-50 transition-colors"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                <button
                  onClick={() => router.push("/signup")}
                  className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => router.push("/login")}
                  className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button & Language Selector */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Language Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center space-x-1 px-2 py-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {languages.find((lang) => lang.name === selectedLanguage) && (
                  <img
                    src={
                      languages.find((lang) => lang.name === selectedLanguage)
                        ?.flag
                    }
                    alt={selectedLanguage}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                )}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language.name)}
                      className={`w-full px-3 py-2 text-left flex items-center space-x-2 hover:bg-blue-50 transition-colors ${
                        selectedLanguage === language.name
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      <img
                        src={language.flag}
                        alt={language.name}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-sm">{language.name}</span>
                      {selectedLanguage === language.name && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
              >
                About
              </a>
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
              >
                Services
              </a>
              <a
                href="#products"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
              >
                Products
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1"
              >
                Contact
              </a>

              {/* Mobile Auth/User Section */}
              {user ? (
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsUserDropdownOpen(!isUserDropdownOpen);
                    }}
                    className="flex items-center space-x-2 px-2 py-1 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span>{user.fullName}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isUserDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isUserDropdownOpen && (
                    <div className="flex flex-col space-y-2 px-2">
                      <button
                        onClick={() => {
                          router.push("/profile");
                          closeMobileMenu();
                        }}
                        className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="text-left text-red-600 hover:text-red-700 transition-colors flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      router.push("/signup");
                      closeMobileMenu();
                    }}
                    className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition text-center"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => {
                      router.push("/login");
                      closeMobileMenu();
                    }}
                    className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition text-center"
                  >
                    Login
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;