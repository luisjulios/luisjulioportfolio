import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return <footer>
    <div className="footer-container">
     <a target="blank" href="https://www.linkedin.com/in/antsth/"><FaLinkedinIn/></a>
     <a target="blank" href="https://github.com/luisjulios"><FaGithub/></a>
    </div>
      <p>Desarrollado por <a target="blank" href="https://www.linkedin.com/in/antsth/">Luis Julio</a>❤️</p>

  </footer>;
};

export default Footer;
