import React from 'react';

const FeedbackCard = ({review}) => {
    console.log(review)
    return (
        <div className="col-lg-4 col-md-6 mt-2">
            <div className = 'border p-4'>
                <div className = "media">
                    <img src={`data: image/png; base64, ${review.image.img}`} className = "mr-3" alt="..."/>
                    <div className = "media-body">
                        <h4 className = "my-0"> {review.name} </h4>
                        <h6 className = 'mt-0 text-muted'>{review.position}</h6>
                    </div>
                    <p></p>
                </div>
                <p> {review.description} </p>
            </div>
        </div>
    );
};

export default FeedbackCard;