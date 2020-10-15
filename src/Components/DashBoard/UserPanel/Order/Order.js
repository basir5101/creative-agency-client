import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Heading from '../../Heading/Heading';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)

    const [order, setOrder] = useState({})


    
    const handleBlur = (e) =>{
        const newOrder = {...order}
        newOrder[e.target.name] = e.target.value;
        newOrder.service = loggedInUser.service;
        newOrder.picture = loggedInUser.picture;
        setOrder(newOrder)
        console.log(order)
    }


    const handleSubmitOrder = (e) => {
        
        fetch('https://whispering-beyond-14007.herokuapp.com/order', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(result =>{
            console.log(result)
        })

         
        e.preventDefault()
    }

    return (
            <div>
                <Heading/>
                <div className = 'row'>
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className = 'col-md-9'>
                    <form className = 'jumbotron' onSubmit = {handleSubmitOrder} >
                        <div className="form-group">
                            <input onBlur = {handleBlur} type="text" name = 'name' className="form-control" placeholder="Your Name / company's name" required/>
                        </div>
                        <div className="form-group">
                            <input onBlur = {handleBlur} type="text" name = 'email' className="form-control" placeholder= {loggedInUser.email} required/>
                        </div>
                        <div className="form-group">                           
                            <input type="text" name = 'service' className="form-control" defaultValue = {loggedInUser.service} />
                        </div>
                        <div className="form-group">
                            <textarea onBlur = {handleBlur} type="text" name = 'description' placeholder = 'Project Details' className="form-control"  rows="3" required></textarea>
                        </div>
                        <div className="form-group">
                            <input onBlur = {handleBlur} name = 'price' type="text" className="form-control" placeholder="price" required/>
                        </div>
                        <input type = 'submit' className="btn btn-dark p-3" value = 'submit'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;