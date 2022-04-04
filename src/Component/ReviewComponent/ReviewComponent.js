import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ReviewComponent = (props) => {
    console.log(props.review)
    const { image, name, rating, review } = props.review;
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg p-10 '>
            <img className='object-scale-down h-48 w-96 bg-cover bg-center ' src={image} alt="" />
            <h2 className='font-bold text-xl mb-2 p-5'>Name: {name}</h2>
            <Rating
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                readonly
            ></Rating>
            <h2 className='text-gray-700 text-base font-bold p-6'><h2>Review:</h2> {review.length < 200 ? review : review.slice(0, 200) + "...See More"}</h2>


        </div>


    );
};

export default ReviewComponent;