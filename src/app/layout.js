import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='page-offset min-h-screen'>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-Z5VKTW3RXD' />
    </html>
  );
}
