import React from 'react';
import './nav-bar-about.css';

const NavBarAbout = () => {

    return (
        <div className = 'navBarAbout'>
            <h2 className = 'titleAbout'>О нас</h2>
            <div className="descriptionAbout">
                <p>Автор и редактор сервиса «Калькулятор калорий» Роман.</p>
                <p>По всем вопросам и предложениям пишите на почту <a href='mailto:ro.zhuckov2013@yandex.ru'>ro.zhuckov2013@yandex.ru</a>, Роман.</p>
                <p>или по телефону: <a href='tel:+79776499526'>+7 (977) 649-95-26</a></p><br />
            </div>
        </div>
    )
}

export default NavBarAbout ;