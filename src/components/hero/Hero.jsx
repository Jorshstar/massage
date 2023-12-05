import "./hero.scss";
import { motion } from "framer-motion";
import { FaInstagram, FaSnapchat, FaFacebook } from 'react-icons/fa';

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
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RITA SCHOLL</motion.h2>
          <motion.h1 variants={textVariants}>
            MASSAGE THERAPIST
          </motion.h1>
          <motion.p variants={textVariants}>
            Looking for the best and quality massage services? Here is the right place to be. Trust me!
          </motion.p>

          {/* Social Media Icons */}
          <motion.div variants={textVariants} className="socialIcons">
            <a href="your-instagram-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="your-snapchat-link" target="_blank" rel="noopener noreferrer">
              <FaSnapchat />
            </a>
            <a href="your-facebook-link" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </motion.div>
          
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        MASSAGE THERAPIST
      </motion.div>
      <motion.div
        className="imageContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <img src="/rita 2.jfif" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;