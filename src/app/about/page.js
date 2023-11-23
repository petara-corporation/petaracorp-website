import Image from "next/image";
import Trustmarker from "../components/trustmarker-section/trustmarker";
import styles from "./about-us.module.css";

export default function About() {
  return (
    <section>
      <div className={styles.bgwrap}>
        <div
          className={`heading  text-center flex flex-col items-center mx-auto ${styles.verticalAlign}`}
        >
          <h2 className="text-4xl font-semibold mb-4">About Us</h2>
          <div className={`${styles.bar}`}></div>
        </div>
      </div>
      <div className={`${styles.aboutInfo} container mx-auto text-center`}>
        <h2 className="text-4xl mb-8 ">About Petara</h2>
        <p className="mb-8 text">
          Petara has been your trusted collaborator for creating, manufacturing,
          and implementing visual marketing solutions for a wide range of
          projects. We are eager to assist you with branding, provide the ideal
          attention-grabber for your events, and facilitate your product
          launches. Our focus is dedicated to sustainable business practices and
          environmental considerations.
        </p>
        <h3 className="text-xl mb-8 font-bold">ALL PROJECTS, BIG AND SMALL</h3>
        <p className="mb-8">
          Flexibility is a core principle that runs throughout our entire
          organization, complementing our boundless imagination. In addition to
          our dedicated permanent team, we have the capacity to quickly expand
          to a workforce of up to 300 individuals when tackling substantial
          projects. This adaptability empowers us to effectively manage major
          undertakings. Trustworthiness is paramount to us, especially when
          handling product launches; rest assured, your confidential information
          is secure with X-Treme Creations, ensuring a bright future for your
          endeavors.
        </p>
      </div>
      <div className={`${styles.processWrap} container mx-auto pt-8`}>
        <div className={`${styles.processItem}`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src="/service-1.png"
              alt="Balloon"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className="mb-8 text-center md:text-left text-2xl md:text-3xl font-bold">
              Production within the agreed timing
            </h2>
            <p className="text-sm">
              Throughout the entire production process, we maintain continuous
              communication and prioritize adherence to deadlines. If desired,
              we can vigilantly manage the project's budget. Our agile and lean
              work approach allows us to smoothly accommodate last-minute
              changes, ensuring a flexible and efficient project execution.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} flex-row-reverse`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src="/baloon.jpg"
              alt="Balloon"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className="mb-8 text-center md:text-left text-2xl md:text-3xl font-bold">
              Project management adapted to your budget
            </h2>
            <p className="text-sm">
              Petara can oversee both the project's design and execution. Please
              inform us about your collaboration preferences, and we'll work
              together to bring your vision to life.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} `}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src="/service-2.png"
              alt="Balloon"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className="mb-8 text-center md:text-left text-2xl md:text-3xl font-bold">
              Designing your creative advice
            </h2>
            <p className="text-sm">
              At this juncture, we have reached a mutual consensus on the budget
              and are enthusiastic to commence the design phase. Our team of
              industrial design engineers is actively translating our collective
              ideas into action. With a wealth of 25 years of expertise at our
              disposal, we are meticulously selecting the most suitable
              materials, construction methods, and printing procedures for your
              giant inflatable. We are in the process of crafting the
              three-dimensional framework and engineering blueprints, seamlessly
              incorporating your logos and brand colors while adhering to your
              branding guidelines
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} flex-row-reverse`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src="/costume.jpg"
              alt="Balloon"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className="mb-8 text-center md:text-left text-2xl md:text-3xl font-bold">
              Air your views
            </h2>
            <p className="text-sm">
              Our entire team is fully engaged, meticulously fabricating your
              inflatable to meet your precise specifications. We will maintain
              ongoing communication to keep you informed of the progress. Upon
              completion, we subject every aspect, from construction to the
              printing of your giant inflatable, to rigorous quality control and
              pressure testing. This meticulous approach guarantees that every
              detail adheres to the most stringent construction and safety
              standards. we can assure the installation of the project, but also
              the cleaning, the maintenance and the storage after use.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem}`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src="/bouncy.jpg"
              alt="Balloon"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className="mb-8 text-center md:text-left text-2xl md:text-3xl font-bold">
              Delivery & satisfied customers
            </h2>
            <p className="text-sm">
              Your genuine, certified giant inflatable product is prepared to
              leave our facility, poised to captivate, entertain, or effectively
              promote your brand to your fans, target audience, or guests.
              Satisfied customers are our #1 priority. Therefore, we discuss the
              Return on Investment (ROI) of your project, so we can collaborate
              more efficiently next time.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.processItem}`}>
        <Trustmarker />
      </div>
    </section>
  );
}
