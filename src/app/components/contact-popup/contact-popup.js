"use client";

import styles from "./contact-popup.module.css";
import React, { useState, useRef, useEffect } from "react";
import useOutsideClick from "../useOutsideClick";

const ContactUsModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const [user, setUserData] = useState({
    name: props?.name || "",
    email: props?.email || "",
    subject: "",
    through: "",
    message: "",
  });

  useEffect(() => {
    user.email = props.email;
  }, [props.email]);

  useEffect(() => {
    user.name = props.name;
  }, [props.name]);

  useOutsideClick(ref, () => {
    if (!isOpen) {
      props.hideModal();
    }
  });

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
      <div
        className={`${styles.backdrop} ${
          props.open ? styles.show : styles.hide
        }`}
      >
        <div
          className={`${styles.popup} ${styles.ContactUsModalWrap}`}
          ref={ref}
        >
          <div className="heading container text-center flex flex-col items-center mx-auto">
            <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
            <div className={`${styles.bar}`}></div>
          </div>
          <div className={`${styles.formWrap}`}>
            <div className={`${styles.formRow}`}>
              <div
                className={`${styles.formItem}`}
                style={{ marginRight: "4%" }}
              >
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
              <div
                className={`${styles.formItem}`}
                style={{ marginRight: "4%" }}
              >
                <label className={`${styles.formLabel}`} htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={user.subject}
                  onChange={handleChange}
                  className={styles.inputForm}
                  placeholder="Eg:quotation for corporate gifting"
                />
              </div>
              <div className={`${styles.formItem}`}>
                <label className={`${styles.formLabel}`} htmlFor="through">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  name="through"
                  value={user.through}
                  onChange={handleChange}
                  className={styles.inputForm}
                  placeholder="Eg: Facebook"
                />
              </div>
            </div>
            <div className={`${styles.formRow}`}>
              <div className={`${styles.formItem}`}>
                <label className={`${styles.formLabel}`} htmlFor="message">
                  Message
                </label>
                <textarea
                  className={styles.textarea}
                  value={user.message}
                  name="message"
                  onChange={handleChange}
                  placeholder="add your messaege"
                ></textarea>
              </div>
            </div>
            <div className={`${styles.formRow}`}>
              <div className={`${styles.formItem} text-center`}>
                <button className={styles.modalBtn} onClick={showData}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
