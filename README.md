# ShopHub - eCommerce Platform

A modern, full-stack eCommerce application built with Next.js 14 (App Router), NextAuth.js for authentication, and Express.js backend. Features a polished UI with responsive design, product management, and secure user authentication.

## Project Description

ShopHub is a complete eCommerce solution featuring:

- **User Authentication**: Secure login/register with NextAuth.js (email/password and Google OAuth)
- **Product Management**: Full CRUD operations for products with search and filtering
- **Protected Routes**: Secure pages for authenticated users only
- **Responsive Design**: Mobile-first design that works seamlessly on all devices
- **Modern UI**: Clean, consistent interface with smooth animations and transitions
- **RESTful API**: Express.js backend with product management endpoints

## Setup & Installation

### Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn** package manager
- **Git** (optional, for cloning)

### Step 1: Clone or Download

```bash
# If using Git
git clone <repository-url>
cd Task_job

# Or download and extract the project
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required dependencies for both frontend and backend.

### Step 3: Environment Configuration

Create a `.env.local` file in the root directory:

```env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Backend API Configuration
SERVER_PORT=5000
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Google OAuth (Optional - for social login)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Generate a secret key:**
```bash
openssl rand -base64 32
```

### Step 4: Run the Application

Start both frontend and backend servers:

```bash
npm run dev
```

This will start:
- **Next.js Frontend**: http://localhost:3000
- **Express Backend**: http://localhost:5000

### Step 5: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

### Optional: Google OAuth Setup

To enable Google social login:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth client ID"
5. Configure the OAuth consent screen
6. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
7. Copy the Client ID and Client Secret to your `.env.local` file

**Note:** Google OAuth is optional. The app works with email/password authentication even without Google credentials.

### Running Servers Separately

**Frontend only:**
```bash
npm run dev:client
```

**Backend only:**
```bash
npm run dev:server
```

## Route Summary

### Public Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Home/Landing page with hero, features, products, testimonials | Public |
| `/products` | Product listing page with search and category filters | Public |
| `/products/[id]` | Product details page with full information | Public |
| `/about` | About page with company information | Public |
| `/contact` | Contact page with form and information | Public |
| `/login` | Login page with email/password and Google OAuth | Public |
| `/register` | Registration page with email/password and Google OAuth | Public |

### Protected Routes (Require Authentication)

| Route | Description | Redirects to |
|-------|-------------|--------------|
| `/dashboard` | User dashboard with stats and quick actions | `/login` if not authenticated |
| `/profile` | User profile page with account information | `/login` if not authenticated |
| `/products/add` | Add new product form | `/login` if not authenticated |
| `/products/manage` | Manage all products (table/grid view) | `/login` if not authenticated |

### API Routes (NextAuth)

| Route | Description |
|-------|-------------|
| `/api/auth/[...nextauth]` | NextAuth.js authentication endpoints |
| `/api/auth/signin` | Sign in endpoint |
| `/api/auth/signout` | Sign out endpoint |
| `/api/auth/callback/google` | Google OAuth callback |

### Backend API Routes (Express.js)

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/api/health` | Server health check |
| `GET` | `/api/products` | Get all products (with optional `category` and `search` query params) |
| `GET` | `/api/products/:id` | Get single product by ID |
| `POST` | `/api/products` | Create new product |
| `PUT` | `/api/products/:id` | Update product by ID |
| `DELETE` | `/api/products/:id` | Delete product by ID |

## Authentication

### Email/Password Login

For demo purposes, you can use **any email and password** to create an account or sign in. The app will automatically create a new account if the email doesn't exist.

**Demo Credentials:**
- Email: `demo@example.com`
- Password: `demo123` (or any password)

### Google Social Login

If you've configured Google OAuth credentials, you can sign in using your Google account. Click the "Continue with Google" button on the login or register page.

**Note:** After successful login (via email/password or Google), users are redirected to the home page (`/`).

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **NextAuth.js** - Authentication library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

### Backend
- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing
- **bcryptjs** - Password hashing

### Development Tools
- **Nodemon** - Auto-reload for server development
- **Concurrently** - Run multiple processes simultaneously
- **ESLint** - Code linting

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── api/auth/[...nextauth]/  # NextAuth configuration
│   ├── dashboard/                # Protected dashboard page
│   ├── profile/                  # Protected profile page
│   ├── products/                 # Product pages
│   │   ├── [id]/                # Product details (dynamic)
│   │   ├── add/                 # Add product (protected)
│   │   ├── manage/              # Manage products (protected)
│   │   └── page.tsx             # Products listing
│   ├── about/                    # About page
│   ├── contact/                 # Contact page
│   ├── login/                   # Login page
│   ├── register/                # Registration page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── providers.tsx            # Session provider
├── components/                   # React components
│   ├── Navbar.tsx              # Navigation component
│   ├── Footer.tsx               # Footer component
│   └── UI/                      # Reusable UI components
│       ├── Toast.tsx            # Toast notifications
│       ├── LoadingSpinner.tsx   # Loading spinner
│       └── FormField.tsx        # Form field wrapper
├── lib/                         # Utilities
│   └── api.ts                   # API client functions
├── server/                      # Express.js backend
│   └── index.js                 # Server entry point
├── types/                        # TypeScript types
│   └── next-auth.d.ts          # NextAuth type definitions
├── middleware.ts                 # Route protection middleware
└── package.json                 # Dependencies and scripts
```

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both frontend and backend in development mode |
| `npm run dev:client` | Start only Next.js frontend (port 3000) |
| `npm run dev:server` | Start only Express backend (port 5000) |
| `npm run build` | Build Next.js app for production |
| `npm run start` | Start Next.js production server |
| `npm run lint` | Run ESLint to check code quality |

## Features Overview

- ✅ **Authentication**: Email/password and Google OAuth
- ✅ **Protected Routes**: Middleware-based route protection
- ✅ **Product Management**: Full CRUD operations
- ✅ **Search & Filter**: Product search and category filtering
- ✅ **Responsive Design**: Mobile, tablet, and desktop support
- ✅ **Modern UI**: Consistent design system with animations
- ✅ **Type Safety**: Full TypeScript support
- ✅ **RESTful API**: Express.js backend with JSON responses

## Backend API Documentation

For detailed backend API documentation, see [README_BACKEND.md](./README_BACKEND.md).

## Production Considerations

This is a demo application. For production deployment, consider:

- ✅ Use a proper database (PostgreSQL, MongoDB, etc.) instead of in-memory storage
- ✅ Implement proper password hashing and verification
- ✅ Add email verification for new accounts
- ✅ Implement comprehensive error handling and logging
- ✅ Add rate limiting to prevent abuse
- ✅ Use secure environment variables for all secrets
- ✅ Add API authentication/authorization middleware
- ✅ Implement request validation (Joi, Zod, etc.)
- ✅ Add error tracking (Sentry, etc.)
- ✅ Set up CI/CD pipeline
- ✅ Add comprehensive testing (unit, integration, e2e)

## License

MIT

## Support

For issues, questions, or contributions, please refer to the project repository.
