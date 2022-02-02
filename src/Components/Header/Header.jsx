import Navbar from '../Navbar/Navbar';
import {FaReact, FaHtml5, FaJsSquare, FaCss3, FaBootstrap, FaGithub, FaSass } from 'react-icons/fa';
import './Header.css'

const Header = () => {
  return <header className='header' id='home'>
    <Navbar/>
    <div className='banner'>
      <div className='banner_content'>
        <h1>Luis Julio - Jr. Developer.</h1>
        <h3><span>Desarrollador web frontend</span>, autodidacta, creativo, comprometido, con <span>pasión por la programación</span>, y la tecnología. Abierto a <span>afrontar nuevos retos</span>, y con muchas ganas de <span>crecer tanto profesional como personalmente</span>. Sigue bajando para <span>conocer un poco más de mí</span>.</h3>
        <div>
        <small><FaReact/></small>
        <small><FaHtml5/></small>
        <small><FaJsSquare/></small>
        <small><FaCss3/></small>
        <small><FaBootstrap/></small>
        <small><FaGithub/></small>
        <small><FaSass/></small>


        </div>
      </div>
    </div>
  </header>;
};

export default Header;
