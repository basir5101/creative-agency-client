import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const SidebarHeader = () => {
    return (
        <header className = 'p-4'>
            <div className="row">
                <div className="col-sm-2">
                    <Link to = '/'><img className = 'w-75' src={logo}  alt=""/></Link>
                </div>
                <div className="col-sm-10">
                    <div className = 'd-flex justify-content-between mx-4 mb-5'>
                        <h5>Order</h5>
                        <h5>Abdul Basir</h5>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default SidebarHeader;