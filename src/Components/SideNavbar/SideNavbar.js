import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ServiceList from '../../Pages/ServiceList/ServiceList';
import './SideNavbar.css';

const SideNavbar = ({serviceId}) => {

    return (
        <div className = 'side-navbar'>
            <nav className=" navbar navbar-light">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <NavLink className="" to={`/order/${serviceId}`}>Order</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="" to="/service-list">Service List</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="" to="/review">Review</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="" to="/add-service">Add Service</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="" to="/add-admin">Make Admin</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNavbar;