import React from 'react';
import ServiceCard from './ServiceCard';
import { useEffect } from 'react';
import { useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect( () =>{
        fetch('https://whispering-beyond-14007.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            console.log(data)
        })
    },[])

    return (
        <section className = 'container'>
            <div className="row">
                {
                    services.map(service => <ServiceCard key = {service._id} service = {service} />)
                }
            </div>
        </section>
    );
};

export default Services;