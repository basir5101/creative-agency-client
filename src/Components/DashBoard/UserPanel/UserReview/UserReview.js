import React from 'react';
import { useState } from 'react';
import Heading from '../../Heading/Heading';
import Sidebar from '../Sidebar/Sidebar';

const UserReview = () => {

    const [review, setReview] = useState({})
    const [file, setFile] = useState(null);

    const handleBlur = (e) =>{
        const newReview = {...review}
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleFormSubmit = (e) =>{
        const formData = new FormData()
        console.log(review);
        formData.append('file', file);
        formData.append('name', review.name);
        formData.append('Designation', review.Designation);
        formData.append('description', review.description);

        fetch('https://whispering-beyond-14007.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(true){
                    const newReview = {...review};
                    newReview.status = 'success';
                    setReview(newReview);
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
                            review.status && 
                            <h3 className="text-center text-success m-5">Thanks for review us</h3>
                        }
                    <form onSubmit = {handleFormSubmit} className = 'jumbotron' >
                        <div className="form-group">
                            <input onBlur = {handleBlur} type="text" className="form-control" name = 'name' placeholder="Your Name" required/>
                        </div>
                        <div className="form-group">
                            <input onBlur = {handleBlur} type="text" className="form-control" name = 'Designation' placeholder="Company's Name Designation" required/>
                        </div>
                        <div className="form-group">
                            <textarea onBlur = {handleBlur}type="text" name = 'description' placeholder = 'Description' class="form-control"  rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button className="btn btn-dark p-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserReview;