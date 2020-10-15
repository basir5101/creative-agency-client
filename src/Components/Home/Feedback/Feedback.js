import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeedbackCard from './FeedbackCard';
import ClipLoader from "react-spinners/ClipLoader";

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect( () =>{
        fetch('https://whispering-beyond-14007.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setFeedbacks(data); 
            console.log(data)
            setLoading(false);
        })
    },[])

    return (

        <section className = 'container mt-5'>
            <h2 className = 'text-center mb-5'> Clients <span className = 'text-success'> Feedback</span> </h2>
            <div className="row">
                {
                    loading &&  <ClipLoader
                        style = {{
                            display: 'block',
                            marginLeft: '40%',
                            borderColor: 'red',
                        }}
                        size={150}
                        color={"#123abc"}
                    />
                }
                {
                    feedbacks.map(feedback => <FeedbackCard key = {feedback._id} feedback = {feedback} />)
                }
            </div>
        </section>
    );
};

export default Feedback;