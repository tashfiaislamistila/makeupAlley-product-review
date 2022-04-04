import React from 'react';
import picture from '../../Image/picture.jpg'
const NotFound = () => {
    return (
        <div className='text-6xl mt-8'>
            <h1>Oops!! This page is not found.</h1>
            <img className='mt-8' src={picture} alt='' />
        </div>
    );
};

export default NotFound;