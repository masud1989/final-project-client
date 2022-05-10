import React from 'react';
import qoute from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id:1,
            name: 'Mr Tuhin',
            review: 'This is the description of Mr Jahangir This is the description of Mr Jahangir This is the description of Mr JahangirThis is the description of Mr Jahangir This is the description of Mr Jahangir This is the description of Mr Jahangir. This is the description of Mr Jahangir',
            img: people1,
            location: 'Bangladesh'
        },
        {
            _id:2,
            name: 'Mr Sumon Hasan',
            review: 'This is the description of Mr Jahangir This is the description of Mr Jahangir This is the description of Mr JahangirThis is the description of Mr Jahangir This is the description of Mr Jahangir This is the description of Mr Jahangir',
            img: people2,
            location: 'Bangladesh'
        },
        {
            _id:3,
            name: 'Mr Jahangir',
            review: 'This is the description of Mr Jahangir This is the description of Mr Jahangir This is the description of Mr JahangirThis is the description of Mr JahangirThis is the description of Mr JahangirThis is the description of Mr JahangirThis is the description of Mr Jahangir',
            img: people3,
            location: 'Bangladesh'
        },
    ]
    return (
        <section className='mt-10'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-2xl text-primary font-bold'>Testimonials</h2>
                    <h3 className='text-5xl font-bold'>Our Patients Reviews</h3>
                </div>
                <div>
                    <img src={qoute} alt="" className='w-24 lg:w-48'/>
                </div>
                </div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
             </div>
            
        </section>
    );
};

export default Reviews;