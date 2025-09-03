'use client'

interface VideoPlayerProps {
  videoId: string
  embedded?: boolean
}

export default function VideoPlayer({ videoId, embedded = false }: VideoPlayerProps) {
  if (!videoId) {
    return (
      <div className={`${embedded ? 'w-full h-full' : 'aspect-video'} bg-black flex items-center justify-center`}>
        <div className="text-white text-center">
          <p>No Vimeo video ID provided</p>
        </div>
      </div>
    )
  }

  const vimeoEmbedUrl = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=0&muted=0&title=1&portrait=1&byline=1`

  return (
    <div className={`relative bg-black ${embedded ? 'w-full h-full' : 'aspect-video'}`}>
      <iframe
        src={vimeoEmbedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={`Vimeo video ${videoId}`}
        className="w-full h-full"
      />
    </div>
  )
}