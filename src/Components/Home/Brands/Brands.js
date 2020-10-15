import React from 'react';
import slack from '../../../images/slack.png';
import google from '../../../images/google.png';
import uber from '../../../images/uber.png';
import netflix from '../../../images/netflix.png';
import airbnb from '../../../images/airbnb.png';
import './Brands.css';

const Brands = () => {
    return (
        <section>
            <div className="row brands justify-content-center p-4">
                <div className="col-md-2 col-6">
                    <img  src={slack} alt=""/></div>
                <div className="col-md-2 col-6">
                    <img   src={google} alt=""/></div>
                <div className="col-md-2 col-6">
                    <img   src={uber} alt=""/></div>
                <div className="col-md-2 col-6">
                    <img   src={netflix} alt=""/></div>
                <div className="col-md-2 col-6">
                    <img   src={airbnb} alt=""/></div>
            </div>
        </section>
    );
};

export default Brands;