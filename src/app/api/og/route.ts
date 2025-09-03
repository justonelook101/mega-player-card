import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Vimeo Video Player'

  // Create a simple SVG image for Open Graph
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#1a1a1a"/>
      <circle cx="600" cy="315" r="80" fill="#3b82f6"/>
      <polygon points="580,295 580,335 620,315" fill="white"/>
      <text x="600" y="400" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">${title}</text>
      <text x="600" y="450" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af" text-anchor="middle">Vimeo Player Card</text>
    </svg>
  `

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}