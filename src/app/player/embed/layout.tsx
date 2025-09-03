import '../../../globals.css'

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang=\"en\">
      <head>
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background: black;
            overflow: hidden;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}