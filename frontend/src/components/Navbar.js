import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-logo' onClick={closeMobileMenu}>
          Commath
          <i class='fab fa-firstdraft' />
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Basic Computing
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/page2' className='nav-links'  onClick={closeMobileMenu}>
            Linear Equations
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/page3' className='nav-links' onClick={closeMobileMenu}>
            Interpolation
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/page4' className='nav-links' onClick={closeMobileMenu}>
            Differentiation
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/page5' className='nav-links' onClick={closeMobileMenu}>
            Integration
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/page6' className='nav-links' onClick={closeMobileMenu}>
            Root-finding
            </Link>
          </li>
            
        </ul>
      
      </nav>
      
    </>
  );
}

export default Navbar;
