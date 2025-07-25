import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LanguageProvider } from '../contexts/LanguageContext'

export const metadata = {
  title: 'Alter Metzger - Artist Portfolio',
  description: 'Professional painting portfolio of Alter Metzger showcasing over 50 beautiful artworks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-warm-beige min-h-screen flex flex-col">
        <LanguageProvider>
          <div className="contents">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
} 