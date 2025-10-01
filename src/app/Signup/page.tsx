"use client";
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
  Heart,
} from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface SignupProps {
  onSwitchToLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/userauth/signup",
        {
          fullName: signupData.fullName,
          email: signupData.email,
          phoneNumber: signupData.phoneNumber,
          dob: signupData.dateOfBirth,
          location: signupData.location,
          gender: signupData.gender,
          password: signupData.password,
          confirmPassword: signupData.confirmPassword,
        }
      );

      // Optionally, automatically log the user in after signup
      const loginResponse = await axios.post(
        "http://localhost:5000/api/userauth/login",
        {
          email: signupData.email,
          password: signupData.password,
        }
      );

      const { token, user } = loginResponse.data;
      localStorage.setItem("token", token);
      localStorage.setItem("therapy-user", JSON.stringify(user));

      // Redirect to dashboard
      router.push("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "An error occurred during signup"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-4xl border border-blue-200">
        <div className="w-full max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Join Our Community
            </h1>
            <p className="text-gray-600">
              Start your journey of transformation
            </p>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-xl mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSignupSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={signupData.fullName}
                  onChange={(e) =>
                    setSignupData({ ...signupData, fullName: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white/70 text-gray-800 placeholder-gray-500 hover:bg-white/90"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white/70 text-gray-800 placeholder-gray-500 hover:bg-white/90"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={signupData.phoneNumber}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      phoneNumber: e.target.value,
                    })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white/70 text-gray-800 placeholder-gray-500 hover:bg-white/90"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="relative">
                <select
                  value={signupData.gender}
                  onChange={(e) =>
                    setSignupData({ ...signupData, gender: e.target.value })
                  }
                  className="w-full pl-4 pr-10 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white/70 text-gray-800 appearance-none hover:bg-white/90"
                  required
                  disabled={isLoading}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="Prefer Not to say">Prefer not to say</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-blue-500"
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
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="text"
                  placeholder="Location (City, Country)"
                  value={signupData.location}
                  onChange={(e) =>
                    setSignupData({ ...signupData, location: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white/70 text-gray-800 placeholder-gray-500 hover:bg-white/90"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  value={signupData.dateOfBirth}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      dateOfBirth: e.target.value,
                    })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white/70 text-gray-800 hover:bg-white/90"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  className="w-full pl-10 pr-12 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white/70 text-gray-800 placeholder-gray-500 hover:bg-white/90"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-blue-500 hover:text-yellow-500 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-blue-500 hover:text-yellow-500 transition-colors" />
                  )}
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-500" />
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
                  className="w-full pl-10 pr-12 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white/70 text-gray-800 placeholder-gray-500 hover:bg-white/90"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  disabled={isLoading}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-blue-500 hover:text-yellow-500 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-blue-500 hover:text-yellow-500 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-blue-300 rounded"
                required
                disabled={isLoading}
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-yellow-600 underline font-medium transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-yellow-600 underline font-medium transition-colors"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-yellow-400 text-white py-3 px-4 rounded-xl hover:from-blue-500 hover:to-yellow-500 focus:ring-4 focus:ring-blue-300 transition-all duration-200 font-semibold flex items-center justify-center gap-2 group transform hover:scale-105 shadow-lg disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onSwitchToLogin}
              className="w-full bg-white border-2 border-blue-200 text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 hover:border-blue-300 focus:ring-4 focus:ring-blue-200 transition-all duration-200 font-semibold transform hover:scale-105"
              disabled={isLoading}
            >
              Sign In Instead
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;