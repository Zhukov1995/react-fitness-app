import React from 'react';
import NavBar from './nav-bar/nav-bar';
import './navigation.css';
import image from './logo.png';
import { animateScroll as scroll } from "react-scroll";


const Navigation = ({ menuActive, setMenuActive, items }) => {
    const body = document.querySelector('body');
    if (menuActive) {
        body.style.overflow = 'hidden';
        body.style.paddingRight = '20px'
    } else {
        body.style.overflow = '';
        body.style.paddingRight = '0px'
    }

    const goTop = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <nav>
                <div className='logo' onClick={() => goTop()}>
                    <img src={image} className='logo_img' alt='logo' />
                    <h3 className='logo_title'>Территория здоровья</h3>
                </div>
                <div className='btn-burger' onClick={() => setMenuActive(!menuActive)} >
                    <span></span>
                </div>
            </nav>
            <NavBar active={menuActive} setActive={setMenuActive} header='Меню' items={items} />
        </>
    )
}

export default Navigation;