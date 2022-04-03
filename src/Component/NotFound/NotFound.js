import React from 'react';
import picture from '../../Image/picture.jpg'
const NotFound = () => {
    return (
        <div className='text-6xl'>
            <h1>404,Not Found</h1>
            <img src={picture} alt='' />
        </div>
    );
};

export default NotFound;