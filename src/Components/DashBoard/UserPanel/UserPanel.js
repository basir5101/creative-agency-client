import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import Heading from '../Heading/Heading';
import Order from './Order/Order';
import Sidebar from './Sidebar/Sidebar';

const UserPanel = () => {
  

    return (
        <section>
            <Heading/>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-sm-9">
                    <Order />
                </div>
            </div>
        </section>
    );
};

export default UserPanel;