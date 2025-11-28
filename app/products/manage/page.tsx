'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image?: string
  dateAdded?: string
}

export default function ManageProducts() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium quality wireless headphones with noise cancellation',
      price: 99.99,
      category: 'electronics',
      image: '🎧',
      dateAdded: '2024-01-15',
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health tracking',
      price: 249.99,
      category: 'electronics',
      image: '⌚',
      dateAdded: '2024-02-10',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      description: 'Ergonomic aluminum laptop stand for better posture',
      price: 49.99,
      category: 'accessories',
      image: '💻',
      dateAdded: '2024-01-20',
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with long battery life',
      price: 29.99,
      category: 'accessories',
      image: '🖱️',
      dateAdded: '2024-02-05',
    },
    {
      id: 5,
      name: 'USB-C Hub',
      description: 'Multi-port USB-C hub for all your connectivity needs',
      price: 39.99,
      category: 'accessories',
      image: '🔌',
      dateAdded: '2024-01-25',
    },
    {
      id: 6,
      name: 'Desk Lamp',
      description: 'LED desk lamp with adjustable brightness and color temperature',
      price: 59.99,
      category: 'home',
      image: '💡',
      dateAdded: '2024-02-15',
    },
    {
      id: 7,
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard with customizable keys',
      price: 129.99,
      category: 'electronics',
      image: '⌨️',
      dateAdded: '2024-02-01',
    },
    {
      id: 8,
      name: 'Monitor Stand',
      description: 'Adjustable monitor stand with cable management',
      price: 79.99,
      category: 'accessories',
      image: '🖥️',
      dateAdded: '2024-01-30',
    },
    {
      id: 9,
      name: 'Webcam HD',
      description: '1080p HD webcam with auto-focus and noise reduction',
      price: 89.99,
      category: 'electronics',
      image: '📹',
      dateAdded: '2024-02-12',
    },
  ])
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
    setShowDeleteConfirm(null)
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Manage Products</h1>
          <p className="text-gray-600">View and manage all your products</p>
        </div>
        <Link href="/products/add" className="btn-primary whitespace-nowrap">
          + Add New Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="card text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <p className="text-gray-500 mb-4 text-lg">No products found</p>
          <Link href="/products/add" className="btn-primary">
            Add Your First Product
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date Added
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{product.image || '📦'}</div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{product.name}</div>
                            <div className="text-sm text-gray-500 line-clamp-1 max-w-xs">
                              {product.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-800 capitalize">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">
                          {formatDate(product.dateAdded)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <Link
                            href={`/products/${product.id}`}
                            className="text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
                          >
                            View
                          </Link>
                          {showDeleteConfirm === product.id ? (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleDelete(product.id)}
                                className="text-red-600 hover:text-red-800 font-medium text-sm bg-red-50 px-3 py-1 rounded transition-colors"
                              >
                                Confirm
                              </button>
                              <button
                                onClick={() => setShowDeleteConfirm(null)}
                                className="text-gray-600 hover:text-gray-800 font-medium text-sm bg-gray-50 px-3 py-1 rounded transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setShowDeleteConfirm(product.id)}
                              className="text-red-600 hover:text-red-800 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded px-2 py-1"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {products.map((product) => (
              <div key={product.id} className="card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl flex-shrink-0">{product.image || '📦'}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-800 capitalize">
                        {product.category}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Added: {formatDate(product.dateAdded)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 btn-primary text-center text-sm"
                  >
                    View
                  </Link>
                  {showDeleteConfirm === product.id ? (
                    <div className="flex gap-2 flex-1">
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirm(null)}
                        className="flex-1 btn-secondary text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowDeleteConfirm(product.id)}
                      className="flex-1 bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors text-sm border border-red-200"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Total products: <span className="font-semibold text-gray-900">{products.length}</span>
            </p>
          </div>
        </>
      )}
    </div>
  )
}

