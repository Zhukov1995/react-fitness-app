import React, { useState } from 'react';
import './nav-bar-create.css';



const NavBarCreate = () => {

    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [showPass, setShowPass] = useState(false);


    // Получение значений и проверка паролей на совпадение
    const getPasswordValue = (e) => {
        setPassword(e.target.value);

        const elementPassword = document.querySelector('.createPassword'),
            elementRepeatPassword = document.querySelector('.repeatPassword');

        if (e.target.value === repeatPassword) {
            elementPassword.style.border = '2px solid lightgreen';
            elementRepeatPassword.style.border = '2px solid lightgreen';
        } else {
            elementPassword.style.border = '';
            elementRepeatPassword.style.border = '';
        }
    }

    const getRepeatValue = (e) => {
        setRepeatPassword(e.target.value);
        console.log(repeatPassword)

        const elementPassword = document.querySelector('.createPassword'),
            elementRepeatPassword = document.querySelector('.repeatPassword');

        if (e.target.value === password) {
            elementPassword.style.border = '2px solid lightgreen';
            elementRepeatPassword.style.border = '2px solid lightgreen';

        } else if (e.target.value !== '' && e.target.value !== repeatPassword) {
            elementPassword.style.border = '1px solid red';
            elementRepeatPassword.style.border = '1px solid red';
        } else {
            elementPassword.style.border = '';
            elementRepeatPassword.style.border = '';
        }
    }
    // Показ паролей через checkbox
    const getValueCheckbox = () => {
        setShowPass(!showPass)
        console.log(showPass)
    }


    const body = document.querySelector('body');
    if (Boolean(NavBarCreate)) {
        body.style.overflow = 'hidden';
        body.style.paddingRight = '0px';
    } else {
        body.style.overflow = '';
    }
    return (
        <form>
            <h2 className='titleCreate'>Регистрация</h2>
            <div className='formCreate'>
                <p>Ваша почта:</p>
                <input type='email'
                    className='createLogin'
                    placeholder='test@outlook.com' />
                <p>Придумайте пароль:</p>
                <input type={showPass ? 'text' : 'password'}
                    className='createPassword'
                    placeholder='*********'
                    onChange={getPasswordValue}
                />
                <p>Повторите пароль:</p>
                <input type={showPass ? 'text' : 'password'}
                    className='repeatPassword'
                    placeholder='*********'
                    onChange={getRepeatValue} />
                <input type='checkbox'
                    id='showPassword'
                    onClick={getValueCheckbox}
                    defaultChecked={showPass ? true : false}
                />
                <label htmlFor='showPassword'>Показать пароль</label>
                <br />
                <input type='submit'
                    name="submit"
                    value='зарегистрироваться'
                    className="btn-create-submit"
                />
                <input type='reset'
                    name='reset'
                    value='очистить форму'
                    className='btn-create-reset'
                />
            </div>

        </form>
    )
}

export default NavBarCreate;