'use client';
import Image from 'next/image';
import styles from './contact-us.module.css';
import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const searchParams = useSearchParams();
  const [user, setUserData] = useState({
    userName: searchParams?.get('name') || '',
    email: searchParams?.get('email') || '',
    companyName: '',
    subject: '',
    through: '',
    message: '',
    phone: '',
    selectedProduct: '',
    selectedCompanyType: '',
    customService: '',
    eventDate: '',
  });

  const productList = [
    {
      id: 1,
      label: 'Corporate Gifts',
      subProducts: ['Corporate Gifts'],
    },
    {
      id: 2,
      label: 'Inflatables',
      subProducts: [
        'Ground Inflatable Product Shape ',
        'Ground Inflatable Character Shape',
      ],
    },
    {
      id: 3,
      label: 'Bouncy',
      subProducts: [
        'Ball Pool : Bouncy with Ball',
        'Basic Bouncy : Standard Bouncy',
        'Combo Units : Mix of Many Bouncy',
        'Fun Slide : Bouncy & Slide',
        'Fun Obstacle : Bouncy & Obstructs',
        'Aqua Fun : Water Bouncy',
        'Maze’s : Puzzle Bouncy',
        'Package Bouncy : Mix Of All Bouncy',
        'Fun Interactive : Interactive Bouncy',
        'Fun Tunnel  : Tunnel Bouncy',
      ],
    },
    {
      id: 4,
      label: 'Costumes',
      subProducts: [
        'Inflatable Costume : Product Shape',
        'Inflatable Costume : Character Shape ',
        'Fur Costume',
      ],
    },
    {
      id: 5,
      label: 'Trendy',
      subProducts: ['Arches & Kiosk', 'Balloons & Blimps'],
    },
  ];

  const companyTypes = [
    'Marketing Agency',
    'Sports Agency',
    'Creative Agency',
    'Private',
    'Small Business',
    'Government',
    'Technology',
    'Banking & Finance',
    'NGO',
    'School / College',
    'Artist',
    'Others',
  ];

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const showData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/contact-us', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));
    setShowSuccessAlert(true);
    // setTimeout(() => {
    // setUserData({});
    // ref.current.reset();
    // setShowSuccessAlert(false);
    // }, 10000);
  };

  return (
    <div>
      <div>
        <div className={` ${styles.ContactUsWrap}`}>
          <div className={styles.bgwrap}>
            <div
              className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
            >
              <h2 className='text-4xl font-semibold mb-4'>Contact Us</h2>
              <div className={`${styles.bar}`}></div>
            </div>
          </div>
          <div className={`${styles.pageWrap} container mx-auto`}>
            <form
              className={`${styles.formWrap}`}
              onSubmit={e => {
                e.preventDefault();
                e.stopPropagation();
                showData();
              }}
              ref={ref}
            >
              <h3 className='mb-8 font-medium text-xl'>
                Kindly provide a brief details to enhance our service to you
              </h3>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem} ${styles.formItemFirst}`}>
                  <label htmlFor='name' className={`${styles.formLabel}`}>
                    Name
                  </label>
                  <input
                    type='text'
                    name='userName'
                    value={user.userName}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder='Eg: John Doe'
                    required
                  />
                </div>
                <div className={`${styles.formItem}`}>
                  <label
                    className={`${styles.formLabel}`}
                    htmlFor='companyName'
                  >
                    Company Name
                  </label>
                  <input
                    type='text'
                    name='companyName'
                    value={user.companyName}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder='Eg: Amazon'
                    required
                  />
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem} ${styles.formItemFirst}`}>
                  <label className={`${styles.formLabel}`} htmlFor='phone'>
                    Phone
                  </label>
                  <input
                    type='text'
                    name='phone'
                    value={user.phone}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder='+14845219693'
                  />
                </div>
                <div className={`${styles.formItem}`}>
                  <label className={`${styles.formLabel}`} htmlFor='email'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder='Eg: johndoe@gmail.com'
                    required
                  />
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem}`}>
                  <label htmlFor='name' className={`${styles.formLabel}`}>
                    What type of industry or business do you operate in?
                  </label>
                  <select
                    name='selectedCompanyType'
                    id='selectedCompanyType'
                    className={styles.inputSelect}
                    value={user.selectedCompanyType}
                    onChange={handleChange}
                  >
                    <option value={''} disabled></option>
                    {companyTypes.map(company => {
                      return (
                        <option value={company} key={company}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem}`}>
                  <label
                    className={`${styles.formLabel}`}
                    htmlFor='selectedProduct'
                  >
                    Which inflatable product or service are you looking for?
                  </label>
                  <select
                    name='selectedProduct'
                    id='selectedProduct'
                    className={styles.inputSelect}
                    value={user.selectedProduct}
                    onChange={handleChange}
                  >
                    <option value={''} disabled>
                      Select From Our Top Products & Services
                    </option>
                    {productList.map(productGroup => {
                      return (
                        <optgroup
                          label={productGroup.label}
                          key={productGroup.id}
                        >
                          {productGroup.subProducts.map(product => {
                            return (
                              <option value={product} key={product}>
                                {product}
                              </option>
                            );
                          })}
                        </optgroup>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem}`}>
                  <label
                    className={`${styles.formLabel}`}
                    htmlFor='customService'
                  >
                    What other products or services are you seeking?
                  </label>
                  <input
                    type='text'
                    name='customService'
                    value={user.customService}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder='Eg: Theme Based'
                  />
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem}`}>
                  <label className={`${styles.formLabel}`} htmlFor='eventDate'>
                    When is the Event
                  </label>
                  <input
                    type='date'
                    name='eventDate'
                    value={user.eventDate}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder=''
                  />
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem}`}>
                  <label className={`${styles.formLabel}`} htmlFor='message'>
                    Please provide additional information about your needs
                  </label>
                  <textarea
                    className={styles.textarea}
                    value={user.message}
                    name='message'
                    onChange={handleChange}
                    placeholder='Add your message'
                  ></textarea>
                </div>
              </div>
              {showSuccessAlert && (
                <div
                  id='alert-3'
                  class='flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50'
                  role='alert'
                >
                  <svg
                    class='flex-shrink-0 w-4 h-4'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
                  </svg>
                  <span class='sr-only'>Info</span>
                  <div class='ms-3 text-sm font-medium'>
                    We have got your request. Our team will reach out to you
                    regarding your query. Feel free to ping us on{' '}
                    <a href='mailto:sales@petaracorp.com'>
                      sales@petaracorp.com
                    </a>{' '}
                    or call us on{' '}
                    <a href='tel:+918879292103'>+91 88792 92103</a> for any
                    urgent queries.
                    <br />
                    <a
                      href='https://www.instagram.com/petaracorp/?igsh=MXU1NGZjbDVkaGNicg%3D%3D'
                      class='font-semibold underline hover:no-underline'
                    >
                      Check out our Instagram
                    </a>
                  </div>
                  <button
                    type='button'
                    class='ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8'
                    data-dismiss-target='#alert-3'
                    aria-label='Close'
                    onClick={() => setShowSuccessAlert(false)}
                  >
                    <span class='sr-only'>Close</span>
                    <svg
                      class='w-3 h-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 14'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                      />
                    </svg>
                  </button>
                </div>
              )}
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem} text-center`}>
                  <button className={styles.modalBtn} type='submit'>
                    Get Quote
                  </button>
                </div>
              </div>
            </form>
            <div className={`${styles.rightDataWrap}`}>
              <div className='pb-8 mb-8 border-b'>
                <h3 className='mb-8 font-medium text-xl'>
                  We offer the following services:
                </h3>
                <ul className='list-disc px-8 text text-sm'>
                  <li className='mb-4'>
                    Phone consultations to assist you in selecting the
                    appropriate giant inflatable products or Corporate Gifts and
                    guiding you through the available options.
                  </li>
                  <li className='mb-4'>
                    A detailed quotation that encompasses your design,
                    fabrication, and delivery schedule requirements.
                  </li>
                  <li className='mb-4'>
                    Professional concept renderings for your events.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='mb-8 font-medium text-xl'>Contact Us</h3>
                <section className={styles.contact}>
                  <div className={`${styles.addressWrap} mb-8`}>
                    <Image
                      src='/marker.svg'
                      alt='Address'
                      width={40}
                      height={40}
                    />
                    <p className='text-sm font-medium ml-6'>
                      I - 5, Clarion Park, <br />
                      Aundh, Pune - 411007
                    </p>
                  </div>
                  <div className={styles.addressWrap}>
                    <Image
                      src='/phone.svg'
                      alt='Address'
                      width={40}
                      height={40}
                    />
                    <a
                      href='tel:+918879292103'
                      className='text-sm font-medium ml-6'
                    >
                      +91 88792 92103
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
