'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
  rating: number
  reviews: number
}

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: '🎧',
      description: 'Premium quality wireless headphones with noise cancellation',
      category: 'electronics',
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 249.99,
      image: '⌚',
      description: 'Feature-rich smartwatch with health tracking',
      category: 'electronics',
      rating: 4.8,
      reviews: 256,
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: 49.99,
      image: '💻',
      description: 'Ergonomic aluminum laptop stand for better posture',
      category: 'accessories',
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      price: 29.99,
      image: '🖱️',
      description: 'Ergonomic wireless mouse with long battery life',
      category: 'accessories',
      rating: 4.4,
      reviews: 203,
    },
    {
      id: 5,
      name: 'USB-C Hub',
      price: 39.99,
      image: '🔌',
      description: 'Multi-port USB-C hub for all your connectivity needs',
      category: 'accessories',
      rating: 4.3,
      reviews: 156,
    },
    {
      id: 6,
      name: 'Desk Lamp',
      price: 59.99,
      image: '💡',
      description: 'LED desk lamp with adjustable brightness and color temperature',
      category: 'home',
      rating: 4.7,
      reviews: 94,
    },
    {
      id: 7,
      name: 'Mechanical Keyboard',
      price: 129.99,
      image: '⌨️',
      description: 'RGB mechanical keyboard with customizable keys',
      category: 'electronics',
      rating: 4.9,
      reviews: 312,
    },
    {
      id: 8,
      name: 'Monitor Stand',
      price: 79.99,
      image: '🖥️',
      description: 'Adjustable monitor stand with cable management',
      category: 'accessories',
      rating: 4.5,
      reviews: 167,
    },
    {
      id: 9,
      name: 'Webcam HD',
      price: 89.99,
      image: '📹',
      description: '1080p HD webcam with auto-focus and noise reduction',
      category: 'electronics',
      rating: 4.6,
      reviews: 198,
    },
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'home', label: 'Home & Office' },
  ]

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Title and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our wide range of high-quality products. Find exactly what you're looking for with our search and filter options.
        </p>
      </div>

      {/* Search Bar and Category Filter */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10 w-full"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="md:w-64">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-gray-600">
        <p>
          Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> of{' '}
          <span className="font-semibold text-gray-900">{products.length}</span> products
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card group flex flex-col"
            >
              {/* Image or Icon */}
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300 min-h-[80px] flex items-center justify-center">
                {product.image}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                {product.name}
              </h3>

              {/* Short Description (1-2 lines with ellipsis) */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2 flex-grow">
                {product.description}
              </p>

              {/* Price/Meta */}
              <div className="mb-4 pt-4 border-t border-gray-200">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <span className="text-2xl font-bold text-primary-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-500">
                    {product.rating} ⭐ ({product.reviews})
                  </span>
                </div>
              </div>

              {/* Details Button */}
              <Link
                href={`/products/${product.id}`}
                className="w-full btn-primary text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="card text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <button
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
            }}
            className="btn-secondary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}

