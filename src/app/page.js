import ContactUsSection from './components/contact-us-section/contact-us-section';
import HeroCarousel from './components/hero-slider/hero-slider';
import Meta from './components/meta/meta.component';
import OurServices from './components/our-services/our-services';
import Testimonials from './components/testimonials/testimonials';
import TrustMarker from './components/trustmarker-section/trustmarker';

export const metadata = {
  title: 'Petara Corporation - Inflatables, Bouncy & Corporate Gifting',
  description: 'Inflatables, Bouncy & Corporate Gifting Provider. Petara Corporation offers premium quality products for all events.',
  keywords: 'Inflatables, Bouncy, Corporate Gifting, Petara Corporation, Event Solutions',
};

export default function Home() {
  return [
    <Meta {...metadata} />,
    <HeroCarousel />,
    <OurServices />,
    <Testimonials />,
    <TrustMarker />,
    <ContactUsSection />
  ];
}
