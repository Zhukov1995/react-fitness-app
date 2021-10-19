import React from 'react';
import './app-header.css';
import { animateScroll as scroll } from "react-scroll";

const AppHeader = () => {
    console.log(scroll)
    const AnimateScroll = () => {
        const body = document.querySelector('body');
        if (body.style.overflow !== 'hidden') {
            scroll.scrollTo(1200);
        }
    }

    return (
        <header>
            <div className='title'>
                <h1>Самый точный калькулятор Калорий</h1>
                <h3>Бесплатный калькулятор калорий с учетом суточной активности и физической нагрузки</h3>
            </div>

            <div className="arrow" onClick={() => AnimateScroll()}></div>

        </header>
    )
}

export default AppHeader;