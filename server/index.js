const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory data store (in production, use a database)
let products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    shortDescription: 'Premium quality wireless headphones with noise cancellation',
    fullDescription: 'Experience premium audio quality with our top-of-the-line wireless headphones. Featuring advanced noise cancellation technology, these headphones provide crystal-clear sound in any environment. With up to 30 hours of battery life, comfortable over-ear design, and Bluetooth 5.0 connectivity, they are perfect for music lovers, gamers, and professionals alike.',
    price: 99.99,
    category: 'electronics',
    image: '🎧',
    dateAdded: '2024-01-15',
    priority: 'high',
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    title: 'Smart Watch',
    shortDescription: 'Feature-rich smartwatch with health tracking',
    fullDescription: 'Stay connected and monitor your health with our advanced smartwatch. Track your heart rate, steps, calories burned, and sleep patterns with precision. Water-resistant design makes it perfect for workouts and daily activities.',
    price: 249.99,
    category: 'electronics',
    image: '⌚',
    dateAdded: '2024-02-10',
    priority: 'high',
    rating: 4.8,
    reviews: 256,
  },
  {
    id: 3,
    title: 'Laptop Stand',
    shortDescription: 'Ergonomic aluminum laptop stand for better posture',
    fullDescription: 'Improve your workspace ergonomics with this sturdy aluminum laptop stand. Elevates your laptop to eye level, reducing neck and back strain. Features adjustable height settings and ventilation slots to keep your device cool.',
    price: 49.99,
    category: 'accessories',
    image: '💻',
    dateAdded: '2024-01-20',
    priority: 'medium',
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 4,
    title: 'Wireless Mouse',
    shortDescription: 'Ergonomic wireless mouse with long battery life',
    fullDescription: 'Enhance your productivity with this ergonomic wireless mouse designed for comfort and precision. Features a contoured shape that fits naturally in your hand, reducing wrist strain during long work sessions.',
    price: 29.99,
    category: 'accessories',
    image: '🖱️',
    dateAdded: '2024-02-05',
    priority: 'medium',
    rating: 4.4,
    reviews: 203,
  },
  {
    id: 5,
    title: 'USB-C Hub',
    shortDescription: 'Multi-port USB-C hub for all your connectivity needs',
    fullDescription: 'Expand your device connectivity with this versatile USB-C hub. Features multiple ports including USB 3.0, HDMI, SD card reader, and USB-C pass-through charging.',
    price: 39.99,
    category: 'accessories',
    image: '🔌',
    dateAdded: '2024-01-25',
    priority: 'medium',
    rating: 4.3,
    reviews: 156,
  },
  {
    id: 6,
    title: 'Desk Lamp',
    shortDescription: 'LED desk lamp with adjustable brightness and color temperature',
    fullDescription: 'Illuminate your workspace with this modern LED desk lamp featuring adjustable brightness and color temperature. Choose from warm to cool white light to match your preference and time of day.',
    price: 59.99,
    category: 'home',
    image: '💡',
    dateAdded: '2024-02-15',
    priority: 'low',
    rating: 4.7,
    reviews: 94,
  },
  {
    id: 7,
    title: 'Mechanical Keyboard',
    shortDescription: 'RGB mechanical keyboard with customizable keys',
    fullDescription: 'Elevate your typing and gaming experience with this premium mechanical keyboard. Features Cherry MX switches for tactile, responsive keystrokes. Full RGB backlighting with customizable lighting effects.',
    price: 129.99,
    category: 'electronics',
    image: '⌨️',
    dateAdded: '2024-02-01',
    priority: 'high',
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 8,
    title: 'Monitor Stand',
    shortDescription: 'Adjustable monitor stand with cable management',
    fullDescription: 'Organize your workspace with this adjustable monitor stand that elevates your display to the perfect viewing height. Features a spacious desktop shelf for your keyboard, mouse, and other accessories.',
    price: 79.99,
    category: 'accessories',
    image: '🖥️',
    dateAdded: '2024-01-30',
    priority: 'medium',
    rating: 4.5,
    reviews: 167,
  },
  {
    id: 9,
    title: 'Webcam HD',
    shortDescription: '1080p HD webcam with auto-focus and noise reduction',
    fullDescription: 'Look your best in video calls with this 1080p HD webcam featuring advanced auto-focus and noise reduction technology. Crystal-clear video quality ensures you are seen clearly in any lighting condition.',
    price: 89.99,
    category: 'electronics',
    image: '📹',
    dateAdded: '2024-02-12',
    priority: 'high',
    rating: 4.6,
    reviews: 198,
  },
];

// Helper function to get next ID
const getNextId = () => {
  return products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Get all products
app.get('/api/products', (req, res) => {
  const { category, search } = req.query;
  let filteredProducts = [...products];

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  // Filter by search query
  if (search) {
    const searchLower = search.toLowerCase();
    filteredProducts = filteredProducts.filter(p =>
      p.title.toLowerCase().includes(searchLower) ||
      p.shortDescription.toLowerCase().includes(searchLower) ||
      p.fullDescription.toLowerCase().includes(searchLower)
    );
  }

  res.json({
    success: true,
    data: filteredProducts,
    total: filteredProducts.length
  });
});

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  res.json({
    success: true,
    data: product
  });
});

// Create new product
app.post('/api/products', (req, res) => {
  const {
    title,
    shortDescription,
    fullDescription,
    price,
    date,
    priority,
    imageUrl,
    category
  } = req.body;

  // Validation
  if (!title || !shortDescription || !fullDescription || !price || !date || !priority) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields'
    });
  }

  const newProduct = {
    id: getNextId(),
    title,
    shortDescription,
    fullDescription,
    price: parseFloat(price),
    dateAdded: date,
    priority,
    image: imageUrl || '📦',
    category: category || 'accessories',
    rating: 0,
    reviews: 0,
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: 'Product created successfully',
    data: newProduct
  });
});

// Update product
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  const {
    title,
    shortDescription,
    fullDescription,
    price,
    date,
    priority,
    imageUrl,
    category
  } = req.body;

  // Update product
  products[productIndex] = {
    ...products[productIndex],
    ...(title && { title }),
    ...(shortDescription && { shortDescription }),
    ...(fullDescription && { fullDescription }),
    ...(price && { price: parseFloat(price) }),
    ...(date && { dateAdded: date }),
    ...(priority && { priority }),
    ...(imageUrl && { image: imageUrl }),
    ...(category && { category }),
  };

  res.json({
    success: true,
    message: 'Product updated successfully',
    data: products[productIndex]
  });
});

// Delete product
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  products.splice(productIndex, 1);

  res.json({
    success: true,
    message: 'Product deleted successfully'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api`);
});

