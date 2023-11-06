import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";

export default function OurServices() {
  return (
    <section className="ourServices">
      <div className="heading container text-center flex flex-col items-center mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Our Services</h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className="images container mx-auto block md:flex justify-between">
        <div
          className={`${styles.layerWrap} w-11/12 mx-auto md:w-2/4 mb-8 md:mb-0 md:mr-6 relative`}
        >
          <div className={styles.layerImageWrap}>
            <Image
              src="/service-1.png"
              alt="Bouncy and Inflatables"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.overlay}>
              <h2>Bouncy & Inflatables</h2>
              <h3>Various products and categories</h3>
            </div>
          </div>
          <div className={styles.hoverLayer}>
            <div className={styles.text}>
              <h2>Bouncy & Inflatables</h2>
              <h3>Various products and categories</h3>
              <Link href={"/"} className={styles.viewAll}>
                View All
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`${styles.layerWrap} w-11/12 mx-auto md:w-2/4 relative`}
        >
          <div className={styles.layerImageWrap}>
            <Image
              src="/service-2.png"
              alt="Bouncy and Inflatables"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.overlay}>
              <h2>Corporate Gifting</h2>
              <h3>Various products and categories</h3>
            </div>
          </div>
          <div className={styles.hoverLayer}>
            <div className={styles.text}>
              <h2>Corporate Gifting</h2>
              <h3>Various products and categories</h3>
              <Link href={"/"} className={styles.viewAll}>
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
