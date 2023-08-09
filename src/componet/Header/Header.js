import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <ul className='header'>
            <a href="/shop">Shop</a>
            <a href="/reviw">Reviw</a>
            <a href="/mange">Management</a>
            </ul>
        </div>
        
       
    );
};

export default Header;