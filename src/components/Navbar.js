import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        
    }, []);

    window.addEventListener('resize', showButton);
    return (
       <>
       <nav className="navbar">
           <div className="navbar-container">
               <Link to='/' className="navbar-logo">
                   Findtest
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <Link to='/add'  className='nav-links' onClick={closeMobileMenu}>
                            Añadir un examen
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/average'  className='nav-links' onClick={closeMobileMenu}>
                            Mi promedio
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/sign-up'  className='nav-links-mobile' onClick={closeMobileMenu}>
                           Sign Up
                       </Link>
                   </li>
               </ul>
               {button && <Button buttonStyle='btn--outline'  link='/exams'> PARCIALES</Button>}
           </div>
       </nav>
       </>
    )
}

export default Navbar
