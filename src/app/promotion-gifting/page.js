import Meta from '../components/meta/meta.component';
import ContactUsSection from './components/contact-us-section/contact-us-section';
import HeroCarouselCorporate from './components/hero-slider-corporate/hero-slider-corporate';
import Intro from './components/intro/intro';
import CorporateProductListing from './components/products/product-listing';

export default function CorporateGifting() {
  return (
    <>
      <Meta title='Promotion & Gifting | Petara Corporation' />
      <HeroCarouselCorporate />
      <Intro />
      <CorporateProductListing />
      <ContactUsSection />
    </>
  );
}
