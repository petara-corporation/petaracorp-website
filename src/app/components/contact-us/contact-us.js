"use client";
import { useState } from "react";
import ContactUsModal from "../contact-popup/contact-popup";
import styles from "./contact-us.module.css";

export default function ContactUs() {
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
        <p className="mb-14">
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
            className={styles.input}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            maxLength={60}
            placeholder="Email"
            required
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.quoteBtn} onClick={() => setOpen(true)}>
            Get Quote
          </button>
        </div>
      </div>
      <ContactUsModal
        open={open}
        hideModal={hideModal}
        email={email}
        name={fullname}
      />
    </section>
  );
}
