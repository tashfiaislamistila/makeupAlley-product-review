import React from 'react';
import useReviews from '../../CustomHooks/useReviews';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h1 className='text-4xl text-neutral-800 mt-8'>You can see our customers reviews</h1>
            <div className='grid grid-cols-3 justify-items-center gap-4 pt-10 '  >
                {
                    reviews.map(review => <ReviewComponent
                        key={review.id}
                        review={review}
                    ></ReviewComponent>)
                }
            </div>
        </div>
    );
};

export default Review;