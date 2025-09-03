import '../../../globals.css'

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      {children}
    </div>
  )
}