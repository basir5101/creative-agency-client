import React from 'react';
import Loader from '../Loader/Loader';

const ServiceListAdmin = ({orderList}) => {
    return (
        <div className = ''>
            {!orderList  && <Loader />}
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className = 'text-muted' scope="col">Name</th>
                        <th className = 'text-muted' scope="col">Email ID</th>
                        <th className = 'text-muted' scope="col">Service</th>
                        <th className = 'text-muted' scope="col">Project Details</th>
                        <th className = 'text-muted' scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList && 
                        orderList.map(order => {
                        return    <tr key = {order._id}>
                            <td> {order.name} </td>
                            <td> {order.email} </td>
                            <td> {order.service} </td>
                            <td>{order.description}</td>
                            <td>
                                <select >
                                    <option >pending</option>
                                    <option >on going</option>
                                    <option >done</option>
                                </select>
                            </td>
                        </tr>
                        })
                        
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServiceListAdmin;