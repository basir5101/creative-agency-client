import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Heading from '../../Heading/Heading';
import Sidebar from '../../UserPanel/Sidebar/Sidebar';

const OrderList = () => {
   const [orders, setOrders] = useState([])

    useEffect( () =>{
        fetch('https://whispering-beyond-14007.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => {
            setOrders(data);
            console.log(data)
        })
    },[])
   return (
      <div>
          <Heading/>
          <div className = 'row'>
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-9">
            <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Services</th>
                        <th scope="col">Project Details</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order =>{
                           return <tbody>
                                <tr>
                                    <td> {order.name} </td>
                                    <td> {order.email} </td>
                                    <td> {order.service} </td>
                                    <td> {order.description} </td>
                                    <td className = 'text-primary'>Pending..</td>
                                </tr>
                            </tbody>
                        })
                    }
                </table>
          </div>
      </div>
      </div>
   );
};

export default OrderList;