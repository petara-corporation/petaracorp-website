import Image from "next/image";
import styles from "./services-list.module.css";
Image;

const ServicesList = () => {
  return (
    <div>
      <div className="heading container text-center flex flex-col items-center mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Our Services
        </h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className={`${styles.processWrap} container mx-auto pt-8`}>
        <div className={`${styles.processItem}`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src="/service-1.jpg"
              alt="Balloon"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className="mb-8 text-center md:text-left text-2xl md:text-3xl font-bold">
              Brand Labeling
            </h2>
            <p className="text-sm">
              Specializing in high-quality Corporate Gifting Solutions, we
              provide an all-encompassing Corporate Gifting Procurement service
              to meet the diverse needs of our clients. Recognizing that
              Corporate Gifting extends beyond the gift itself and presents a
              strategic branding opportunity, we excel in Brand Labeling and
              Custom Labeling—two highly sought-after Corporate Gifting
              Services. Our clients regularly seek innovative Corporate Gifting
              Ideas to leave a lasting impression on both clients and employees.
              With Procura, they discover a partner that streamlines the entire
              process, eliminating the need to navigate through various vendors.
              Elevate your corporate gifts for clients and employees with
              Procura Business Corporate Gifting – Your gateway to creating
              memorable and impactful corporate gifting experiences.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} flex-row-reverse`}>
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
              Customize Gift Packaging
            </h2>
            <p className="text-sm">
              Enhance your corporate connections with Petara's Premium Corporate
              Gifting Solutions. Specializing in Corporate Gifting Procurement,
              we serve as a comprehensive destination for businesses seeking
              exceptional gifting experiences. Our proficiency goes beyond
              conventional gifts; we offer top-notch Customized Gift Packing
              solutions, elevating your company's image and making a lasting
              impact on clients and employees alike. At Petara's, we recognize
              the significance of thoughtful Corporate Gifting Ideas. Hence, we
              assist you in selecting the perfect gifts within your budget. Bid
              farewell to the complexities of dealing with multiple vendors; we
              provide a seamless one-stop procurement experience. Explore
              Petara's Corporate Gifting today for an elevated standard of
              excellence in corporate gifting services.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} `}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src="/service-3.jpeg"
              alt="Balloon"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className="mb-8 text-center md:text-left text-2xl md:text-3xl font-bold">
              Bulk Gifting
            </h2>
            <p className="text-sm">
              In the realm of procurement, we cater to businesses of every
              scale, ranging from small enterprises to large corporations.
              Whether your requirement spans gifts for numerous employees,
              clients, or customers, Petara manages it effortlessly. Our
              all-encompassing procurement service, from start to finish,
              guarantees a hassle-free experience, enabling you to concentrate
              on your priorities. We take pride in presenting finely-tailored
              Corporate Gifting Ideas that cater to diverse industries. Rely on
              Petara Corporate Gifting for a smooth and outstanding corporate
              gifting solution that enhances your brand.
            </p>
          </div>
        </div>
        <div className={`${styles.processItem} flex-row-reverse`}>
          <div className={`${styles.imgWrap}`}>
            <Image
              className={`relative md:mr-8 ${styles.processImg}`}
              src="/service-4.jpeg"
              alt="Luxury Gifting"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className={`${styles.processInfo}`}>
            <h2 className="mb-8 text-center md:text-left text-2xl md:text-3xl font-bold">
              Luxury Gifting
            </h2>
            <p className="text-sm">
              Elevate your corporate gifting strategy with Petara's Premium
              Corporate Gifting Solutions. As a frontrunner in Corporate Gifting
              Procurement, we specialize in delivering luxury gifts that
              distinguish your brand. Our expertise spans bulk gifting of
              upscale items such as Gold Ornaments, Cars, Watches, and more,
              typically reserved for high-profile customers and VIPs. Petara's
              procurement service ensures that your luxury gifting reflects
              opulence and exclusivity. Whether it’s Corporate Gifts for Clients
              or Employees, we present a thoughtfully curated selection of
              Corporate Gifting Ideas tailored to meet your specific needs.
              Trust Petara for a top-tier Corporate Gifting Service that leaves
              a lasting and impressive mark.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
