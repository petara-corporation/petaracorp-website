"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./header.module.css";
import { navLinks } from "./data";

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className={`fixed w-full py-2 md:py-0 px-2 md:px-4 top-0 bg-white z-10  ${styles.header}`}
    >
      <div
        className={`container  mx-auto flex justify-between items-center ${styles.resContainer}`}
      >
        <div className="flex">
          <div className={`${styles.hamburger} relative`}>
            <Image
              className={`relative mr-4 top-1`}
              src="/menu.svg"
              alt="Menu"
              width={35}
              height={35}
            />
            <div className={`${styles.menuSlide} absolute`}>
              <div className={`${styles.nav}`}>
                <nav className={`${styles.mobileMenu} self-center`}>
                  <ul className="my-4">
                    {navLinks.map((nav) => {
                      return (
                        <li className="mb-2" key={nav.id}>
                          <a
                            className={`block p-4 ${
                              pathname === nav.path ? styles.activeLinkMob : ""
                            }`}
                            href={nav.path}
                          >
                            {nav.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <Link href="/" className={`block ${styles.logoWidth}`}>
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
                  <li className={`mr-4 ${styles.mainMenu}`} key={nav.id}>
                    <a
                      className={`${styles.link} px-4 pb-3 whitespace-nowrap ${
                        pathname === nav.path ? styles.activeLink : ""
                      }`}
                      href={nav.path}
                    >
                      {nav.title}
                    </a>
                    {nav?.subMenu && (
                      <div className={styles.subnav}>
                        <ul className="flex flex-wrap justify-center">
                          {nav?.subMenu?.map((sub) => {
                            return (
                              <li
                                className={`ml-4 py-8 ${styles.menuItem}`}
                                key={sub?.id}
                              >
                                <a href={sub.url}>
                                  <div
                                    className={`${styles.layerWrap} relative`}
                                  >
                                    <div className={styles.layerImageWrap}>
                                      <Image
                                        className="relative"
                                        src={sub.img}
                                        alt={sub.label}
                                        width={200}
                                        height={200}
                                      />
                                      <div className={styles.overlay}>
                                        <h2>{sub.label}</h2>
                                      </div>
                                    </div>
                                    <div className={styles.hoverLayer}>
                                      <div className={styles.text}>
                                        <h2>{sub.label}</h2>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="ctaWrap">
          <a className={`${styles.cta} `} href="/contact-us">
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
