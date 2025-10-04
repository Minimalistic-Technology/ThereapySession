"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Package,
  Plus,
  CreditCard as Edit2,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";
import { Product, ProductFormData } from "../../utils/admin";
import ProductFormModal from "./ProductFormModal";

interface ProductsSectionProps {
  products: Product[];
  onAdd: (data: ProductFormData) => void;
  onEdit: (id: string, data: ProductFormData) => void;
  onDelete: (id: string) => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  onAdd,
  onEdit,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();

  const handleAddClick = () => {
    setEditingProduct(undefined);
    setShowModal(true);
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleSave = (data: ProductFormData) => {
    if (editingProduct) {
      onEdit(editingProduct.id, data);
    } else {
      onAdd(data);
    }
    setShowModal(false);
    setEditingProduct(undefined);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      onDelete(id);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Package className="w-7 h-7 text-yellow-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Products
          </h2>
        </div>
        <motion.button
          onClick={handleAddClick}
          className="bg-yellow-400 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-yellow-500 transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5" />
          Add Product
        </motion.button>
      </div>

      {products.length === 0 ? (
        <motion.div
          className="bg-yellow-50 rounded-2xl p-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No products yet</p>
          <p className="text-gray-500 text-sm mt-2">
            Add your first product to get started
          </p>
        </motion.div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {product.image_url && (
                <img
                  src={product.image_url}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
              )}

              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {product.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center ml-2">
                  {product.is_active ? (
                    <Eye className="w-5 h-5 text-green-600" title="Active" />
                  ) : (
                    <EyeOff
                      className="w-5 h-5 text-gray-400"
                      title="Inactive"
                    />
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-800">
                  ${product.price}
                </span>
              </div>

              <div className="flex gap-2">
                <motion.button
                  onClick={() => handleEditClick(product)}
                  className="flex-1 bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold hover:bg-blue-200 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </motion.button>
                <motion.button
                  onClick={() => handleDelete(product.id)}
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
        <ProductFormModal
          product={editingProduct}
          onClose={() => {
            setShowModal(false);
            setEditingProduct(undefined);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ProductsSection;
