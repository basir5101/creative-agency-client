import React from 'react';
import { useState } from 'react';
import Heading from '../../Heading/Heading';
import Sidebar from '../../UserPanel/Sidebar/Sidebar';

const AddAdmin = () => {
    const [admin, setAdmin] = useState({})

    const handleBlur = (e) =>{
        const newAdmin = {...admin};
        newAdmin.email = e.target.value;
        setAdmin(newAdmin);
    }
    const handleFormSubmit = (e) => {
        fetch('https://whispering-beyond-14007.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(admin)
        })
        .then(res =>res.json())
        .then(result =>{
            console.log(result)
        })
        e.preventDefault();
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
                            <input onBlur = {handleBlur}name = 'email' type="text" className="form-control" placeholder="Your email" required/>
                        </div>
                        <button className="btn btn-success p-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;