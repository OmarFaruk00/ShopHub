'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Profile() {
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>

      <div className="card mb-6">
        <h2 className="text-2xl font-semibold mb-6">Account Information</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="input-field bg-gray-50">
              {session.user?.name || 'Not set'}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="input-field bg-gray-50">
              {session.user?.email}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User ID
            </label>
            <div className="input-field bg-gray-50 text-sm">
              {session.user?.id}
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <div className="space-y-3">
          <button className="btn-primary w-full sm:w-auto">
            Edit Profile
          </button>
          <button className="btn-secondary w-full sm:w-auto ml-0 sm:ml-3">
            Change Password
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Note: Profile editing functionality will be available in a future update.
        </p>
      </div>
    </div>
  )
}

