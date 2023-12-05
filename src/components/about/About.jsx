import { useRef } from "react";
import "./about.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const testimonials = [
  {
    name: 'James Turner',
    text: "I've been a regular client for the past year, and the quality of service has been consistently excellent. The deep tissue massage is my personal favorite. It's clear that Rita Scholl is highly skilled and dedicated to promoting wellness and relaxation."
  },
  {
    name: 'Robert Johnson',
    text: "Rita Spa environment is so calming and she is incredibly friendly. The heated stone massage was a rejuvenating experience that I would recommend to anyone looking to foster balance and tranquility in their life."
  },
  {
    name: 'Emily Rodriguez',
    text: "The level of service at Ritas Spa is unparalleled. I've tried various services, but the Thai Massage stands out. It's a truly therapeutic experience that leaves me feeling refreshed and revitalized every time. I can't recommend them enough!"
  },
  {
    name: 'Sarah Thompson',
    text:  "I've experienced various massages, but Rita Scholl stands out! Her intuitive touch and personalized approach made my session truly rejuvenating. I feel more relaxed and centered than ever. Highly recommend!"
  }
]

const About = () => {
  const ref = useRef();

  return (
    <motion.div className="about" ref={ref}>
      <div className="about-content">
        <motion.div
          className="image-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img src="/rita.jfif" alt="" />
        </motion.div>
        <motion.div
          className="text-container"
          variants={textVariants}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h1>
            <motion.b whileHover={{ color: "orange" }}>ABOUT</motion.b> ME
          </h1>
          <motion.p variants={textVariants}>
            Committed to your relaxation and well-being, I bring the healing
            touch of massage to enhance your overall balance and tranquility.
          </motion.p>
          <button>WHAT WE DO?</button>
        </motion.div>
      </div>
      <div className="mission-section">
        <motion.h2 variants={textVariants}>Our Mission</motion.h2>
        <motion.p variants={textVariants}>
          Dedicated to promoting wellness and relaxation, I aim to provide a
          rejuvenating experience through the art of massage therapy, fostering
          balance and tranquility in your life.
        </motion.p>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="progress-bar">
          <motion.div
            className="skill deep-tissue"
            initial={{ width: 0 }}
            animate={{ width: "90%" }}
          >
            <span>90%</span> Deep Tissue Massage
          </motion.div>
          <motion.div
            className="skill nuru"
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
          >
            <span>85%</span> Nuru Massage
          </motion.div>
          <motion.div
            className="skill sensual"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
          >
            <span>80%</span> Sensual Massage
          </motion.div>
          <motion.div
            className="skill cupping"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
          >
            <span>80%</span> Cupping Massage
          </motion.div>
          <motion.div
            className="skill prostate"
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
          >
            <span>85%</span> Prostate Massage
          </motion.div>
          <motion.div
            className="skill heated-stone"
            initial={{ width: 0 }}
            animate={{ width: "90%" }}
          >
            <span>90%</span> Heated Stone Massage
          </motion.div>
          <motion.div
            className="skill shiatsu"
            initial={{ width: 0 }}
            animate={{ width: "86%" }}
          >
            <span>86%</span> Shiatsu Massage Therapy
          </motion.div>
          <motion.div
            className="skill sports"
            initial={{ width: 0 }}
            animate={{ width: "92%" }}
          >
            <span>92%</span> Sports Massage
          </motion.div>
          <motion.div
            className="skill thai"
            initial={{ width: 0 }}
            animate={{ width: "82%" }}
          >
            <span>82%</span> Thai Massage
          </motion.div>
          <motion.div
            className="skill geriatric"
            initial={{ width: 0 }}
            animate={{ width: "88%" }}
          >
            <span>88%</span> Geriatric Massage
          </motion.div>
        </div>
      </div>
      
      <div className="testimonials-section">
        <h2>Testiminials</h2>
        {
          testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p>{testimonial.text}</p>
          <h3>- {testimonial.name}</h3>
        </div>))
        }
      </div>
      <div className="video-section">
        {/* Add your video elements here */}
      </div>
      <div className="picture-section">
        {/* Add your picture elements here */}
      </div>
      <div className="certificate-section">
        <h2>My Certifications</h2>
        <img src="rita-cert.jfif" alt="" />
        <img src="rita-cert2.jfif" alt="" />
        <img src="rita-cert3.jfif" alt=""/>
        {/* Add your certificate elements here */}
      </div>
    </motion.div>
  );
};

export default About;