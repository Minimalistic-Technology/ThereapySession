export interface Product {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  image_url?: string;
  category: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  client_role?: string;
  content: string;
  rating: number;
  image_url?: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export type ProductFormData = Omit<Product, "id" | "created_at" | "updated_at">;
export type TestimonialFormData = Omit<
  Testimonial,
  "id" | "created_at" | "updated_at"
>;
