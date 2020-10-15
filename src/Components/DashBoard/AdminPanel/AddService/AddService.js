import React from 'react';
import { useState } from 'react';
import Heading from '../../Heading/Heading';
import Sidebar from '../../UserPanel/Sidebar/Sidebar';

const AddService = () => {

    const [service, setService] = useState({})

    const handleBlur = (e) =>{
        const newService = {...service};
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    const handleFormSubmit = (e) =>{
        
        fetch('https://whispering-beyond-14007.herokuapp.com/addService', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(service)
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
                <div className="col-md-9">
                    <form onSubmit = {handleFormSubmit} className = 'jumbotron' >
                        <div className="form-group">
                            <input onBlur = {handleBlur} name = 'title' type="text" className="form-control" placeholder="Your Name" required/>
                        </div>
                        <div className="form-group">
                            <textarea onBlur = {handleBlur} name = 'description' type="text" placeholder = 'Description' className="form-control"  rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <input onBlur = {handleBlur} name = 'picture' type="text" className="form-control" placeholder="phot url" required/>
                        </div>
                        <button className="btn btn-success p-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;