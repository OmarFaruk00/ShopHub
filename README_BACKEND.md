# Express.js Backend Server

Simple Express.js server providing REST API endpoints for the ShopHub eCommerce application.

## Features

- RESTful API endpoints for product management
- CORS enabled for Next.js frontend
- In-memory data storage (can be replaced with database)
- JSON request/response format
- Error handling and validation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (or use `.env.example`):
```env
SERVER_PORT=5000
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

3. Start the server:
```bash
npm run dev:server
```

Or run both frontend and backend together:
```bash
npm run dev
```

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Products

#### Get All Products
- `GET /api/products`
- Query parameters:
  - `category` (optional): Filter by category
  - `search` (optional): Search in title/description
- Response:
```json
{
  "success": true,
  "data": [...],
  "total": 9
}
```

#### Get Single Product
- `GET /api/products/:id`
- Response:
```json
{
  "success": true,
  "data": { ... }
}
```

#### Create Product
- `POST /api/products`
- Body:
```json
{
  "title": "Product Title",
  "shortDescription": "Short desc",
  "fullDescription": "Full description",
  "price": "99.99",
  "date": "2024-02-15",
  "priority": "high",
  "imageUrl": "🎧",
  "category": "electronics"
}
```

#### Update Product
- `PUT /api/products/:id`
- Body: Same as create (all fields optional)

#### Delete Product
- `DELETE /api/products/:id`

## Server Configuration

- **Port**: 5000 (configurable via `SERVER_PORT` env variable)
- **CORS**: Enabled for `http://localhost:3000` (configurable)
- **Data Storage**: In-memory (products array)

## Development

- Uses `nodemon` for auto-reload during development
- Logs requests to console
- Error responses include success flag and message

## Production Considerations

For production, consider:
- Replace in-memory storage with database (PostgreSQL, MongoDB, etc.)
- Add authentication middleware
- Implement rate limiting
- Add request validation library (Joi, Zod)
- Add logging (Winston, Pino)
- Add error tracking (Sentry)
- Use environment-specific configurations

