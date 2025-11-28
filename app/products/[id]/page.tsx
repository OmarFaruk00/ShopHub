'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
  rating: number
  reviews: number
  fullDescription: string
  dateAdded: string
  priority: string
}

// Mock product data - in a real app, this would come from an API
const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: '🎧',
    category: 'electronics',
    rating: 4.5,
    reviews: 128,
    description: 'Premium quality wireless headphones with noise cancellation',
    fullDescription: 'Experience premium audio quality with our top-of-the-line wireless headphones. Featuring advanced noise cancellation technology, these headphones provide crystal-clear sound in any environment. With up to 30 hours of battery life, comfortable over-ear design, and Bluetooth 5.0 connectivity, they are perfect for music lovers, gamers, and professionals alike. The adjustable headband and soft ear cushions ensure comfort during extended use.',
    dateAdded: '2024-01-15',
    priority: 'high',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 249.99,
    image: '⌚',
    category: 'electronics',
    rating: 4.8,
    reviews: 256,
    description: 'Feature-rich smartwatch with health tracking',
    fullDescription: 'Stay connected and monitor your health with our advanced smartwatch. Track your heart rate, steps, calories burned, and sleep patterns with precision. Water-resistant design makes it perfect for workouts and daily activities. Receive notifications, control music, and access apps directly from your wrist. With a vibrant AMOLED display and customizable watch faces, personalize your experience. Battery lasts up to 7 days on a single charge.',
    dateAdded: '2024-02-10',
    priority: 'high',
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 49.99,
    image: '💻',
    category: 'accessories',
    rating: 4.6,
    reviews: 89,
    description: 'Ergonomic aluminum laptop stand for better posture',
    fullDescription: 'Improve your workspace ergonomics with this sturdy aluminum laptop stand. Elevates your laptop to eye level, reducing neck and back strain. Features adjustable height settings and ventilation slots to keep your device cool. The non-slip base ensures stability, while the lightweight design makes it portable. Compatible with laptops from 11" to 17". Perfect for home offices, co-working spaces, and students.',
    dateAdded: '2024-01-20',
    priority: 'medium',
  },
  {
    id: 4,
    name: 'Wireless Mouse',
    price: 29.99,
    image: '🖱️',
    category: 'accessories',
    rating: 4.4,
    reviews: 203,
    description: 'Ergonomic wireless mouse with long battery life',
    fullDescription: 'Enhance your productivity with this ergonomic wireless mouse designed for comfort and precision. Features a contoured shape that fits naturally in your hand, reducing wrist strain during long work sessions. With 2.4GHz wireless connectivity and a range of up to 10 meters, enjoy lag-free performance. The optical sensor provides accurate tracking on various surfaces. Battery life lasts up to 12 months, and the mouse automatically enters sleep mode to conserve power.',
    dateAdded: '2024-02-05',
    priority: 'medium',
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 39.99,
    image: '🔌',
    category: 'accessories',
    rating: 4.3,
    reviews: 156,
    description: 'Multi-port USB-C hub for all your connectivity needs',
    fullDescription: 'Expand your device connectivity with this versatile USB-C hub. Features multiple ports including USB 3.0, HDMI, SD card reader, and USB-C pass-through charging. Connect external displays, transfer files at high speeds, and charge your devices simultaneously. Compact and lightweight design makes it perfect for travel. Plug-and-play functionality requires no drivers. Compatible with MacBook, iPad Pro, and other USB-C devices.',
    dateAdded: '2024-01-25',
    priority: 'medium',
  },
  {
    id: 6,
    name: 'Desk Lamp',
    price: 59.99,
    image: '💡',
    category: 'home',
    rating: 4.7,
    reviews: 94,
    description: 'LED desk lamp with adjustable brightness and color temperature',
    fullDescription: 'Illuminate your workspace with this modern LED desk lamp featuring adjustable brightness and color temperature. Choose from warm to cool white light (2700K-6500K) to match your preference and time of day. Touch-sensitive controls allow easy adjustment of brightness levels. The flexible gooseneck design lets you position the light exactly where you need it. Energy-efficient LED technology provides bright, flicker-free illumination that reduces eye strain. Perfect for reading, working, or studying.',
    dateAdded: '2024-02-15',
    priority: 'low',
  },
  {
    id: 7,
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: '⌨️',
    category: 'electronics',
    rating: 4.9,
    reviews: 312,
    description: 'RGB mechanical keyboard with customizable keys',
    fullDescription: 'Elevate your typing and gaming experience with this premium mechanical keyboard. Features Cherry MX switches for tactile, responsive keystrokes. Full RGB backlighting with customizable lighting effects and per-key programming. Durable construction with aluminum frame ensures longevity. Includes dedicated media controls, USB passthrough, and detachable wrist rest. Compatible with Windows, Mac, and Linux. Perfect for gamers, programmers, and typing enthusiasts who demand precision and style.',
    dateAdded: '2024-02-01',
    priority: 'high',
  },
  {
    id: 8,
    name: 'Monitor Stand',
    price: 79.99,
    image: '🖥️',
    category: 'accessories',
    rating: 4.5,
    reviews: 167,
    description: 'Adjustable monitor stand with cable management',
    fullDescription: 'Organize your workspace with this adjustable monitor stand that elevates your display to the perfect viewing height. Features a spacious desktop shelf for your keyboard, mouse, and other accessories. Built-in cable management system keeps wires organized and out of sight. Supports monitors up to 32 inches and 20kg weight. Made from premium MDF with a sleek finish. Adjustable height settings accommodate different desk setups and user preferences.',
    dateAdded: '2024-01-30',
    priority: 'medium',
  },
  {
    id: 9,
    name: 'Webcam HD',
    price: 89.99,
    image: '📹',
    category: 'electronics',
    rating: 4.6,
    reviews: 198,
    description: '1080p HD webcam with auto-focus and noise reduction',
    fullDescription: 'Look your best in video calls with this 1080p HD webcam featuring advanced auto-focus and noise reduction technology. Crystal-clear video quality ensures you are seen clearly in any lighting condition. Built-in dual microphones with noise cancellation provide clear audio. Privacy shutter protects your privacy when not in use. Universal clip fits laptops, monitors, and tripods. Perfect for remote work, online meetings, streaming, and content creation.',
    dateAdded: '2024-02-12',
    priority: 'high',
  },
]

export default function ProductDetails({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const productId = parseInt(params.id)
    const foundProduct = products.find((p) => p.id === productId)
    setProduct(foundProduct || null)
  }, [params.id])

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="card text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Large Image/Banner */}
        <div className="w-full">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-12 md:p-16 lg:p-20 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
            <div className="text-9xl md:text-[12rem] transform hover:scale-110 transition-transform duration-300">
              {product.image}
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col">
          {/* Product Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          {/* Meta Info */}
          <div className="mb-6 space-y-3">
            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary-600">
                ${product.price.toFixed(2)}
              </span>
              {product.price > 100 && (
                <span className="text-lg text-gray-500 line-through">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Date and Priority */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-600">
                  Added: {formatDate(product.dateAdded)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getPriorityColor(product.priority)}`}>
                  {product.priority} Priority
                </span>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {product.fullDescription}
            </p>
          </div>

          {/* Category */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-primary-100 text-primary-800 capitalize">
              {product.category}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button className="btn-primary flex-1 text-lg py-3">
              Add to Cart
            </button>
            <button className="btn-secondary flex-1 text-lg py-3">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

