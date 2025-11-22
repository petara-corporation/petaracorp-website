
'use client';
import { useState } from 'react';
import styles from './contact-us-section.module.css';

export default function ContactUsSection() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section className={styles.ContactUsWrap} aria-labelledby="contact-us-heading">
      <div className={`${styles.heading} container text-center flex flex-col items-center mx-auto`}>
        <h2 id="contact-us-heading" className='text-4xl font-semibold mb-4'>Contact Us</h2>
        <div className={`${styles.bar}`}></div>
        <p className='mb-4 px-4'>Ready to take the <strong>next step</strong>?</p>
        <p className='mb-14 px-4'>
          <strong>Share your details</strong>, and we'll <strong>get back to you promptly</strong> to <strong>bring your
            vision to life</strong>!
        </p>
      </div>
      <div className='container mx-auto'>
        <form className={styles.formWrap} action='/contact-us' method='GET'>
          <label htmlFor='name' className='sr-only'>Full Name</label>
          <input
            type='text'
            id='name'
            name='name'
            maxLength={100}
            placeholder='Name'
            required
            value={fullName}
            className={`${styles.input} mt-4 mr-0 md:mt-0 md:mr-4`}
            onChange={e => setFullName(e.target.value)}
          />
          <label htmlFor='email' className='sr-only'>Email Address</label>
          <input
            type='email'
            id='email'
            name='email'
            maxLength={100}
            placeholder='Email'
            required
            value={email}
            className={`${styles.input} mt-4 mr-0 md:mt-0 md:mr-4`}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type='submit'
            className={`${styles.quoteBtn} mt-4 ml-0 md:ml-4`}
            aria-label='Get a quote'
          >
            <strong>Get Quote</strong>
          </button>
        </form>
      </div>
    </section>
  );
};