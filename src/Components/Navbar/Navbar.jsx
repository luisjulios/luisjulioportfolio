import './Navbar.css';
const Navbar = () => {
  return <nav className="navbar">
    <ul className="navbar_ul">
      <li className="navbar_ul_li"><a className="li_link" href="#home">Inicio</a></li>
      <li className="navbar_ul_li"><a className="li_link" href="#about">Sobre mí</a></li>
      <li className="navbar_ul_li"><a className="li_link" href="#works">Proyectos realizados</a></li>
    </ul>
  </nav>;
};

export default Navbar;
