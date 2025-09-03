import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MEGA Player Card',
  description: 'Create Twitter Player Cards for MEGA video links',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}