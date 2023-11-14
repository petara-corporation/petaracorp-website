import Benefits from "./components/benefits/benefits";
import ContactUsSection from "./components/contact-us-section/contact-us-section";
import HeroCarousel from "./components/hero-slider/hero-slider";
import OurServices from "./components/our-services/our-services";
import Testimonials from "./components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroCarousel />
        <OurServices />
        <Benefits />
        <Testimonials />
        <ContactUsSection />
      </main>
    </>
  );
}
