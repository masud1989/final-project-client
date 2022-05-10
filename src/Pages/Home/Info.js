import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard bgclass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={marker}></InfoCard>
            <InfoCard bgclass="bg-neutral" cardTitle="Our Locations" img={clock}></InfoCard>
            <InfoCard bgclass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" img={phone}></InfoCard>
        </div>
    );
};

export default Info;