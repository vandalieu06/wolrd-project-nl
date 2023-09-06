import { useRef } from 'react';
import {FaBars, FaTimes, FaReact} from 'react-icons/fa';

export function Header (props) {
    const navRef = useRef();
    const showNavBar = ( ) => {
        navRef.current.classList.toggle('responsive_nav')
    }

    return (
        <header>
            <h3><FaReact className='icono'/></h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My Work</a>
                <a href="/#">Bloj</a>
                <a href="/#">About me</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaBars />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaTimes />
            </button>
        </header>
    )
}