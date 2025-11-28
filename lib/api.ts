const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  total?: number;
}

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Product interfaces
export interface Product {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  category: string;
  image: string;
  dateAdded: string;
  priority: string;
  rating?: number;
  reviews?: number;
}

export interface CreateProductData {
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  date: string;
  priority: string;
  imageUrl?: string;
  category?: string;
}

// Product API functions
export const productApi = {
  // Get all products
  getAll: async (filters?: { category?: string; search?: string }): Promise<Product[]> => {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.search) params.append('search', filters.search);
    
    const queryString = params.toString();
    const endpoint = `/products${queryString ? `?${queryString}` : ''}`;
    
    const response = await apiRequest<{ data: Product[] }>(endpoint);
    return response.data || [];
  },

  // Get single product
  getById: async (id: number): Promise<Product> => {
    const response = await apiRequest<{ data: Product }>(`/products/${id}`);
    if (!response.data) {
      throw new Error('Product not found');
    }
    return response.data;
  },

  // Create product
  create: async (productData: CreateProductData): Promise<Product> => {
    const response = await apiRequest<{ data: Product }>('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
    if (!response.data) {
      throw new Error('Failed to create product');
    }
    return response.data;
  },

  // Update product
  update: async (id: number, productData: Partial<CreateProductData>): Promise<Product> => {
    const response = await apiRequest<{ data: Product }>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
    if (!response.data) {
      throw new Error('Failed to update product');
    }
    return response.data;
  },

  // Delete product
  delete: async (id: number): Promise<void> => {
    await apiRequest(`/products/${id}`, {
      method: 'DELETE',
    });
  },
};

// Health check
export const healthCheck = async (): Promise<boolean> => {
  try {
    const response = await apiRequest<{ status: string }>('/health');
    return response.success;
  } catch {
    return false;
  }
};

