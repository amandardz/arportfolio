import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amanda Rodriguez',
  description: 'Portfolio Generated with Next.js',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="fantasy">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
