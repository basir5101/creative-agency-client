import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png'

const Heading = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext)
    return (
        <header>
            <div className="d-flex justify-content-between">
                <Link className="navbar-brand pl-4" to="/">
                    <img className = 'pl-4' style = {{maxHeight: '40px'}} src= {logo} alt=""/>
                </Link>
                <h5 className = 'pr-4'> {loggedInUser.name} </h5>
            </div>
        </header>
    );
};

export default Heading;