import './globals.css';
import Footer from './UI/Footer/footer';
import Header from './UI/header/header';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-Z5VKTW3RXD'
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-Z5VKTW3RXD');
            `}
        </script>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Header />
        <main className='page-offset min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
