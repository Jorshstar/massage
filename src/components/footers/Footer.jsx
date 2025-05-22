import "./footers.scss";
import { FaInstagram, FaSnapchat, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">&#169;</div>
          <p>&copy; 2023 Ritas Spa. All rights reserved.</p>
          <div  className="social-media">
            <a href="https://www.instagram.com/ritascholl446/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            
            <a href="https://web.facebook.com/nancy.paulman.lor" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          
      </div>
    </div>
  );
};

export default Footer;
