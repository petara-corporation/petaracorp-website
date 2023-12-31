import ContactUsSection from "../components/contact-us-section/contact-us-section";
import Testimonials from "../components/testimonials/testimonials";
import HeroCarouselCorporate from "./components/hero-slider-corporate/hero-slider-corporate";
import Intro from './components/intro/intro';
// import CorporateProductListing from "./components/products/product-listing";
import ServicesList from "./components/services-list/services-list";

export default function CorporateGifting() {
  return (
    <>
      <HeroCarouselCorporate />
      <Intro />
      <ServicesList />
      <Testimonials />
      <ContactUsSection />
    </>
  );
}
