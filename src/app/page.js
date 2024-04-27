import ContactUsSection from './components/contact-us-section/contact-us-section';
import HeroCarousel from './components/hero-slider/hero-slider';
import Meta from './components/meta/meta.component';
import OurServices from './components/our-services/our-services';
import Testimonials from './components/testimonials/testimonials';
import TrustMarker from './components/trustmarker-section/trustmarker';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDwXKyf4r-zIIjS5Ct28KImLe4EzUtlh6I',
  authDomain: 'petracorp-website.firebaseapp.com',
  projectId: 'petracorp-website',
  storageBucket: 'petracorp-website.appspot.com',
  messagingSenderId: '649878126813',
  appId: '1:649878126813:web:c8bd25a9e7202603415b34',
  measurementId: 'G-3PHFMVW796',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
