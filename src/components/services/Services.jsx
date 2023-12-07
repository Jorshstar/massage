import { useRef } from "react";
import "./services.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Nuru Massage",
    img: "rita-sim1.jpg",
    desc: "Experience the ultimate in relaxation and sensory indulgence with my Nuru massage service. This specialized technique combines the healing power of touch with the use of nourishing gel to create a unique and rejuvenating experience. Promoting deep relaxation, stress relief, and enhanced well-being, our nuru massage is designed to cater to your physical and mental harmony. ",
  },
  {
    id: 2,
    title: "Deep Tissue Massage",
    img: "rita-sim2.jpg",
    desc: "Deep Tissue Massage: Unlock the healing potential within your muscles with our deep tissue massage. This targeted therapeutic technique focuses on releasing tension and knots deep within the muscle layers.",
  },
  {
    id: 3,
    title: "Heated Stone Massage",
    img: "rita-stone.webp",
    desc: "Heated Stone Massage: Embark on a journey of serenity as the soothing warmth of carefully placed heated stones melts away tension. Ritas Spa heated stone massage is a therapeutic blend of heat and skilled touch, promoting profound relaxation and revitalization.",
  },
  {
    id: 4,
    title: "Thai Massage",
    img: "rita-mas1.jpg",
    desc: " Immerse yourself in the ancient art of healing with Ritas Spa Thai massage. This unique and invigorating technique combines rhythmic stretching, acupressure, and energy work to promote flexibility, release tension, and restore balance. ",
  },
   {
    id: 4,
    title: "Cupping Massage",
    img: "rita-cup2.jpg",
    desc: "Experience the innovative fusion of traditional healing and modern wellness with Ritas Spa cupping massage. This therapeutic technique utilizes suction cups to stimulate blood flow, release muscle tension, and promote deep relaxation. ",
  },
   {
    id: 4,
    title: "Sensual Massage",
    img: "rita-sens.webp",
    desc: "Explore the art of relaxation and heightened awareness with our sensual massage. This intimate experience is designed to awaken the senses, promoting a deep connection between mind and body. Through gentle, flowing strokes, Ritas Spa skilled therapist creates an atmosphere of tranquility and comfort ",
  },
   {
    id: 4,
    title: "Prostrate Massage",
    img: "rita-pros.webp",
    desc: "A specialized therapeutic service focused on promoting prostate health and overall well-being. Ritas Spa experienced therapists use gentle and precise techniques to address specific concerns. ",
  },
   {
    id: 4,
    title: "Sports Massage",
    img: "rita-sport.webp",
    desc: "Elevate your athletic performance and enhance recovery with our sports massage. Tailored to the needs of active individuals, this therapeutic session incorporates targeted techniques to alleviate muscle tension, improve flexibility, and expedite healing. ",
  },
   {
    id: 4,
    title: "Geriatric Massage",
    img: "rita-geria.jpg",
    desc: "Nurture well-being at every stage of life with our specialized geriatric massage. Tailored to the unique needs of seniors, this gentle and soothing therapy focuses on promoting relaxation, alleviating stiffness, and improving circulation.",
  },
   {
    id: 4,
    title: "Shiatsu Massage",
    img: "rita-mas2.jpg",
    desc: "Immerse yourself in the ancient Japanese art of healing touch with our Shiatsu massage. Rooted in the principles of energy balance, this therapeutic technique uses precise finger pressure and stretching to promote relaxation and alleviate tension. ",
  },
   {
    id: 4,
    title: "Swedish and other Massage",
    img: "rita-swed.webp",
    desc: " Indulge in the epitome of relaxation with our Swedish massage, a classic technique designed to promote tranquility and release muscle tension. Explore a variety of other massage styles tailored to your preferences, whether it's deep tissue for targeted relief or aromatherapy for a sensory journey.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="https://form.jotform.com/231960883666065" target="_blank" rel="noopener noreferrer">
              <button>Schedule Appointment</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Services</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Services;
