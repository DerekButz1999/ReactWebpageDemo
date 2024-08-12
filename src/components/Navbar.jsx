import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
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
        </div>
    </nav>
    </>
  )
}

export default Navbar
