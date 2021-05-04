import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuItemsRef = useRef(null);
  const menuLineRef = useRef(null);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);

      setTimeout(() => {
        //menuLineRef.current.style.opacity = 1;
        menuItemsRef.current.style.display = 'block';
        setTimeout(() => {
          menuItemsRef.current.style.opacity = 1;
        }, 100);
      }, 500);
    }
    else {

      menuItemsRef.current.style.opacity = 0;

      setTimeout(() => {
        menuItemsRef.current.style.display = 'none';
        //menuLineRef.current.style.opacity = 0;
        setMenuOpen(false);
      }, 250);

    }
  }

  return (
    <React.Fragment>
      <div className="menu menu-desktop">
        <div className="menu-items-container">
          <ul>
            <li><a href="https://komunita.gwei.cz/"> O Komunitě </a></li>
            <li><a href="https://forum.gwei.cz/" target="_blank"> Fórum </a></li>
            <li><b> · </b></li>
            <li><a href="https://prirucka.gwei.cz/" target="_blank"> Příručka </a></li>
            <li><a href="https://hackmd.io/@gweicz/defi-toolkit" target="_blank"> DeFi Toolkit </a></li>
            <li><a href="https://czsk-scena.gwei.cz/" target="_blank"> CZ/SK Komunita </a></li>
            <li><a href="https://bankless.cz" target="_blank"> Bankless.cz </a></li>
          </ul>
        </div>
      </div>

      <div className={!menuOpen ? 'menu menu-mobile' : 'menu menu-mobile fullheight-menu'}>
        <span className="menu-text" onClick={toggleMenu}>MΞNU</span>

        <hr ref={menuLineRef} className="menu-line" />

        <div ref={menuItemsRef} style={{ opacity: 0, display: 'none' }} className="menu-items-container">
          <ul>
            <li><a href="#"> About </a></li>
            <li><a href="https://forum.gwei.cz/" target="_blank"> Forum </a></li>
            <li><a href="https://blog.gwei.cz/" target="_blank"> Blog </a></li>
            <li><b> · </b></li>
            <li><a href="https://gwei.cz/prirucka/" target="_blank"> DeFi Wiki </a></li>
            <li><a href="https://kurzy.gwei.cz/" target="_blank"> Kurzy </a></li>
            <li><a href="https://knihy.gwei.cz/" target="_blank"> Knihy </a></li>
            <li><a href="https://czsk-scena.gwei.cz/" target="_blank"> CZ/SK Komunita </a></li>
            <li><a href="#dao"> DAO </a></li>
          </ul>

          <div className="close-wrapper" onClick={toggleMenu}>
            <FontAwesomeIcon icon='times' />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
