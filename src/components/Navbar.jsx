import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    }
    else{
        setButton(true);
    }
  }

  // useEffect renders the button component only once
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                GENSHIN <i className="fa-solid fa-crown"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/regions' className='nav-links' onClick={closeMobileMenu}>
                        Regions
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/characters' className='nav-links' onClick={closeMobileMenu}>
                        Characters
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle={'btn--outline'}>SIGN UP</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
