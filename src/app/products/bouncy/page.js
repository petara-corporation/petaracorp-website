import Image from "next/image";
import styles from "./bouncy.module.css";

export default function Inflatables() {
  return (
    <section>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className="text-4xl font-semibold mb-4">Bouncy</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.productDetailsWrap} container mx-auto mb-8`}>
        <div className={styles.flexWrap}>
          <div className={styles.prodInfo}>
            <h1 className="text-4xl mb-8 ">Draw attention with giant bouncy</h1>
            <p className="mb-8 text">
              Giant inflatables serve as an ideal medium for effective branding,
              capturing attention with their playful nature and providing ample
              space for showcasing your brand name and logo.
            </p>
            <h3 className="text-xl mb-8 font-bold">
              CUSTOMIZABLE INFLATABLE STRUCTURES:
            </h3>
            <p className="mb-8 text">
              Our 3D range includes large inflatable products that can be
              assembled or, more commonly, stitched together. These structures
              require a continuous airflow and pressure, typically provided by a
              blower. Alternatively, polystyrene is an option based on your
              project requirements. Our giant inflatables know no bounds, and
              drawing upon our extensive expertise in textiles, design, and
              complex installations, we can bring your concept to life while
              staying within your initial budget.
            </p>
            <h3 className="text-xl mb-8 font-bold">
              COMMUNICATION THROUGH FIGURES OR PRODUCT ENLARGEMENTS:
            </h3>
            <p className="mb-8 text">
              In addition to the publi-arch, sky tube, or sky dancer, we offer
              inflatable walkers—costumes worn by individuals at fairs or events
              to garner extra attention for your product or brand. Explore other
              possibilities such as product blow-ups, wrappings, logos, stands,
              pillars, walls, bars, game structures, and more.
            </p>
            <h3 className="text-xl mb-2 font-bold">
              CHOOSE FROM TREMENDOUS COLLECTION
            </h3>
            <ul className="list-disc ml-6 mb-6">
              <li className=""> e-Branding Ballon</li>
              <li>Transparent Bubble</li>
              <li>Characters</li>
              <li>Animals</li>
              <li>Logos</li>
              <li>Games</li>
              <li> Tents</li>
              <li>Walls</li>
              <li>Shapes</li>
            </ul>
            <div>
              <a className={styles.portfolioLink} href="/portfolio">
                View Bouncy Portfolio
              </a>
            </div>
          </div>
          <div className={styles.galleryWrap}>
            <div className={`${styles.bigImg}`}>
              <Image
                className={`${styles.gridImg}`}
                src="/service-1.png"
                alt="Bouncy and Inflatables"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={`${styles.imgList}`}>
              <div className="flex-1 mr-4 relative">
                <Image
                  className={`${styles.gridImg} max-h-40 md:max-h-48`}
                  src="/play-inflatable.png"
                  alt="Bouncy and Inflatables"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex-1 mr-4 relative">
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src="/spiderman.png"
                  alt="Bouncy and Inflatables"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex-1 relative">
                <Image
                  className={`${styles.gridImg} max-h-40 max-h-48`}
                  src="/disney-inflatable.png"
                  alt="Bouncy and Inflatables"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
