import { useRef } from 'react';
import {FaBars, FaTimes, FaReact} from 'react-icons/fa';
import {BsBook} from 'react-icons/bs';
import {NavLink} from 'react-router-dom';

export function Header () {
  const navRef = useRef();
  const showNavBar = ( ) => { navRef.current.classList.toggle('responsive_nav')}

  return (
    <header>
      <h3><BsBook className='icono'/></h3>
      <nav ref={navRef}>
        <NavLink 
          to="./"
          className={( {isActive} ) => isActive ? 'link link--active' : 'link'}
        >
          Inico
        </NavLink>
        <NavLink 
          to="./donaciones"
          className={( {isActive} ) => isActive ? 'link link--active' : 'link'}
        >
          Donaciones
        </NavLink>
        <NavLink 
          to="./novelas-activas"
          className={( {isActive} ) => isActive ? 'link link--active' : 'link'}
        >
          Novelas Activas</NavLink>
        <NavLink 
          to="./"
          className={( {isActive} ) => isActive ? 'link link--active' : 'link'}
        >
          Novelas Finalizadas
        </NavLink>
        <NavLink 
          to="./"
          className={( {isActive} ) => isActive ? 'link link--active' : 'link'}
        >
          Esternos del Mes
        </NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  )
}