import VideoPlayer from '@/components/VideoPlayer'

interface EmbedPageProps {
  searchParams: {
    video?: string
  }
}

export default function EmbedPage({ searchParams }: EmbedPageProps) {
  const video = searchParams.video || ''

  if (!video) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        <p>No video URL provided</p>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <VideoPlayer videoUrl={video} embedded={true} />
    </div>
  )
}