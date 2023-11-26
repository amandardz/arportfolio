import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from './components/Navigation/navigation';
import Footer from './components/Footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Amanda Rodriguez',
  description: 'Portfolio Generated with Next.js',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='fantasy'>
      <body className={inter.className}>
        <main className='bg-base-content brightness-150, contrast-150 flex flex-col justify-between min-h-screen'>
          <Navigation />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
