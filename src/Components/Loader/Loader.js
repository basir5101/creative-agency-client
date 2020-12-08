import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div className = 'd-flex justify-content-center'>
            <div className="lds-dual-ring"> <strong>Loading...</strong> </div>
        </div>
    );
};

export default Loader;