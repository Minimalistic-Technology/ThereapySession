"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Briefcase, MessageSquare, Star, Image } from "lucide-react";
import { Testimonial, TestimonialFormData } from "../../utils/admin";

interface TestimonialFormModalProps {
  testimonial?: Testimonial;
  onClose: () => void;
  onSave: (data: TestimonialFormData) => void;
}

const TestimonialFormModal: React.FC<TestimonialFormModalProps> = ({
  testimonial,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<TestimonialFormData>({
    client_name: "",
    client_role: "",
    content: "",
    rating: 5,
    image_url: "",
    is_featured: false,
  });

  useEffect(() => {
    if (testimonial) {
      setFormData({
        client_name: testimonial.client_name,
        client_role: testimonial.client_role || "",
        content: testimonial.content,
        rating: testimonial.rating,
        image_url: testimonial.image_url || "",
        is_featured: testimonial.is_featured,
      });
    }
  }, [testimonial]);

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
      [name]: type === "number" ? parseInt(value) : value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      is_featured: e.target.checked,
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
            {testimonial ? "Edit Testimonial" : "Add New Testimonial"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <User className="w-5 h-5 mr-2 text-yellow-600" />
                Client Name
              </label>
              <input
                type="text"
                name="client_name"
                value={formData.client_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                placeholder="Enter client name"
              />
            </div>

          

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <MessageSquare className="w-5 h-5 mr-2 text-yellow-600" />
                Testimonial Content
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white resize-none"
                placeholder="Enter testimonial text"
              />
            </div>

          

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Image className="w-5 h-5 mr-2 text-yellow-600" />
                Client Photo URL (Optional)
              </label>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            {/* <div className="flex items-center">
              <input
                type="checkbox"
                name="is_featured"
                checked={formData.is_featured}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
              />
              <label className="ml-3 text-gray-700 font-semibold">
                Featured (display on homepage)
              </label>
            </div> */}

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
                {testimonial ? "Update Testimonial" : "Add Testimonial"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TestimonialFormModal;
