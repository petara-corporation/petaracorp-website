import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Petara Corporation",
            "url": "https://www.petaracorp.com/",
            "description": "Inflatables, Bouncy & Corporate Gifting Provider. Petara Corporation offers premium quality products for all events.",
            "logo": "https://www.petaracorp.com/images/petara_logo_landscape.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 88792 92103",
              "contactType": "Customer Service",
              "email": "sales@petaracorp.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "I - 5, Clarion Park, Aundh",
                "addressLocality": "Pune",
                "postalCode": "411007",
                "addressCountry": "IN"
              }
            },
            "sameAs": [
              "https://www.facebook.com/share/hVc4mo2gMNxvbCFi/",
              "https://www.instagram.com/petaracorp/",
              "https://www.linkedin.com/company/petaracorp/"
            ],
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.petaracorp.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Product Promotion",
                  "item": "https://www.petaracorp.com/products"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Promotion & Gifting",
                  "item": "https://www.petaracorp.com/promotion-gifting"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Eco-Ethnic Gifting",
                  "item": "https://www.petaracorp.com/eco-ethnic-gifting"
                },
              ]
            }
          }`}
        </script>
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
