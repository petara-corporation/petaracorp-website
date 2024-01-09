import ContactUsSection from './components/contact-us-section/contact-us-section';
import HeroCarousel from './components/hero-slider/hero-slider';
import OurServices from './components/our-services/our-services';
import Testimonials from './components/testimonials/testimonials';
import TrustMarker from './components/trustmarker-section/trustmarker';

export default function Home() {
  return (
    <>
      <head>
        <title>Petara Corporation</title>
      </head>
      <HeroCarousel />
      <OurServices />
      <Testimonials />
      <TrustMarker />
      <ContactUsSection />
    </>
  );
}
