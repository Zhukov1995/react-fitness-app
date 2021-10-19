import React from 'react';
import './nav-bar-login.css';

const NavBarLogin = () => {
    const body = document.querySelector('body');
    if (Boolean(NavBarLogin)) {
        body.style.overflow = 'hidden';
        body.style.paddingRight = '0px';
    } else {
        body.style.overflow = '';
    }
    return (
        <form>
            <h2 className='titleLogin'>Вход в личный кабинет</h2>
            <div className='formLogin'>
                <p>Логин:</p>
                <input type='email' className='inputLogin' placeholder='адрес эл. почты' />
                <p>Пароль:</p>
                <input type='password' className='inputPass' placeholder='**********' />
                <button type='submit' className='btnLogin'>Войти</button>
            </div>
        </form>
    )
}

export default NavBarLogin;