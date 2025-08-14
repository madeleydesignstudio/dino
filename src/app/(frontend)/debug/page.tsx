'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DebugPage() {
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const addResult = (test: string, result: any) => {
    setResults((prev) => [...prev, { test, result, timestamp: new Date().toISOString() }])
  }

  const runTest = async (name: string, url: string, options: RequestInit = {}) => {
    setLoading(true)
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      addResult(name, {
        status: response.status,
        success: response.ok,
        data,
      })
    } catch (error) {
      addResult(name, {
        status: 'ERROR',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
    setLoading(false)
  }

  const clearResults = () => setResults([])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Payload CMS Debug Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => runTest('Status Check', '/api/status')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          Test Status
        </button>

        <button
          onClick={() => runTest('Debug Company (GET)', '/api/debug-company')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          disabled={loading}
        >
          Test Company Access
        </button>

        <button
          onClick={() => runTest('Debug Company (POST)', '/api/debug-company', { method: 'POST' })}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          disabled={loading}
        >
          Test Company Creation
        </button>

        <button
          onClick={() => runTest('Seed Company', '/api/seed', { method: 'POST' })}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          disabled={loading}
        >
          Test Seed
        </button>

        <button
          onClick={() => runTest('Get Company Data', '/api/company')}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          disabled={loading}
        >
          Test Company API
        </button>

        <button
          onClick={() => runTest('Clean Up', '/api/debug-company', { method: 'DELETE' })}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          disabled={loading}
        >
          Clean Test Data
        </button>

        <button
          onClick={clearResults}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 md:col-span-2"
        >
          Clear Results
        </button>
      </div>

      {loading && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
          Running test...
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Test Results</h2>

        {results.length === 0 ? (
          <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded">
            No tests run yet. Click a button above to start testing.
          </div>
        ) : (
          results.map((result, index) => (
            <div
              key={index}
              className={`border rounded p-4 ${
                result.result.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{result.test}</h3>
                <span className="text-sm text-gray-500">{result.timestamp}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong>Status:</strong>
                  <span
                    className={`ml-2 px-2 py-1 rounded text-sm ${
                      result.result.success
                        ? 'bg-green-200 text-green-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {result.result.status}
                  </span>
                </div>

                <div>
                  <strong>Success:</strong> {result.result.success ? '✅' : '❌'}
                </div>
              </div>

              <div className="mt-4">
                <strong>Response:</strong>
                <pre className="bg-gray-100 p-2 rounded mt-2 text-sm overflow-x-auto">
                  {JSON.stringify(result.result.data || result.result.error, null, 2)}
                </pre>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded">
        <h3 className="font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="/admin" className="text-blue-600 hover:underline">
              → Admin Panel
            </Link>
          </li>
          <li>
            <Link href="/company" className="text-blue-600 hover:underline">
              → Company Page
            </Link>
          </li>
          <li>
            <Link href="/api/status" className="text-blue-600 hover:underline">
              → Status API
            </Link>
          </li>
          <li>
            <Link href="/api/debug-company" className="text-blue-600 hover:underline">
              → Debug Company API
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-4 bg-blue-50 border border-blue-200 p-4 rounded">
        <h3 className="font-semibold mb-2">Troubleshooting Steps</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm">
          <li>Run &quot;Test Status&quot; first to check basic connectivity</li>
          <li>Run &quot;Test Company Access&quot; to verify collection access</li>
          <li>Run &quot;Test Company Creation&quot; to test direct creation</li>
          <li>If tests pass but admin fails, check browser console for errors</li>
          <li>Check server terminal for detailed error messages</li>
          <li>Try the simplified &quot;Company Simple&quot; collection in admin</li>
        </ol>
      </div>
    </div>
  )
}
