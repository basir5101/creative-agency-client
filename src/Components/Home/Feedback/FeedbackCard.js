import React from 'react';

const FeedbackCard = ({feedback}) => {
    return (
        <div className = 'col-md-4'>
            <div className=" m-1 p-3 border">
                <div className = 'd-flex mb-2 justify-content-around'>
                    <img style = {{maxHeight : '40px'}} className = 'mt-3 mr-2' src= {`data:image/png;base64, ${feedback.image.img}`} alt=""/>
                    <div>
                        <h4>{feedback.name}</h4>
                        <h6> {feedback.Designation} </h6>
                    </div>
                </div>
                <p> {feedback.description} </p>
            </div>
        </div>
    );
};

export default FeedbackCard;