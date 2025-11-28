'use client'

import { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  required?: boolean
  error?: string
  success?: string
  children: ReactNode
  hint?: string
}

export default function FormField({ 
  label, 
  required = false, 
  error, 
  success, 
  children, 
  hint 
}: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className={`form-label ${required ? 'form-label-required' : ''}`}>
        {label}
      </label>
      {children}
      {hint && !error && !success && (
        <p className="text-xs text-gray-500 mt-1">{hint}</p>
      )}
      {error && (
        <p className="error-message">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
      {success && (
        <p className="success-message">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {success}
        </p>
      )}
    </div>
  )
}

