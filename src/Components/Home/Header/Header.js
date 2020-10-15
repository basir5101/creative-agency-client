import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className = 'header pb-5'>
                <Navbar/>
                <HeaderMain/>
            </div>
        </header>
    );
};

export default Header;