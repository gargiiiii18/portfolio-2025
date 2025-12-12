import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Gargi Sukhatankar - Full-Stack Developer & AI/ML Engineer',
  description: 'Full-stack developer with expertise in modern web stacks and AI/ML integration. Building intelligent, scalable web applications with seamless user experience.',
  keywords: 'Gargi Sukhatankar, Full-Stack Developer, AI/ML Engineer, React, Next.js, Node.js, Python, TensorFlow, Web Development',
  authors: [{ name: 'Gargi Sukhatankar' }],
  creator: 'Gargi Sukhatankar',
  openGraph: {
    title: 'Gargi Sukhatankar - Full-Stack Developer & AI/ML Engineer',
    description: 'Full-stack developer with expertise in modern web stacks and AI/ML integration.',
    url: 'https://gargi-portfolio.vercel.app',
    siteName: 'Gargi Sukhatankar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gargi Sukhatankar Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gargi Sukhatankar - Full-Stack Developer & AI/ML Engineer',
    description: 'Full-stack developer with expertise in modern web stacks and AI/ML integration.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
