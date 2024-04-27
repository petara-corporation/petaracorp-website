import ContactUsSection from '../components/contact-us-section/contact-us-section';
import EcoEthnicGiftingIntro from './components/eco-ethnic-intro/eco-ethnic-intro';
import EcoEthnicProductListing from './components/eco-ethnic-products/eco-ethnic-product-listing';

const CorporateGifting = () => {
  return (
    <>
      <head>
        <title>Eco-Ethnic Gifting | Petara Corporation</title>
      </head>
      <EcoEthnicGiftingIntro />
      <EcoEthnicProductListing />
      {/* <Testimonials /> */}
      <ContactUsSection />
    </>
  );
};

export default CorporateGifting;
