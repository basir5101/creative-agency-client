import React, { useEffect, useState } from 'react';
import person from '../../images/icons/graphics.png';
import Review from '../../Pages/Review/Review';
import Loader from '../Loader/Loader';
import './Feedback.css';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect( () =>{
        fetch('https://damp-fjord-76287.herokuapp.com/feedbacks')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setReviews(data);
            setLoading(false)
        })
    } ,[])
    return (
        <section className = 'container feedback'>
            <h2 className="text-center my-5">Clients<span className="text-success"> Feedback</span></h2>
            <div className="row py-4">
                {
                    loading ? <div className="d-flex justify-content-center"> <Loader /> </div>
                    : 
                      reviews &&  reviews.map(review => <FeedbackCard key = {review._id} review = {review} />)
                    
                }
            </div>
        </section>
    );
};

export default Feedback;