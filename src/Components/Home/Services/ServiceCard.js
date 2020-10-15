import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
    
    const handleClick = (service, picture) =>{
        const newUser = {...loggedInUser};
        newUser.service = service;
        newUser.picture = picture;
        SetLoggedInUser(newUser);
    }
   
    return (
            <div className = 'col-md-4 service-card'>
                <Link onClick = {() => handleClick(service.title, service.picture)} className = 'nav-link text-dark' to = '/dashboard'>
                <div className="p-3 text-center">
                    <img className = 'w-25' src= {service.picture} alt=""/>
                    <h4>{service.title}</h4>
                    <p> {service.description} </p>
                </div>  
               </Link>
            </div>
    );
};

export default ServiceCard;