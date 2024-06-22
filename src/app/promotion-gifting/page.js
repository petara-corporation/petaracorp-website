import Meta from '../components/meta/meta.component';
import ContactUsSection from './components/contact-us-section/contact-us-section';
import HeroCarouselCorporate from './components/hero-slider-corporate/hero-slider-corporate';
import Intro from './components/intro/intro';
import CorporateProductListing from './components/products/product-listing';

const metadata = {
  title: 'Promotion & Gifting | Petara Corporation',
  description: 'Explore premium promotion and gifting solutions from Petara Corporation. Perfect for all corporate events and occasions.',
  keywords: 'Promotion, Gifting, Corporate Gifting, Petara Corporation, Event Solutions',
  image: '/images/promotion-gifting-banner.jpg',
  url: '/promotion-gifting',
};

export default function CorporateGifting() {
  return [
    <Meta {...metadata} />,
    <main>
      <HeroCarouselCorporate />
      <Intro />
      <CorporateProductListing />
      <ContactUsSection />
    </main>
  ];
}