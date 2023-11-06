"use client";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./header.module.css";
import { navLinks } from "./data";
import ContactUsModal from "@/app/components/contact-popup/contact-popup";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <header
      className={`fixed w-full p-4 md:p-8 top-0 bg-white z-10 ${styles.header}`}
    >
      <div
        className={`container  mx-auto flex justify-between ${styles.resContainer}`}
      >
        <div className="flex">
          <div className={`${styles.hamburger} relative`}>
            <Image
              className={`relative mr-4 top-3`}
              src="/menu.svg"
              alt="Menu"
              width={35}
              height={35}
              priority
            />
            <div className={`${styles.menuSlide} absolute`}>
              <div className={`${styles.nav}`}>
                <nav className={`${styles.mobileMenu} self-center`}>
                  <ul className="my-4">
                    {navLinks.map((nav) => {
                      return (
                        <li className="mb-2" key={nav.id}>
                          <Link
                            className={`block p-4 ${
                              pathname === nav.path ? styles.activeLinkMob : ""
                            }`}
                            href={nav.path}
                          >
                            {nav.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <Link href="/" className="block" style={{ width: "163px" }}>
            <Image
              className="relative"
              src="/logo.svg"
              alt="Petara Logo"
              width={163}
              height={55}
              priority
            />
          </Link>
        </div>
        <div className="flex">
          <nav className={`${styles.desktopMenu} self-center`}>
            <ul className="flex">
              {navLinks.map((nav) => {
                return (
                  <li className="mr-4 lg:mr-8" key={nav.id}>
                    <Link
                      className={`${styles.link} px-4 lg:px-8 pb-3 ${
                        pathname === nav.path ? styles.activeLink : ""
                      }`}
                      href={nav.path}
                    >
                      {nav.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="ctaWrap">
          <button className={`${styles.cta} `} onClick={() => setOpen(true)}>
            Get in Touch
          </button>
        </div>
      </div>

      <ContactUsModal open={open} hideModal={hideModal} email={""} name={""} />
    </header>
  );
}
