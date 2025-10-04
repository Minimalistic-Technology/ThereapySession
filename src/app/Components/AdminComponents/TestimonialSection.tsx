"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Plus,
  CreditCard as Edit2,
  Trash2,
  Star,
} from "lucide-react";
import { Testimonial, TestimonialFormData } from "../../utils/admin";
import TestimonialFormModal from "./TestimonialFormModal";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  onAdd: (data: TestimonialFormData) => void;
  onEdit: (id: string, data: TestimonialFormData) => void;
  onDelete: (id: string) => void;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<
    Testimonial | undefined
  >();

  const handleAddClick = () => {
    setEditingTestimonial(undefined);
    setShowModal(true);
  };

  const handleEditClick = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setShowModal(true);
  };

  const handleSave = (data: TestimonialFormData) => {
    if (editingTestimonial) {
      onEdit(editingTestimonial.id, data);
    } else {
      onAdd(data);
    }
    setShowModal(false);
    setEditingTestimonial(undefined);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      onDelete(id);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-7 h-7 text-yellow-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Testimonials
          </h2>
        </div>
        <motion.button
          onClick={handleAddClick}
          className="bg-yellow-400 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-yellow-500 transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5" />
          Add Testimonial
        </motion.button>
      </div>

      {testimonials.length === 0 ? (
        <motion.div
          className="bg-yellow-50 rounded-2xl p-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No testimonials yet</p>
          <p className="text-gray-500 text-sm mt-2">
            Add your first testimonial to get started
          </p>
        </motion.div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4 mb-4">
                {testimonial.image_url ? (
                  <img
                    src={testimonial.image_url}
                    alt={testimonial.client_name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-yellow-600">
                      {testimonial.client_name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-800">
                    {testimonial.client_name}
                  </h3>
                  {testimonial.client_role && (
                    <p className="text-sm text-gray-600">
                      {testimonial.client_role}
                    </p>
                  )}
                  <div className="flex items-center gap-1 mt-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {testimonial.is_featured && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full flex-shrink-0">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {testimonial.content}
              </p>

              <div className="flex gap-2">
                <motion.button
                  onClick={() => handleEditClick(testimonial)}
                  className="flex-1 bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold hover:bg-blue-200 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </motion.button>
                <motion.button
                  onClick={() => handleDelete(testimonial.id)}
                  className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-xl font-semibold hover:bg-red-200 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {showModal && (
        <TestimonialFormModal
          testimonial={editingTestimonial}
          onClose={() => {
            setShowModal(false);
            setEditingTestimonial(undefined);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default TestimonialsSection;
