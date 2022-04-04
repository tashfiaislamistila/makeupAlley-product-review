import React from 'react';
import useReviews from '../../CustomHooks/useReviews';

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>This is review page:{reviews.length}</h2>
        </div>
    );
};

export default Review;