import React from 'react';
import { useState } from 'react';
import Heading from '../../Heading/Heading';
import Sidebar from '../../UserPanel/Sidebar/Sidebar';

const AddService = () => {

    const [service, setService] = useState({})
    const [file, setFile] = useState(null);


    const handleBlur = (e) =>{
        const newService = {...service};
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleFormSubmit = (e) =>{
        const formData = new FormData()
        console.log(service);
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);
        
        fetch('https://whispering-beyond-14007.herokuapp.com/addService', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(true){
                    const newService = {...service};
                    newService.status = 'success';
                    setService(newService);
                }
            })
            .catch(error => {
                console.error(error)
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
                        {
                            service.status && 
                            <h3 className="text-center text-success m-5">New Service Added</h3>
                        }
                    <form onSubmit = {handleFormSubmit} className = 'jumbotron' >
                        <div className="form-group">
                            <input onBlur = {handleBlur} name = 'title' type="text" className="form-control" placeholder="Your Name" required/>
                        </div>
                        <div className="form-group">
                            <textarea onBlur = {handleBlur} name = 'description' type="text" placeholder = 'Description' className="form-control"  rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button className="btn btn-success p-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;