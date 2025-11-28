'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, <span className="font-semibold">{session.user?.name || session.user?.email}</span>!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Orders</h3>
          <p className="text-3xl font-bold text-primary-600 mb-1">0</p>
          <p className="text-sm text-gray-500">Total orders</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Wishlist</h3>
          <p className="text-3xl font-bold text-primary-600 mb-1">0</p>
          <p className="text-sm text-gray-500">Saved items</p>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Account Status</h3>
          <p className="text-lg font-semibold text-green-600 mb-1">Active</p>
          <p className="text-sm text-gray-500">Your account is in good standing</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="text-center py-8 text-gray-500">
            <p className="mb-4">No orders yet</p>
            <Link href="/products" className="btn-primary text-sm">
              Start Shopping
            </Link>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/products"
              className="block w-full btn-secondary text-center"
            >
              Browse Products
            </Link>
            <Link
              href="/profile"
              className="block w-full btn-primary text-center"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

