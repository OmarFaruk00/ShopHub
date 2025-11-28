import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'

// In a real app, you'd use a database
// For demo purposes, we'll use in-memory storage
// Demo user: demo@example.com / demo123
const users = [
  {
    id: '1',
    email: 'demo@example.com',
    password: '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', // password: demo123
    name: 'Rajesh Das',
  },
]

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = users.find((u) => u.email === credentials.email)

        if (!user) {
          // For demo: create user if doesn't exist
          const hashedPassword = await bcrypt.hash(credentials.password, 10)
          const newUser = {
            id: String(users.length + 1),
            email: credentials.email,
            password: hashedPassword,
            name: credentials.email.split('@')[0],
          }
          users.push(newUser)
          return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
          }
        }

        // Verify password for existing users
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Redirect to home after login
      if (url === baseUrl || url.startsWith(baseUrl + '/')) {
        return baseUrl + '/'
      }
      return baseUrl
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-change-in-production',
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

