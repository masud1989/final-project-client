import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="flex items-center">
                <div className="avatar mt-5">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className='text-xl'>{review.name}</h2>
                    <p>{review.location}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Review;