import React from 'react';
import Navbar from '../Navbar/Navbar';
import frame from '../../images/Frame.png';
import  './Header.css';

const Header = () => {
    return (
        <header className = 'header bg-warning'>
            <Navbar />
            <div className = 'container'>
                <div className="row py-5">
                    <div className="col-md-5 d-flex align-items-center">
                        <div>
                            <h1>Let's Grow Your Brand To The Next Level</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia earum, obcaecati fugit doloremque in unde architecto sint possimus reprehenderit, totam maiores sed consectetur atque. Itaque similique earum fuga consequuntur asperiores!</p>
                            <button className="btn btn-dark text-white px-4">Hire Us</button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div>
                            <img className = 'w-100' src = {frame} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;