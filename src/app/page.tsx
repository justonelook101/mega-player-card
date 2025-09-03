'use client'

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // Redirect to the specified URL
    window.location.href = 'https://otieu.com/4/9786651'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg">Redirecting...</p>
    </div>
  )
}