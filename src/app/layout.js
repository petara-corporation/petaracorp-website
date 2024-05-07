import Script from 'next/script';
import './globals.css';
import Footer from './UI/Footer/footer';
import Header from './UI/header/header';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        {/* <Script src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-2VVLNM7Z3P');
        `}
        </Script> */}
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-Z5VKTW3RXD'
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-Z5VKTW3RXD');
            `}
        </Script>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Header />
        <main className='page-offset min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
