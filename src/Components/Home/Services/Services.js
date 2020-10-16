import React from 'react';
import ServiceCard from './ServiceCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Services = () => {

    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect( () =>{
        fetch('https://whispering-beyond-14007.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            setLoading(false);
            console.log(data)
        })
    },[])

    return (
        <section className = 'container'>
            <div className="row">
                {
                    loading &&  <ClipLoader
                        style = {{
                            display: 'block',
                            marginLeft: '40%',
                            borderColor: 'red',
                        }}
                        size={150}
                        color={"#123abc"}
                    />
                }
                {
                    services.map(service => <ServiceCard key = {service._id} service = {service} />)
                }
            </div>
        </section>
    );
};

export default Services;