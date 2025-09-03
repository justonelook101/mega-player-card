import VideoPlayer from '@/components/VideoPlayer'

interface EmbedPageProps {
  searchParams: {
    video?: string
  }
}

export default function EmbedPage({ searchParams }: EmbedPageProps) {
  const vimeoId = searchParams.video || ''

  if (!vimeoId) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        <p>No Vimeo video ID provided</p>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <VideoPlayer videoId={vimeoId} embedded={true} />
    </div>
  )
}