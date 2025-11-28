# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Create Environment File

Create a `.env.local` file in the root directory:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

**To generate a secure secret key**, run:
```bash
openssl rand -base64 32
```

Or use any random string for development.

## Step 3: Run the Development Server

```bash
npm run dev
```

## Step 4: Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000)

## Demo Credentials

You can use either:

1. **Existing demo account:**
   - Email: `demo@example.com`
   - Password: `demo123`

2. **Create a new account:**
   - Use any email and password
   - The app will automatically create your account

## Testing Protected Routes

1. Try accessing `/dashboard` or `/profile` without logging in
2. You should be redirected to `/login`
3. After logging in, you can access protected pages

## Project Structure

- **Public Pages**: `/`, `/products`, `/about`
- **Protected Pages**: `/dashboard`, `/profile` (require authentication)
- **Auth**: `/login` (sign in page)

Enjoy building! 🚀

