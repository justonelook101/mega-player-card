'use client'

import { useState } from 'react'

export default function GeneratorPage() {
  const [vimeoUrl, setVimeoUrl] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')

  const extractVimeoId = (url: string) => {
    // Remove any trailing slash and whitespace
    const cleanUrl = url.trim().replace(/\/$/, '')
    
    // Multiple regex patterns to catch different Vimeo URL formats
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/([0-9]+)/,
      /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/.*\/([0-9]+)/,
      /vimeo\.com\/([0-9]+)/,
      /([0-9]{8,})/  // fallback for just numbers
    ]
    
    for (const pattern of patterns) {
      const match = cleanUrl.match(pattern)
      if (match && match[1]) {
        return match[1]
      }
    }
    
    return null
  }

  const generatePlayerUrl = () => {
    if (!vimeoUrl.trim()) {
      alert('Please enter a Vimeo URL')
      return
    }

    const vimeoId = extractVimeoId(vimeoUrl)
    console.log('Vimeo URL:', vimeoUrl)
    console.log('Extracted Vimeo ID:', vimeoId)
    
    if (!vimeoId) {
      alert(`Please enter a valid Vimeo URL. Examples:\n- https://vimeo.com/123456789\n- vimeo.com/123456789\n\nYour URL: ${vimeoUrl}`)
      return
    }

    // Encode the Vimeo ID and other parameters
    const encodedVimeoId = encodeURIComponent(vimeoId)
    const encodedTitle = encodeURIComponent(title || 'Vimeo Video Player')
    const encodedDescription = encodeURIComponent(description || 'Watch this video')

    // Generate the player URL with encoded parameters
    const baseUrl = window.location.origin
    const playerUrl = `${baseUrl}/player?video=${encodedVimeoId}&title=${encodedTitle}&description=${encodedDescription}`
    
    setGeneratedUrl(playerUrl)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl)
      alert('URL copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Vimeo Player Card Generator
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Generate Twitter Player Cards for your Vimeo video links
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="vimeoUrl" className="block text-sm font-medium text-gray-700">
              Vimeo Video URL *
            </label>
            <input
              type="url"
              id="vimeoUrl"
              value={vimeoUrl}
              onChange={(e) => setVimeoUrl(e.target.value)}
              placeholder="https://vimeo.com/123456789 or vimeo.com/123456789"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Video Title (Optional)
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="My Awesome Video"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Video Description (Optional)
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A brief description of your video"
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            onClick={generatePlayerUrl}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Generate Player Link
          </button>

          {generatedUrl && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <label className="block text-sm font-medium text-green-800 mb-2">
                Your Twitter Player Card URL:
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={generatedUrl}
                  readOnly
                  className="flex-1 px-3 py-2 border border-green-300 rounded-l-md bg-white text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 text-sm"
                >
                  Copy
                </button>
              </div>
              <p className="mt-2 text-xs text-green-700">
                Share this URL on Twitter to display your video as a Player Card!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}