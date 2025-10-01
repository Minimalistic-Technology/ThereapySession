"use client";
import React, { useState } from "react";
import { Lock, Mail, ArrowRight, Eye, EyeOff, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface LoginProps {
  onSwitchToSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/userauth/login",
        loginData
      );
      const { token, user } = response.data;

      // Store token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("therapy-user", JSON.stringify(user));

      // Redirect to dashboard
      router.push("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md border border-blue-200">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Continue your journey of growth</p>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-xl mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-white/70 text-gray-800 placeholder-gray-500 hover:bg-white/90"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
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
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-blue-300 rounded"
                  disabled={isLoading}
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-yellow-600 transition-colors font-medium"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 to-yellow-400 text-white py-3 px-4 rounded-xl hover:from-blue-500 hover:to-yellow-500 focus:ring-4 focus:ring-blue-300 transition-all duration-200 font-semibold flex items-center justify-center gap-2 group transform hover:scale-105 shadow-lg disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">New here?</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => router.push("/Signup")}
              className="w-full bg-white border-2 border-blue-200 text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 hover:border-blue-300 focus:ring-4 focus:ring-blue-200 transition-all duration-200 font-semibold transform hover:scale-105"
              disabled={isLoading}
            >
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;