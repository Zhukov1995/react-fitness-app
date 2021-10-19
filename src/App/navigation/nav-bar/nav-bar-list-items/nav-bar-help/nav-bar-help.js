import React from 'react';
import './nav-bar-help.css';

const NavBarHelp = () => {
    const body = document.querySelector('body');
    if (Boolean(NavBarHelp)) {
        body.style.overflow = 'hidden';
        body.style.paddingRight = '0px';
    } else {
        body.style.overflow = '';
    }
    return (
        <div className = 'navBarHelp'>
            <h2 className = 'titleHelp'>Поддержка</h2>
            <div className="descriptionHelp">
                <p>Если у вас есть какие то вопросы или предложения можете обратиться</p>
                <p>По телефону: <a href='tel:+79776499526'>+7 (977) 649-95-26</a></p><br />
                <p>Почта: <a href='mailto:ro.zhuckov2013@yandex.ru'>ro.zhuckov2013@yandex.ru</a></p>
            </div>
        </div>
    )
}

export default NavBarHelp ;