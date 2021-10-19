import React from 'react';
import './nav-bar.css';
import shortid from 'shortid';


const NavBar = ({header,items,active,setActive}) => {


    return (
        <div className = {active? 'nav-bar-active' : 'nav-bar'} >
            <div className = 'blur'>
                <div className = 'nav-bar-content' >
                    <div className = 'nav-bar-header'>{header}</div>
                    <ul className = 'nav-bar-list'>
                        {items.map(items => 
                            <li key = {shortid.generate()}>
                                <a href = {items.href}>{items.value}</a>
                            </li>    
                        )}
                    </ul>
                    <p>Регистрирусь на данном сервисе,вам открывается возможность хранить историю своих расчетов ,а так же вы можете получать индивидуальные советы.</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar;