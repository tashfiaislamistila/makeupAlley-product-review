import React from 'react';

const ReviewComponent = (props) => {
    console.log(props.review)
    const { image, name, rating, review } = props.review;
    return (
        <div className='p-10 '>
            <div className='max-w-sm rounded overflow-hidden shadow-lg '>
                <img className='object-scale-down h-48 w-96 bg-cover bg-center ' src={image} alt="" />
                <h2 className='font-bold text-xl mb-2 p-5'>Name: {name}</h2>
                <h2 className='font-bold text-xl mb-2'>Ratings: {rating}</h2>
                <h2 className='text-gray-700 text-base font-bold p-6  '>Review: {review.length < 200 ? review : review.slice(0, 200) + "...See More"}</h2>


            </div>




        </div>
    );
};

export default ReviewComponent;