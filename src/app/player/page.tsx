import { Metadata } from 'next'
import VideoPlayer from '@/components/VideoPlayer'

interface PlayerPageProps {
  searchParams: {
    video?: string
    title?: string
    description?: string
  }
}

export async function generateMetadata({
  searchParams,
}: PlayerPageProps): Promise<Metadata> {
  const vimeoId = searchParams.video || ''
  const title = searchParams.title || 'Vimeo Video Player'
  const description = searchParams.description || 'Watch this video'
  
  // Create the player URL for the Twitter Card
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mega-player-card.vercel.app'
  const playerUrl = `${baseUrl}/player/embed?video=${encodeURIComponent(vimeoId)}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'video.other',
      images: [{
        url: `${baseUrl}/api/og?title=${encodeURIComponent(title)}`,
        width: 1200,
        height: 630,
      }],
    },
    twitter: {
      card: 'player',
      site: '@yourusername', // You can change this to your Twitter handle
      creator: '@yourusername', // You can change this to your Twitter handle
      title,
      description,
    },
    other: {
      'twitter:player': playerUrl,
      'twitter:player:width': '1280',
      'twitter:player:height': '720',
      'twitter:player:stream': `https://player.vimeo.com/video/${vimeoId}`,
      'twitter:player:stream:content_type': 'video/mp4',
    },
  }
}

export default function PlayerPage({ searchParams }: PlayerPageProps) {
  const vimeoId = searchParams.video || ''
  const title = searchParams.title || 'Vimeo Video Player'
  const description = searchParams.description || 'Watch this video'

  if (!vimeoId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Vimeo Video ID Provided</h1>
          <p className="text-gray-600">Please provide a valid Vimeo video ID.</p>
          <a 
            href="/generator" 
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Generate Player Link
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <VideoPlayer videoId={vimeoId} />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}