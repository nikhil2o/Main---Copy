import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'Celestial Agents - AI Automation Solutions',
  description: 'Transform your business with cutting-edge AI solutions that streamline operations, boost productivity, and drive measurable growth.',
  keywords: 'AI automation, business transformation, intelligent solutions, productivity tools',
  authors: [{ name: 'Celestial Agents' }],
  creator: 'Celestial Agents',
  publisher: 'Celestial Agents',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
