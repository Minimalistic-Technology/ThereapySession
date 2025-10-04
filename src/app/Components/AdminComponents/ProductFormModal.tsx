"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Package, DollarSign, Image, Tag } from "lucide-react";
import { Product, ProductFormData } from "../../utils/admin";

interface ProductFormModalProps {
  product?: Product;
  onClose: () => void;
  onSave: (data: ProductFormData) => void;
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({
  product,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<ProductFormData>({
    title: "",
    description: "",
    shortDescription:"",
    price: 0,
    image_url: "",
    category: "ebook",
    is_active: true,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        shortDescription : product.shortDescription,
        price: product.price,
        image_url: product.image_url || "",
        category: product.category,
        is_active: product.is_active,
      });
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      is_active: e.target.checked,
    }));
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-yellow-50 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            {product ? "Edit Product" : "Add New Product"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Package className="w-5 h-5 mr-2 text-yellow-600" />
                Product Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                placeholder="Enter product title"
              />
            </div>

        

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white resize-none"
                placeholder="Enter product description"
              />
            </div>


               <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
               Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white resize-none"
                placeholder="Enter product description"
              />
            </div>


            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-full bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition-colors"
              >
                {product ? "Update Product" : "Add Product"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductFormModal;
