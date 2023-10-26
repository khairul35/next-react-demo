import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DMS',
  description: 'Developer Membership System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Header />
            {children}
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
              <Footer />
          </div>
        </div>
      </body>

    </html>
  )
}
