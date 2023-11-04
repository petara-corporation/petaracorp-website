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
    <header className="fixed w-full p-8 top-0 bg-white z-10">
      <div className="container mx-auto flex justify-between">
        <div className="logo">
          <Link href="/">
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
        <div className="nav flex">
          <nav className="self-center">
            <ul className="flex">
              {navLinks.map((nav) => {
                return (
                  <li className="mr-8" key={nav.id}>
                    <Link
                      className={`${styles.link} px-8 pb-3 ${
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
