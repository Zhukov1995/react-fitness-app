import React from 'react';
import './nav-bar.css';
import shortid from 'shortid';


const NavBar = ({header,navItems,active,setActive}) => {


    return (
        <div className = {active? 'nav-bar-active' : 'nav-bar'} >
            <div className = 'blur'>
                <div className = 'nav-bar-content' >
                    <div className = 'nav-bar-header'>{header}</div>
                    <ul className = 'nav-bar-list'>
                        {navItems.map(items => 
                            <li key = {shortid.generate()}>
                                <a href= {items.href}>{items.value}</a>
                            </li>    
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;