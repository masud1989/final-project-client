import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const AppointmentPart = () => {
    return (
        <div
            style={{
                background:`url(${appointment})`
            }} className='flex justify-center items-center px-12 '>
                <div className='flex-1'>
                    <img style={{height: "550px"}} className='mt-[-120px]'  src={doctor} alt="" />
                </div>
            <div className='flex-1'>
                <h2 className='text-2xl text-primary font-bold'>Appointment</h2>
                <h3 className='text-5xl font-bold text-white'>Make an Appointment today</h3>
                <p className='mb-10 mt-10 text-white'>A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.</p>
                <PrimaryButton>Appointment Now</PrimaryButton>
            </div>
        </div>
    );
};

export default AppointmentPart;