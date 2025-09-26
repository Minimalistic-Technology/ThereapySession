"use client"
import React, { useState } from "react";
import {
  User,
  Lock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    location: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    // Handle login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", signupData);
    // Handle signup logic here
  };

  const LoginForm = () => (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#647FBC] mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to continue your journey</p>
      </div>

      <form onSubmit={handleLoginSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-[#647FBC]" />
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800 placeholder-gray-500"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-[#647FBC]" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              className="w-full pl-10 pr-12 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800 placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-[#647FBC] hover:text-[#AED6CF]" />
              ) : (
                <Eye className="h-5 w-5 text-[#647FBC] hover:text-[#AED6CF]" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-[#AED6CF] focus:ring-[#AED6CF] border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
          <a
            href="#"
            className="text-sm text-[#647FBC] hover:text-[#AED6CF] transition-colors"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FAFDD6] text-[#647FBC] py-3 px-4 rounded-lg hover:bg-[#AED6CF] focus:ring-4 focus:ring-[#91ADC8] transition-all duration-200 font-medium flex items-center justify-center gap-2 group"
        >
          Sign In
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className="text-[#647FBC] font-medium hover:text-[#AED6CF] transition-colors"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );

  const SignupForm = () => (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#647FBC] mb-2">
          Join Our Community
        </h1>
        <p className="text-gray-600">Create your account to get started</p>
      </div>

      <form onSubmit={handleSignupSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-[#647FBC]" />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              value={signupData.fullName}
              onChange={(e) =>
                setSignupData({ ...signupData, fullName: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800 placeholder-gray-500"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-[#647FBC]" />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800 placeholder-gray-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-[#647FBC]" />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={signupData.phoneNumber}
              onChange={(e) =>
                setSignupData({ ...signupData, phoneNumber: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800 placeholder-gray-500"
              required
            />
          </div>

          <div className="relative">
            <select
              value={signupData.gender}
              onChange={(e) =>
                setSignupData({ ...signupData, gender: e.target.value })
              }
              className="w-full pl-4 pr-4 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800 appearance-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-[#647FBC]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-[#647FBC]" />
            </div>
            <input
              type="text"
              placeholder="Location (City, Country)"
              value={signupData.location}
              onChange={(e) =>
                setSignupData({ ...signupData, location: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800 placeholder-gray-500"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-[#647FBC]" />
            </div>
            <input
              type="date"
              placeholder="Date of Birth"
              value={signupData.dateOfBirth}
              onChange={(e) =>
                setSignupData({ ...signupData, dateOfBirth: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-[#647FBC]" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              className="w-full pl-10 pr-12 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800 placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-[#647FBC] hover:text-[#AED6CF]" />
              ) : (
                <Eye className="h-5 w-5 text-[#647FBC] hover:text-[#AED6CF]" />
              )}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-[#647FBC]" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  confirmPassword: e.target.value,
                })
              }
              className="w-full pl-10 pr-12 py-3 border border-[#91ADC8] rounded-lg focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition-colors bg-white text-gray-800 placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-[#647FBC] hover:text-[#AED6CF]" />
              ) : (
                <Eye className="h-5 w-5 text-[#647FBC] hover:text-[#AED6CF]" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-[#AED6CF] focus:ring-[#AED6CF] border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
            I agree to the{" "}
            <a
              href="#"
              className="text-[#647FBC] hover:text-[#AED6CF] underline"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-[#647FBC] hover:text-[#AED6CF] underline"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FAFDD6] text-[#647FBC] py-3 px-4 rounded-lg hover:bg-[#AED6CF] focus:ring-4 focus:ring-[#91ADC8] transition-all duration-200 font-medium flex items-center justify-center gap-2 group"
        >
          Create Account
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="text-center">
          <span className="text-gray-600">Already have an account? </span>
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className="text-[#647FBC] font-medium hover:text-[#AED6CF] transition-colors"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#91ADC8] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-4xl border border-[#AED6CF]">
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

export default App;