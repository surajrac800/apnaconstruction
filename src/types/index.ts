// Common types for the application

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location?: string;
  year?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

