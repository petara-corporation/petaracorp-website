import Script from 'next/script';
import './globals.css';
import Footer from './UI/Footer/footer';
import Header from './UI/header/header';
import Head from 'next/head';

export const metadata = {
  title: 'Petara Corp',
  description: 'Corporate Gifting | Bouncy & Inflatables Provider',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <Script src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2VVLNM7Z3P');
        `}
        </Script>
      </Head>
      <body>
        <Header />
        <main className='page-offset min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
