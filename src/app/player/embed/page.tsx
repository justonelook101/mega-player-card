import VideoPlayer from '@/components/VideoPlayer'
import { Metadata } from 'next'

interface EmbedPageProps {
  searchParams: {
    video?: string
  }
}

export async function generateMetadata({ searchParams }: EmbedPageProps): Promise<Metadata> {
  const vimeoId = searchParams.video || ''
  
  return {
    title: `Vimeo Video ${vimeoId}`,
    robots: 'noindex, nofollow', // Prevent indexing of embed pages
  }
}

export default function EmbedPage({ searchParams }: EmbedPageProps) {
  const vimeoId = searchParams.video || ''

  if (!vimeoId) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black text-white">
        <p>No Vimeo video ID provided</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      <VideoPlayer videoId={vimeoId} embedded={true} />
    </div>
  )
}