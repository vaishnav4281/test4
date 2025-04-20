'use client'

import { useEffect, useState } from 'react'

export default function TestConnection() {
  const [connectionStatus, setConnectionStatus] = useState('Checking...')
  const [error, setError] = useState<string | null>(null)
  const [emailStatus, setEmailStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle')

  useEffect(() => {
    async function testConnection() {
      try {
        // Test email connection by sending a test email
        setEmailStatus('testing')
        
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'Test User',
            email: 'test@example.com',
            phone: '1234567890',
            message: 'This is a test message to verify email functionality.',
            service: 'test'
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to send test email')
        }

        setConnectionStatus('Connected!')
        setEmailStatus('success')
      } catch (err) {
        setConnectionStatus('Failed')
        setEmailStatus('failed')
        setError(err instanceof Error ? err.message : 'An error occurred')
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Email Connection Test</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className={`w-4 h-4 rounded-full ${connectionStatus === 'Connected!' ? 'bg-green-500' : 'bg-yellow-500'}`} />
          <span>Status: {connectionStatus}</span>
        </div>
        
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Email Service Status:</h2>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              emailStatus === 'success' ? 'bg-green-500' : 
              emailStatus === 'testing' ? 'bg-yellow-500' : 
              'bg-red-500'
            }`} />
            <span>
              {emailStatus === 'idle' && 'Not tested'}
              {emailStatus === 'testing' && 'Testing...'}
              {emailStatus === 'success' && 'Working'}
              {emailStatus === 'failed' && 'Failed'}
            </span>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded">
            <h2 className="font-bold mb-2">Errors:</h2>
            <pre className="whitespace-pre-wrap">{error}</pre>
          </div>
        )}

        {emailStatus === 'success' && (
          <div className="p-4 bg-green-100 text-green-700 rounded">
            <h2 className="font-bold mb-2">Success!</h2>
            <p>A test email has been sent to your admin email address. Please check your inbox to confirm receipt.</p>
          </div>
        )}
      </div>
    </div>
  )
} 