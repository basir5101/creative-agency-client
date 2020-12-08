import React from 'react';

const OrderedService = () => {
    return (
        <div className = 'row'>
            <div className="col-sm-6 ">
                <div className = 'p-4 border mx-2'>
                    <div className = 'd-flex justify-content-between'>
                        <p>photo</p>
                        <button className = 'border  px-2 text-danger'>pending</button>
                    </div>
                    <h3>Web & Mobile Design</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, non.</p>
                </div>
            </div>
            <div className="col-sm-6 border">
                <div className = 'p-4'>
                    <div className = 'd-flex justify-content-between'>
                        <p>photo</p>
                        <button className = 'border  px-2 text-danger'>pending</button>
                    </div>
                    <h3>Web & Mobile Design</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, non.</p>
                </div>
            </div>
        </div>
    );
};

export default OrderedService;