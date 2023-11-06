import Image from "next/image";
import styles from "./benefits.module.css";

export default function Benefits() {
  const benefitsList = [
    {
      id: 1,
      title: "High Impact & Recall",
      desc: "Inflatable promotions captivate, <br /> enhance brand visibility, and craft <br /> memorable event experiences",
      icon: "/monitoring.svg",
    },
    {
      id: 2,
      title: "Market Segmentation",
      desc: "Inflatables for promotions offer <br /> effective market segmentation by <br />attracting a targeted audience",
      icon: "/diversity.svg",
    },
    {
      id: 3,
      title: "Cost Effective",
      desc: "Longevity and high impact <br /> make their purchase reasonable",
      icon: "/savings.svg",
    },
  ];
  return (
    <section className={styles.benefitsWrap}>
      <div
        className={`${styles.heading} container text-center flex flex-col items-center mx-auto`}
      >
        <h2 className="text-4xl font-semibold mb-4">Benefits</h2>
        <div className={`${styles.bar}`}></div>
      </div>
      <div className="container mx-auto">
        <ul className=" block md:flex justify-between flex-wrap">
          {benefitsList.map((benefit) => {
            return (
              <li key={benefit.id} className="text-center mb-6 md:mb-0">
                <div className="">
                  <Image
                    className="relative inline-block mb-6"
                    src={benefit.icon}
                    alt={benefit.title}
                    width={48}
                    height={48}
                  />
                </div>

                <div className="font-bold text-2xl mb-2">{benefit.title}</div>
                <div
                  className="font-light"
                  dangerouslySetInnerHTML={{ __html: benefit.desc }}
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
