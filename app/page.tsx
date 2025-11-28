import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white rounded-2xl overflow-hidden mb-16 mt-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative text-center py-20 md:py-28 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to ShopHub
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover amazing products and enjoy a seamless shopping experience with fast delivery and exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 shadow-lg"
            >
              Shop Now
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: Features */}
      <section className="py-16 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our commitment to quality, service, and customer satisfaction
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="card text-center group cursor-pointer">
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🚚</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              Get your orders delivered quickly and safely to your doorstep
            </p>
          </div>
          <div className="card text-center group cursor-pointer">
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">🔒</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Secure Payment</h3>
            <p className="text-gray-600 leading-relaxed">
              Your transactions are protected with industry-standard security
            </p>
          </div>
          <div className="card text-center group cursor-pointer">
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">⭐</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Products</h3>
            <p className="text-gray-600 leading-relaxed">
              We only offer the best quality products from trusted suppliers
            </p>
          </div>
          <div className="card text-center group cursor-pointer">
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">💬</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">24/7 Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Our customer service team is always here to help you
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Popular Products */}
      <section className="py-16 md:py-20 bg-gray-50 rounded-2xl mb-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our most loved products, handpicked for quality and value
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { name: 'Wireless Headphones', price: '$99.99', emoji: '🎧', description: 'Premium sound quality' },
            { name: 'Smart Watch', price: '$249.99', emoji: '⌚', description: 'Track your fitness' },
            { name: 'Laptop Stand', price: '$49.99', emoji: '💻', description: 'Ergonomic design' },
            { name: 'Wireless Mouse', price: '$29.99', emoji: '🖱️', description: 'Long battery life' },
          ].map((product, index) => (
            <div 
              key={index} 
              className="card text-center group cursor-pointer"
              tabIndex={0}
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{product.emoji}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{product.description}</p>
              <p className="text-2xl font-bold text-primary-600 mb-6">{product.price}</p>
              <Link 
                href="/products" 
                className="btn-primary text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            href="/products" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-4 py-2"
          >
            View All Products
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section className="py-16 md:py-20 mb-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              name: 'Priyanka Das',
              text: 'Amazing shopping experience! Fast delivery and great customer service. Will definitely shop here again.',
              rating: 5,
              role: 'Verified Customer',
            },
            {
              name: 'Arjun Saha',
              text: 'High quality products at competitive prices. Highly recommended! The checkout process was smooth and easy.',
              rating: 5,
              role: 'Verified Customer',
            },
            {
              name: 'Ananya Roy',
              text: 'Love the variety of products and the easy checkout process. Customer support was very helpful when I had questions.',
              rating: 5,
              role: 'Verified Customer',
            },
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="card group cursor-pointer"
              tabIndex={0}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: CTA Banner */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white rounded-2xl p-8 md:p-12 lg:p-16 text-center mb-16 shadow-xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Ready to Start Shopping?
        </h2>
        <p className="text-lg md:text-xl text-primary-100 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Create an account to access exclusive deals, track your orders, and enjoy a personalized shopping experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/register" 
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 shadow-lg"
          >
            Create Account
          </Link>
          <Link 
            href="/login" 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Sign In
          </Link>
        </div>
      </section>
    </div>
  )
}

