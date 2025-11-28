export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            Have questions or feedback? We'd love to hear from you! Fill out the form
            and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="input-field"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="input-field"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="input-field"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button className="btn-primary w-full">Send Message</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="text-primary-600 mr-3">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">support@shophub.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary-600 mr-3">📞</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm">1-800-SHOPHUB</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary-600 mr-3">📍</span>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">123 Commerce Street<br />Business City, BC 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

