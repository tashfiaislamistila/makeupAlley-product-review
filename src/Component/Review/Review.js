import React from 'react';
import useReviews from '../../CustomHooks/useReviews';
import ReviewComponent from '../ReviewComponent/ReviewComponent';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div className='grid grid-cols-3 gap-4'  >
            {
                reviews.map(review => <ReviewComponent
                    key={review.id}
                    review={review}
                ></ReviewComponent>)
            }

        </div>
    );
};

export default Review;