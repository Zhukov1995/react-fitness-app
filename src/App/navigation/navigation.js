import React from 'react';
import NavBar from './nav-bar/nav-bar';
import './navigation.css';
import image from './logo.png';
import { animateScroll as scroll } from "react-scroll";


const Navigation = ({ menuActive, setMenuActive, navItems }) => {
    const body = document.querySelector('body');
    if (menuActive) {
        body.style.overflow = 'hidden';
        body.style.paddingRight = '20px'
    } else {
        body.style.overflow = '';
        body.style.paddingRight = '0px'
    }

    return (
        <>
            <nav>
                <div className='logo'>
                    <img src={image} className='logo_img' alt='logo' />
                    <h3 className='logo_title'>территория здоровья</h3>
                </div>
                <div className='btn-burger' onClick={() => setMenuActive(!menuActive)} >
                    <span></span>
                </div>
            </nav>
            <NavBar active={menuActive} setActive={setMenuActive} header='Меню' navItems={navItems} />
        </>
    )
}

export default Navigation;