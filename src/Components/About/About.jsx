import {FaDownload} from 'react-icons/fa';
import Profile from '../../images/profile.JPG';
import './About.css';

const About = () => {
  return <section className="about" id='about'>
    <div className="about_content">
      <div className='profile-container'>
        <img src={Profile} alt="Imagen de perfil" className='profile'/>
      </div>
      <div className='about_me'>
        <h2 className='about_h2'>Sobre mí</h2>
        <p>Hola! Soy Luis Julio, desarrollador web frontend.
          Me gusta aprender nuevas tecnologías y desarrollar aplicaciones web.
          Me considero una persona responsable, con una gran capacidad de trabajo y
          una gran capacidad de adaptación.
          Me gusta trabajar en equipo, con personas que me dan la oportunidad de
          aprender y mejorar.
          Aficionado a la ciencia ficción, actividades al aire libre, viajes, andar en bicicleta,
          y a la fotografía.
          Estoy en busca de una empresa donde pueda desarrollarme y mejorar mis habilidades, y juntos poder crecer.

        </p>
      <div className='contact'>
        <div>
          <h2 className='about_h2'>Contacto</h2>
          <p>
            <span>Luis Julio</span>
            <span>Santiago de Chile</span>
            <span> +56-996536109</span>
            <span>antonio.saurith@gmail.com</span>
          </p>
        </div>
        <div className='download'>
          <button><FaDownload/><a target="blank" href="https://drive.google.com/file/d/1402YmOPHEVupk4BN7WlEXO27xmuYKwSn/view?usp=sharing">Descargar CV</a></button>
          
        </div>
      </div>
      </div>
    </div>
        </section>;
};

export default About;
