import ContactUsSection from './components/contact-us-section/contact-us-section';
import HeroCarousel from './components/hero-slider/hero-slider';
import Meta from './components/meta/meta.component';
import OurServices from './components/our-services/our-services';
import Testimonials from './components/testimonials/testimonials';
import TrustMarker from './components/trustmarker-section/trustmarker';

// AKfycbzpuFou4q73FrbfNNOXkV9b7yc3QnhDjAcQFbm_0YLpeBSK0ZTbV9Wc00MnxwacdT1j
// https://script.google.com/macros/s/AKfycbzpuFou4q73FrbfNNOXkV9b7yc3QnhDjAcQFbm_0YLpeBSK0ZTbV9Wc00MnxwacdT1j/exec

export const metadata = {
  title: 'Petara Corporation',
  description: 'Inflatables, Bouncy & Corporate Gifting Provider',
};

export default function Home() {
  return (
    <>
      <Meta {...metadata} />
      <HeroCarousel />
      <OurServices />
      <Testimonials />
      <TrustMarker />
      <ContactUsSection />
    </>
  );
}
