import { useRef } from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
          <Link to="Services" smooth={true} duration={50}>
            <button>WHAT I DO?</button>
          </Link>
        </motion.div>
      </div>
      <div className="mission-section">
        <motion.h2 variants={textVariants}>Mission</motion.h2>
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