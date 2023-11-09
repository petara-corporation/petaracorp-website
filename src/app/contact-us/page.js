"use client";
import Image from "next/image";
import styles from "./contact-us.module.css";
import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const searchParams = useSearchParams();
  console.log(searchParams.get("name"));
  const [user, setUserData] = useState({
    name: searchParams?.get("name") || "",
    email: searchParams?.get("email") || "",
    companyName: "",
    subject: "",
    through: "",
    message: "",
    phone: "",
    selectedProduct: "",
    selectedCompanyType: "",
    customService: "",
    eventDate: "",
  });

  const productList = [
    {
      id: 1,
      label: "Inflatables",
      subProducts: [
        "Ground Inflatable Product Shape ",
        "Ground Inflatable Character Shape",
      ],
    },
    {
      id: 2,
      label: "Bouncy",
      subProducts: [
        "Ball Pool : Bouncy with Ball",
        "Basic Bouncy : Standard Bouncy",
        "Combo Units : Mix of Many Bouncy",
        "Fun Slide : Bouncy & Slide",
        "Fun Obstacle : Bouncy & Obstructs",
        "Aqua Fun : Water Bouncy",
        "Maze’s : Puzzle Bouncy",
        "Package Bouncy : Mix Of All Bouncy",
        "Fun Interactive : Interactive Bouncy",
        "Fun Tunnel  : Tunnel Bouncy",
      ],
    },
    {
      id: 3,
      label: "Costumes",
      subProducts: [
        "Inflatable Costume : Product Shape",
        "Inflatable Costume : Character Shape ",
        "Fur Costume",
      ],
    },
    {
      id: 4,
      label: "Trendy",
      subProducts: ["Arches & Kiosk", "Balloons & Blimps"],
    },
  ];

  const companyTypes = [
    "Marketing Agency",
    "Sports Agency",
    "Creative Agency",
    "Private",
    "Small Business",
    "Government",
    "Technology",
    "Banking & Finance",
    "NGO",
    "School / College",
    "Artist",
    "Others",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const showData = () => {
    console.log(user);
  };

  return (
    <div>
      <div>
        <div className={` ${styles.ContactUsWrap}`} ref={ref}>
          <div className={styles.bgwrap}>
            <div
              className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
            >
              <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
              <div className={`${styles.bar}`}></div>
            </div>
          </div>
          <div className={`${styles.pageWrap} container mx-auto`}>
            <div className={`${styles.formWrap}`}>
              <h3 className="mb-8 font-medium text-xl">
                Kindly provide a brief details to enhance our service to you
              </h3>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem} ${styles.formItemFirst}`}>
                  <label htmlFor="name" className={`${styles.formLabel}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder="Eg: John Doe"
                  />
                </div>
                <div className={`${styles.formItem}`}>
                  <label
                    className={`${styles.formLabel}`}
                    htmlFor="companyName"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={user.companyName}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder="Eg: Amazon"
                  />
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem} ${styles.formItemFirst}`}>
                  <label className={`${styles.formLabel}`} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder="+14845219693"
                  />
                </div>
                <div className={`${styles.formItem}`}>
                  <label className={`${styles.formLabel}`} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder="Eg: johndoe@gmail.com"
                  />
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem}`}>
                  <label htmlFor="name" className={`${styles.formLabel}`}>
                    What type of industry or business do you operate in?
                  </label>
                  <select
                    name="selectedCompanyType"
                    id="selectedCompanyType"
                    className={styles.inputSelect}
                    value={user.selectedCompanyType}
                    onChange={handleChange}
                  >
                    <option value={""} disabled></option>
                    {companyTypes.map((company) => {
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
                    htmlFor="selectedProduct"
                  >
                    Which inflatable product or service are you looking for?
                  </label>
                  <select
                    name="selectedProduct"
                    id="selectedProduct"
                    className={styles.inputSelect}
                    value={user.selectedProduct}
                    onChange={handleChange}
                  >
                    <option value={""} disabled>
                      Select From Our Top Products & Services
                    </option>
                    {productList.map((productGroup) => {
                      return (
                        <optgroup
                          label={productGroup.label}
                          key={productGroup.id}
                        >
                          {productGroup.subProducts.map((product) => {
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
                    htmlFor="customService"
                  >
                    What other products or services are you seeking?
                  </label>
                  <input
                    type="text"
                    name="customService"
                    value={user.customService}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder="Eg: Theme Based"
                  />
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem}`}>
                  <label className={`${styles.formLabel}`} htmlFor="eventDate">
                    When is the Event
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={user.eventDate}
                    onChange={handleChange}
                    className={styles.inputForm}
                    placeholder=""
                  />
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem}`}>
                  <label className={`${styles.formLabel}`} htmlFor="message">
                    Please provide additional information about your needs
                  </label>
                  <textarea
                    className={styles.textarea}
                    value={user.message}
                    name="message"
                    onChange={handleChange}
                    placeholder="Add your message"
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.formRow}`}>
                <div className={`${styles.formItem} text-center`}>
                  <button className={styles.modalBtn} onClick={showData}>
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.rightDataWrap}`}>
              <div className="pb-8 mb-8 border-b">
                <h3 className="mb-8 font-medium text-xl">
                  We offer the following services:
                </h3>
                <ul className="list-disc px-8 text text-sm">
                  <li className="mb-4">
                    Phone consultations to assist you in selecting the
                    appropriate giant inflatable products or Corporate Gifts and
                    guiding you through the available options.
                  </li>
                  <li className="mb-4">
                    A detailed quotation that encompasses your design,
                    fabrication, and delivery schedule requirements.
                  </li>
                  <li className="mb-4">
                    Professional concept renderings for your events.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-8 font-medium text-xl">Contact Us</h3>
                <section className={styles.contact}>
                  <div className={`${styles.addressWrap} mb-8`}>
                    <Image
                      src="/marker.svg"
                      alt="Address"
                      width={40}
                      height={40}
                    />
                    <p className="text-sm font-medium ml-6">
                      5 Shiv Shakti Complx, B S V Road, <br />
                      Dahisar,Mumbai,Maharashtra
                    </p>
                  </div>
                  <div className={styles.addressWrap}>
                    <Image
                      src="/phone.svg"
                      alt="Address"
                      width={40}
                      height={40}
                    />
                    <a
                      href="tel:02228486811"
                      className="text-sm font-medium ml-6"
                    >
                      022-284-86811
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
