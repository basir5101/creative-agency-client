import React from 'react';
import frame from '../../../images/Frame.png'

const HeaderMain = () => {
    return (
        <section>
            <div className="row p-4 justify-content-center ">
                <div className="col-md-5 d-flex align-items-center">
                    <div>
                        <h2>Let's Grow Your Brand To The Next Level</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, labore?</p>
                        <button className="btn btn-dark">Hire me</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className = 'w-100' src= {frame} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;