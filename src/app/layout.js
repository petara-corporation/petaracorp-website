import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
        <meta name="author" content="Petara Corporation" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <Header />
        <main className='page-offset min-h-screen'>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-Z5VKTW3RXD' />
    </html>
  );
}
