import React from 'react';

const InfoCard = ({img, cardTitle, bgclass}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgclass}`}>
            <figure className='ml-5'><img src={img} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;