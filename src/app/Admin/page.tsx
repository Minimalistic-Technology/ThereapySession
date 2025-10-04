"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, TrendingUp } from "lucide-react";
import {
  Product,
  Testimonial,
  ProductFormData,
  TestimonialFormData,
} from "../utils/admin";
import ProductsSection from "../Components/AdminFiles/ProductsSection";
import TestimonialsSection from "../Components/AdminFiles/TestimonialSection";

const AdminDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(false);
  };

  const handleAddProduct = async (data: ProductFormData) => {
    // No-op: Supabase removed
    console.log("Add product:", data);
  };

  const handleEditProduct = async (id: string, data: ProductFormData) => {
    // No-op: Supabase removed
    console.log("Edit product:", id, data);
  };

  const handleDeleteProduct = async (id: string) => {
    // No-op: Supabase removed
    console.log("Delete product:", id);
  };

  const handleAddTestimonial = async (data: TestimonialFormData) => {
    // No-op: Supabase removed
    console.log("Add testimonial:", data);
  };

  const handleEditTestimonial = async (
    id: string,
    data: TestimonialFormData
  ) => {
    // No-op: Supabase removed
    console.log("Edit testimonial:", id, data);
  };

  const handleDeleteTestimonial = async (id: string) => {
    // No-op: Supabase removed
    console.log("Delete testimonial:", id);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-yellow-50/80 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading dashboard...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-blue-50 rounded-3xl shadow-xl p-6 sm:p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
              <LayoutDashboard className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your products and testimonials
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              className="bg-yellow-50 rounded-2xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Total Products
                </h3>
              </div>
              <p className="text-4xl font-bold text-gray-800">
                {products.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {products.filter((p) => p.is_active).length} active
              </p>
            </motion.div>

            <motion.div
              className="bg-yellow-50 rounded-2xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Total Testimonials
                </h3>
              </div>
              <p className="text-4xl font-bold text-gray-800">
                {testimonials.length}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {testimonials.filter((t) => t.is_featured).length} featured
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-blue-50 rounded-3xl shadow-xl p-6 sm:p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ProductsSection
            products={products}
            onAdd={handleAddProduct}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        </motion.div>

        <motion.div
          className="bg-blue-50 rounded-3xl shadow-xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TestimonialsSection
            testimonials={testimonials}
            onAdd={handleAddTestimonial}
            onEdit={handleEditTestimonial}
            onDelete={handleDeleteTestimonial}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;