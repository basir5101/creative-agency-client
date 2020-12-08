import React from 'react';
import slack from '../../images/slack.png';
import google from '../../images/google.png';
import uber from '../../images/uber.png';
import netflix from '../../images/netflix.png'; 
import airbnb from '../../images/airbnb.png';
import './Brands.css';

const Brands = () => {
    return (
        <section>
            <div className="row brands justify-content-center">
                <img src={slack} alt=""/>
                <img src={google} alt=""/>
                <img src={uber} alt=""/>
                <img src={netflix} alt=""/>
                <img src={airbnb} alt=""/>
            </div>
        </section>
    );
};

export default Brands;