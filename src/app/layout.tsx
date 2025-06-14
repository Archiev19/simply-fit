import type { Metadata } from 'next'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simply Fit - Your Fitness Community',
  description: 'A community-driven platform for fitness enthusiasts in India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 