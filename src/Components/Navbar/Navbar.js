import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <Link className="navbar-brand" to="/"><img src={logo} className = 'w-25' alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="" to="/order">Order</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="" to="/portfolio">Our Portfolio</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="" to="/team">Our Team</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="" to="/contact">Contact us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to = '/login'><button className="btn btn-dark  text-white px-4">Login</button></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;