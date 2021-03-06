import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Loader from '../Loader/Loader';

const OrderForm = ({taskName}) => {
    const history = useHistory ()
    const { register, handleSubmit, errors } = useForm();
    const [loader, setLoader] = useState(false)

    const onSubmit = data => {
        setLoader(true)
            fetch('https://damp-fjord-76287.herokuapp.com/placeOrder', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(data => {
                setLoader(true)
                history.replace('/service-list')
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleFileChange = (e) => {
    }


    return (
        <div className='row p-md-5'>
            {
                loader && <Loader />
            }
            <form onSubmit={handleSubmit(onSubmit)} className='row d-flex'>
            <div className='col-md-7'>
                    <label htmlFor='name'>Name:</label>
                    <input className='form-control mb-1' type="text" placeholder= 'name' name="name" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.taskName && '* This field is required'}</p>
                </div>
                <div className='col-md-7'>
                    <label htmlFor='name'>Email: </label>
                    <input className='form-control mb-1' type="text" placeholder = 'email' name="email" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.taskName && '* This field is required'}</p>
                </div>
                <div className='col-md-7'>
                    <label htmlFor='name'>Service Title:</label>
                    <input className='form-control mb-1' type="text" defaultValue={taskName} name="taskName" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.taskName && '* This field is required'}</p>
                </div>

                <div className='col-md-7'>
                    <div className="form-group mt-3">
                        <label htmlFor="Textarea">Description:</label>
                        <textarea name="description" placeholder="Enter Description" className="form-control" id="Textarea" rows="4" ref={register({ required: true })} ></textarea>
                        <p className='text-danger mb-0'>{errors.description && '* This field is required'}</p>
                    </div>
                </div>
                <div className='col-md-7'>
                    <label htmlFor='name'>Price</label>
                    <input className='form-control mb-1' type="text" placeholder="price" name="price" ref={register({ required: true, maxLength: 60 })} />
                    <p className='text-danger mb-0'>{errors.price && '* This field is required'}</p>
                </div>

                <div className='col-md-3' style={{ marginTop: '30px' }}>
                    <div className="button-wrapper">
                        <input type="file" onChange={handleFileChange} name="upload" id="upload" className="upload-box" placeholder="Upload File"/>
                        <p className='text-danger mb-0'>{errors.upload && '* This field is required'}</p>
                    </div>
                </div>
                <div className='col-md-3 mb-3 align-self-end'>
                    <input className='btn btn-success btn-block' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default OrderForm;