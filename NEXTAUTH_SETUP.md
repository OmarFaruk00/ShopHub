# NextAuth.js Setup Guide

## NextAuth.js Authentication Setup Steps

### Step 1: Environment Variables Setup

Create or update your `.env.local` file in the root directory:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

**Generate a secure secret key:**
```bash
openssl rand -base64 32
```

Or use this online tool: https://generate-secret.vercel.app/32

### Step 2: Install Dependencies (Already Done)

The following packages are already installed in `package.json`:
- `next-auth` - Main authentication library
- `bcryptjs` - Password hashing
- `@types/bcryptjs` - TypeScript types

### Step 3: NextAuth Configuration

The NextAuth configuration is already set up in:
```
app/api/auth/[...nextauth]/route.ts
```

This file includes:
- ✅ Credentials provider (email/password)
- ✅ Google OAuth provider (optional)
- ✅ JWT session strategy
- ✅ Callbacks for session management

### Step 4: Session Provider Setup

The session provider is configured in:
```
app/providers.tsx
```

This wraps your app to provide session context.

### Step 5: Middleware for Route Protection

Route protection is handled by:
```
middleware.ts
```

Protected routes:
- `/dashboard/*`
- `/profile/*`
- `/products/add/*`
- `/products/manage/*`

### Step 6: TypeScript Types

Type definitions are in:
```
types/next-auth.d.ts
```

This extends NextAuth types for your user session.

## How It Works

### Authentication Flow

1. **User visits login page** (`/login`)
2. **Submits credentials** (email/password or Google)
3. **NextAuth validates** credentials
4. **Creates JWT session** if valid
5. **Redirects to home** (`/`)
6. **Session persists** across page reloads

### Login Methods

#### 1. Email/Password Login
- Go to `/login` or `/register`
- Enter any email and password
- For demo: Creates account automatically if email doesn't exist
- For production: Should verify password with database

#### 2. Google OAuth Login (Optional)
- Requires Google OAuth credentials in `.env.local`
- Click "Continue with Google" button
- Redirects to Google for authentication
- Returns to app after successful login

### Using Authentication in Components

#### Check if user is logged in:
```tsx
'use client'
import { useSession } from 'next-auth/react'

export default function MyComponent() {
  const { data: session, status } = useSession()
  
  if (status === 'loading') return <div>Loading...</div>
  if (status === 'unauthenticated') return <div>Please login</div>
  
  return <div>Welcome, {session?.user?.email}</div>
}
```

#### Sign in programmatically:
```tsx
import { signIn } from 'next-auth/react'

await signIn('credentials', {
  email: 'user@example.com',
  password: 'password123',
  redirect: false
})
```

#### Sign out:
```tsx
import { signOut } from 'next-auth/react'

await signOut({ callbackUrl: '/' })
```

## Testing Authentication

### Test Email/Password Login:
1. Go to `http://localhost:3000/login`
2. Enter any email (e.g., `test@example.com`)
3. Enter any password (e.g., `test123`)
4. Click "Sign in"
5. Should redirect to home page
6. Navbar should show your email/name

### Test Google Login (if configured):
1. Go to `http://localhost:3000/login`
2. Click "Continue with Google"
3. Select Google account
4. Should redirect back to app
5. Should be logged in

### Test Protected Routes:
1. Try accessing `/dashboard` without logging in
2. Should redirect to `/login`
3. After login, should access `/dashboard` successfully

## Common Issues & Solutions

### Issue: "NEXTAUTH_SECRET is missing"
**Solution:** Add `NEXTAUTH_SECRET` to `.env.local`

### Issue: "Invalid credentials"
**Solution:** 
- For demo: Use any email/password (creates account automatically)
- Check that credentials provider is configured correctly

### Issue: Google OAuth not working
**Solution:**
- Check `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env.local`
- Verify redirect URI in Google Console: `http://localhost:3000/api/auth/callback/google`
- Google OAuth is optional - app works without it

### Issue: Session not persisting
**Solution:**
- Check that `SessionProvider` wraps your app in `app/layout.tsx`
- Verify `NEXTAUTH_URL` matches your app URL
- Check browser cookies are enabled

## Production Checklist

Before deploying to production:

- [ ] Generate a strong `NEXTAUTH_SECRET` (32+ characters)
- [ ] Set `NEXTAUTH_URL` to your production domain
- [ ] Use a database instead of in-memory storage
- [ ] Implement proper password hashing and verification
- [ ] Add email verification
- [ ] Set up HTTPS (required for OAuth)
- [ ] Configure CORS properly
- [ ] Add rate limiting
- [ ] Set secure cookie options
- [ ] Add error logging

## Current Configuration Summary

✅ **Providers Configured:**
- Credentials (email/password)
- Google OAuth (optional)

✅ **Session Strategy:**
- JWT (JSON Web Tokens)

✅ **Protected Routes:**
- Dashboard, Profile, Add Product, Manage Products

✅ **Redirect After Login:**
- Home page (`/`)

✅ **Session Management:**
- Client-side: `useSession()` hook
- Server-side: `getServerSession()` function

## Quick Start

1. **Set environment variables:**
   ```bash
   # .env.local
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-here
   ```

2. **Start the app:**
   ```bash
   npm run dev
   ```

3. **Test login:**
   - Go to `http://localhost:3000/login`
   - Use any email/password
   - Should work immediately!

That's it! NextAuth.js is already configured and ready to use. 🎉

