import Meta from '../components/meta/meta.component';
import ContactUsSection from '../components/contact-us-section/contact-us-section';
import EcoEthnicGiftingIntro from './components/eco-ethnic-intro/eco-ethnic-intro';
import EcoEthnicProductListing from './components/eco-ethnic-products/eco-ethnic-product-listing';

const metadata = {
  title: 'Eco-Ethnic Gifting | Petara Corporation',
  description: 'Explore premium eco-ethnic gifting solutions from Petara Corporation. Perfect for all corporate events and occasions.',
  keywords: 'Eco-Ethnic, Gifting, Corporate Gifting, Petara Corporation, Event Solutions',
  image: '/images/eco-ethnic-gifting-banner.jpg',
  url: '/eco-ethnic-gifting'
};

const CorporateGifting = () => {
  return (
    <main>
      <Meta {...metadata} />
      <EcoEthnicGiftingIntro />
      <EcoEthnicProductListing />
      {/* <Testimonials /> */}
      <ContactUsSection />
    </main>
  );
};

export default CorporateGifting;