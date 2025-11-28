export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About ShopHub</h1>
      
      <div className="card mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ShopHub was founded with a simple mission: to make online shopping
          easy, secure, and enjoyable for everyone. We believe that everyone
          deserves access to quality products at fair prices.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Since our launch, we've been committed to providing exceptional
          customer service and a wide selection of products that meet the needs
          of our diverse customer base.
        </p>
      </div>

      <div className="card mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-primary-600 mr-2">✓</span>
            <span><strong>Customer First:</strong> Your satisfaction is our top priority</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-600 mr-2">✓</span>
            <span><strong>Quality:</strong> We carefully curate every product in our catalog</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-600 mr-2">✓</span>
            <span><strong>Transparency:</strong> Honest pricing and clear communication</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary-600 mr-2">✓</span>
            <span><strong>Innovation:</strong> Continuously improving our platform and services</span>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> support@shophub.com</p>
          <p><strong>Phone:</strong> 1-800-SHOPHUB</p>
          <p><strong>Address:</strong> 123 Commerce Street, Business City, BC 12345</p>
        </div>
      </div>
    </div>
  )
}

