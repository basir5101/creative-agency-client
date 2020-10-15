import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../../App';
import Heading from '../../Heading/Heading';
import Sidebar from '../Sidebar/Sidebar';

const UserStatus = () => {

    const [loggedInUser] = useContext(UserContext)

    const [orders, setOrders] = useState([])

   
    useEffect( () =>{
        fetch(`https://whispering-beyond-14007.herokuapp.com/orderList/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data);
            console.log(data)
        })
    },[loggedInUser.email])

    

    return (
        <div>
            <Heading/>
            <div className = 'row'>
                <div className="col-md-3">
                <Sidebar/>
                </div>
                <div className="col-md-9">
                    <div className = 'row jumbotron'>
                        {
                            orders.map(order =>{
                                return <div className = 'col-md-5'>
                                        <div className="p-3 text-center">
                                        <img className = 'w-25' src= {order.picture} alt=""/>
                                        <h4>{order.service}</h4>
                                        <p> {order.description} </p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserStatus;