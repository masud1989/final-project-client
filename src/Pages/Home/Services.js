import React from 'react';
import fluride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Floride Treatment',
            description: 'Floride Treatmentlorem jhkjhkdfjkd vddsfsf',
            img: fluride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'cavity lorem jhkjhkdfjkd vddsfsf',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening Treatment',
            description: 'Teeth Whitening Treatment lorem jhkjhkdfjkd vddsfsf',
            img: whitening
        }
    ]
    return (
        <div className='py-28'>
            <div className='text-center'>
                <h3 className='text-primary text-2xl uppercase font-bold '>Our Services</h3>
                <h2 className='text-5xl font-bold '> Services We Provided</h2>
            </div>
            <div className='my-20 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;