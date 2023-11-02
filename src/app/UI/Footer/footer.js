import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div
        className="container mx-auto flex justify-between"
        style={{ padding: "70px 0" }}
      >
        <section className="logoSection">
          <div className="logo">
            <Link href="/">
              <Image
                className="relative"
                src="/logo.svg"
                alt="Petara Logo"
                width={163}
                height={55}
              />
            </Link>
          </div>
        </section>
        <section className={styles.footerNav}>
          <nav>
            <ul>
              <li>
                <h3 className="font-bold mb-6" style={{ fontFamily: "arial" }}>
                  {" "}
                  Company
                </h3>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium mb-4 inline-block text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="font-medium mb-4 inline-block text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium mb-4 inline-block text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="" className="font-medium inline-block text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section>
          <nav>
            <ul>
              <li>
                <h3 className="font-bold mb-6" style={{ fontFamily: "arial" }}>
                  {" "}
                  Follow Us
                </h3>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="font-medium mb-4 inline-block text-sm"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="font-medium mb-4 inline-block text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="font-medium mb-4 inline-block text-sm"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className={styles.contact}>
          <div className={`${styles.addressWrap} mb-8`}>
            <Image src="/marker.svg" alt="Address" width={40} height={40} />
            <p className="text-sm font-medium ml-6">
              5 Shiv Shakti Complx, B S V Road, <br />
              Dahisar,Mumbai,Maharashtra
            </p>
          </div>
          <div className={styles.addressWrap}>
            <Image src="/phone.svg" alt="Address" width={40} height={40} />
            <a href="tel:02228486811" className="text-sm font-medium ml-6">
              022-284-86811
            </a>
          </div>
        </section>
      </div>
      <div className={`${styles.copyright} py-4`}>
        <p className="text-white container text-center mx-auto">
          &#169; Copyright {new Date().getFullYear()} Petara Corp, All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
