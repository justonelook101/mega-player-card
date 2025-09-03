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
      <div className="w-full h-full flex items-center justify-center bg-black text-white">
        <p>No video URL provided</p>
      </div>
    )
  }

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background: black;
            overflow: hidden;
          }
          .player-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </head>
      <body>
        <div className="player-container">
          <VideoPlayer videoUrl={video} embedded={true} />
        </div>
      </body>
    </html>
  )
}