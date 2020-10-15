import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-4.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const WorkExample = () => {
   
    return (
        <div className="carousel-wrapper bg-dark mt-5">
        <div className="row">
            <div className="text-center text-white justify-content-center">
                <h3 className = 'm-5 '>Here are some of <span className = 'text-success'>our work</span> </h3>
                <Carousel style = {{margin: '200px'}} infiniteLoop  autoPlay>
                    <div >
                        <img  className = 'w-100' src= {carousel1} alt = '' />
                        <p className="legend">design 1</p>
                    </div>
                    <div>
                        <img  className = 'w-100' src= {carousel2} alt="" />
                        <p className="legend">design 2</p>
                    </div>
                    <div>
                        <img  className = 'w-100' src= {carousel3} alt=""/>
                        <p className="legend">design 3</p>
                    </div>
                </Carousel>
            </div>
            
        </div>
        </div>
    );
};

export default WorkExample;