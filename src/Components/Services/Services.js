import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import serviced from '../../images/icons/service5.png'
import Loader from '../Loader/Loader';

const Services = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [services, setServices] = useState(null);
    const [loader, setLoader] = useState(false)
    useEffect( 
        () =>{
            fetch('https://damp-fjord-76287.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data)
                setLoader(true);
            })
        }
        ,[])

    const handleClick = data =>{
        const newOrder = {...userInfo};
        newOrder.taskName = data.taskName;
        newOrder.image = data.src;
        setUserInfo(newOrder);
    }

    return (
        <section className = 'my-5 container'>
            <h2 className="text-center my-5">Provide awesome<span className="text-success"> services</span></h2>
            <div className="row">
                {
                    services && services.map(service =>{
                      return  <div key = {service._id} className="col-md-4">
                          <Link style = {{textDecoration: 'none'}} onClick = {() => handleClick(service)} to = {`/order/${service._id}`}>
                            <div className = 'p-4 mb-4 shadow'>
                                <div className="text-center">
                                    <img className = 'w-25 m-3' src={`data:image/png;base64, ${service.src}`} alt=""/>
                                    <h4> {service.taskName} </h4>
                                    <p className="text-muted">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                      </Link>
                        </div>
                    })
                }
            </div>
            {
                !loader && <Loader />
            }
        </section>
    );
};

export default Services;