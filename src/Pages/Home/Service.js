import React from 'react';

const Service = ({service}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div class="card-body ">
                <h2 className="card-title ">
                {service.name}
                </h2>
                <p className=''>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;