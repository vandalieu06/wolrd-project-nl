import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  
  return(
    <footer className="footer">
        <article className="footer__article">
          <h2>Developed by Jhonny Freelancer 2023</h2>  
        </article> 
        <article className="footer__article footer__social">
          <div className="footer__logo">
              <h2>World Project NL</h2>
              <div className="footer__prueba">
                <span className="footer__prueba--any">2016 - 2023</span>
              </div>
          </div>
          <div className="footer__icons">
            <Link to="https://www.facebook.com/profile.php?id=100088203667186" target="_blank" className="footer__icons--link">
              <FaFacebookF className="footer__icons--icon"/>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100082889064950" target="_blank" className="footer__icons--link">
              <FaFacebookF className="footer__icons--icon"/>
            </Link>
            <Link to="https://twitter.com/WorldProject4" target="_blink" className="footer__icons--link">
              <FaTwitter className="footer__icons--icon"/>
            </Link>
          </div>
          <h2></h2>
        </article>
        <article className="footer__article footer__pages">
          <h2>Contenido</h2>
          <menu className="footer__links">
            <li><Link to="/" className="footer__links--link">Inicio</Link></li>
            <li><Link to="/" className="footer__links--link">Donaciones</Link></li>
            <li><Link to="/" className="footer__links--link">Novelas Activas</Link></li>
            <li><Link to="/" className="footer__links--link">Novelas Finalizadas</Link></li>
            <li><Link to="/" className="footer__links--link">Estrenos del Mes</Link></li>
          </menu>
        </article>
    </footer>
  )
}