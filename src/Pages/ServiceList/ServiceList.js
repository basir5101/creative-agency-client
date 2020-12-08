import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServiceListAdmin from '../../Components/ServiceListAdmin/ServiceListAdmin';
import OrderedService from '../../Components/ServiceStatus/OrderedService';
import SidebarHeader from '../../Components/SidebarHeader/SidebarHeader';
import SideNavbar from '../../Components/SideNavbar/SideNavbar';

const ServiceList = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState (true);
    const [orderList, setOrderList] = useState(null)
    const email = 'basir.bsmrstu@gmail.com'

    useEffect(() =>{
        fetch(`https://damp-fjord-76287.herokuapp.com/customerOrders/${userInfo.email}`)
        .then(res => res.json())
        .then(data => setOrderList(data))
    } , [])

    
    return (
        <section>
            <SidebarHeader />
            <div className="row">
                <div className="col-sm-2">
                    <SideNavbar />
                </div>
                {
                    isAdmin ? 
                    <div className="col-sm-9">
                    <ServiceListAdmin orderList = {orderList} />
                    </div>
                    :
                    <div className="col-sm-8">
                    <OrderedService orderList = {orderList}/>
                    </div>
                }
            </div>
        </section>
    );
};

export default ServiceList;