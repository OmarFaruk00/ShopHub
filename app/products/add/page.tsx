'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AddProduct() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    price: '',
    date: '',
    priority: '',
    imageUrl: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  useEffect(() => {
    // Set default date to today
    if (!formData.date) {
      const today = new Date().toISOString().split('T')[0]
      setFormData(prev => ({ ...prev, date: today }))
    }
  }, [])

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowToast(false)

    // Simulate API call
    setTimeout(() => {
      setToastMessage('Product added successfully!')
      setShowToast(true)
      setFormData({
        title: '',
        shortDescription: '',
        fullDescription: '',
        price: '',
        date: new Date().toISOString().split('T')[0],
        priority: '',
        imageUrl: '',
      })
      setIsSubmitting(false)

      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false)
      }, 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-4 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">{toastMessage}</span>
            <button
              onClick={() => setShowToast(false)}
              className="ml-auto text-white hover:text-gray-200 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Add New Product</h1>
          <p className="text-gray-600">Fill in the form below to add a new product to the catalog</p>
        </div>

        <form className="card" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter product title"
              />
            </div>

            {/* Short Description */}
            <div>
              <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Short Description *
              </label>
              <textarea
                id="shortDescription"
                name="shortDescription"
                required
                rows={2}
                maxLength={200}
                value={formData.shortDescription}
                onChange={handleChange}
                className="input-field"
                placeholder="Brief description (1-2 lines, max 200 characters)"
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.shortDescription.length}/200 characters
              </p>
            </div>

            {/* Full Description */}
            <div>
              <label htmlFor="fullDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Full Description *
              </label>
              <textarea
                id="fullDescription"
                name="fullDescription"
                required
                rows={6}
                value={formData.fullDescription}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter detailed product description"
              />
            </div>

            {/* Price, Date, Priority */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                  Priority *
                </label>
                <select
                  id="priority"
                  name="priority"
                  required
                  value={formData.priority}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {/* Optional Image URL */}
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="input-field"
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-xs text-gray-500 mt-1">Enter a URL for the product image</p>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4 border-t border-gray-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding Product...
                  </span>
                ) : (
                  'Submit'
                )}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

