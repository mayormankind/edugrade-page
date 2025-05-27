import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl mt-4 text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Go Back Home</a>
    </div>
  )
}
