import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Loader from '../Loader/Loader';

const AddReview = () => {
    const history = useHistory()
    const [loader, setLoader] = useState(false)
    const [file, setFile] = useState (null)
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data =>{
        setLoader(true);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('position', data.position)
        formData.append('file', file);

        fetch('https://damp-fjord-76287.herokuapp.com/insertFeedback', {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const handleFileChange = (e) =>{
        setFile(e.target.files[0])
    }

    return (
        <div>
             {
                 loader ? <Loader /> : 
                 <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                        <input placeholder = 'your name'  className = 'form-control' name="name" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}
                </div>
                <div className="form-group">
                        <input placeholder = 'your company / position'  className = 'form-control' name="position" ref={register({ required: true })} />
                        {errors.position && <span>This field is required</span>}
                </div>
                    <div className="form-group">
                        <textarea placeholder = 'description'  className = 'form-control' name="description" ref={register({ required: true })} />
                        {errors.description && <span>This field is required</span>}
                    </div>
                    
                    <input type="file" onChange = {handleFileChange} name="file" id="file"  className = 'file-upload' ref = {register({required: true})} />
                    <input className = 'btn btn-success' type="submit" />
                </form>
             }
        </div>
    );
};

export default AddReview;