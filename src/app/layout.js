import Script from 'next/script';
import './globals.css';
import Footer from './UI/Footer/footer';
import Header from './UI/header/header';

export const metadata = {
  title: 'Petara Corp',
  description: 'Corporate Gifting | Bouncy & Inflatables Provider',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Script src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-WZ5KD741G7');
        `}
        </Script>
        <Header />
        <main className='page-offset min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
