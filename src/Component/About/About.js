import React from 'react';
import redlips from '../../Image/redlips.jpg'
const About = () => {
    return (
        <div className=' mt-8'>
            <h1 className='text-6xl'>This is our review website. </h1>
            <p className='text-4xl mt-8'>This is a Mac Ruby woo lipstick review.Please give your precious review about this product and help people.</p>
            <img className='w-1/3 mx-auto pb-10 mt-8' src={redlips} alt='' />
        </div>
    );
};

export default About;