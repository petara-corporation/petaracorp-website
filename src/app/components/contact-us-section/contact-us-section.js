"use client";
import { useState } from "react";
import ContactUsModal from "../contact-popup/contact-popup";
import styles from "./contact-us-section.module.css";

export default function ContactUsSection() {
  const [open, setOpen] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <section className={styles.ContactUsWrap}>
      <div
        className={`${styles.heading} container text-center flex flex-col items-center mx-auto`}
      >
        <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
        <div className={`${styles.bar}`}></div>
        <p className="mb-14 px-4">
          We can’t wait to hear about your next project! We will get back to you
        </p>
      </div>
      <div className="container mx-auto">
        <div className={styles.formWrap}>
          <input
            type="text"
            maxLength={60}
            placeholder="Name"
            required
            className={`${styles.input} mt-4 mr-0 md:mt-0 md:mr-4`}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            maxLength={60}
            placeholder="Email"
            required
            className={`${styles.input} mt-4 mr-0 md:mt-0 md:mr-4`}
            onChange={(e) => setEmail(e.target.value)}
          />
          <a
            href={`/contact-us/?name=${fullname}&email=${email}`}
            className={`${styles.quoteBtn} mt-4 ml-0 md:ml-4`}
          >
            Get Quote
          </a>
        </div>
      </div>
      {/* <ContactUsModal
        open={open}
        hideModal={hideModal}
        email={email}
        name={fullname}
      /> */}
    </section>
  );
}
