import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import OrderForm from '../../Components/OrderForm/OrderForm';
import SidebarHeader from '../../Components/SidebarHeader/SidebarHeader';
import SideNavbar from '../../Components/SideNavbar/SideNavbar';

const Order = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const {serviceId} = useParams()
    console.log(userInfo)


    return (
        <div className = ''>
            <SidebarHeader />
            <div className = 'row'>
            <div className="col-2">
                <div>
                    <SideNavbar serviceId = {serviceId} />
                </div>
            </div>
            <div className="col-sm-10">
                <div>
                    <OrderForm taskName = {userInfo.taskName} />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Order;