import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../CustomHooks/useReviews';
import lipstick from '../../Image/lipstick.jpg'
import ReviewComponent from '../ReviewComponent/ReviewComponent';

const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    const showReviewDetails = () => {
        navigate('/review');
    }
    const showLiveDemo = () => {
        navigate('/about');
    }
    return (
        <div>
            <div className='text-6xl text-red-700 mt-8'>
                <h1>MakeupAlley</h1>
                <h1 className='text-6xl text-neutral-800'>Retro Matte Mac Ruby Woo Lipstick </h1>
            </div>
            <div className='mt-4 p-10 text-2xl font-light'>
                <p>Let's begin by stating the obvious: It's never too late to become a lipstick girl. Whether you've previously been someone who loves swiping on a statement red lip for a night out, who has always kept your go-to neutral buried at the bottom of your purse, or who has really never worn lipstick ever, 2021 is the time to enjoy the makeup accessory for what it is: fabulously fun. We've rounded up all the different lipsticks to try out throughout the year, from collagen-boosting, skin-nourishing formulas to come-hither bright color options to strikingly bold matte finishes. We've even thrown in one or two barely-there balmy tints that are perfect for those beginning their lipstick journey.

                    Here are the best lipsticks to wear fearlessly in 2021</p>

            </div>
            <button onClick={showLiveDemo} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8'>Live Demo</button>
            <div className='mt-8'>
                <div className='w-1/2 mx-auto pb-10'>
                    <img src={lipstick} alt="" />
                </div>
            </div>
            <div className='mt-8'>
                <h1 className=' text-4xl text-neutral-800'>Customer Reviews : {reviews.slice(0, 3).length}</h1>
                <div className='grid grid-cols-3 justify-items-center gap-4 pt-10 '  >
                    {
                        reviews.slice(0, 3).map(review => <ReviewComponent
                            key={review.id}
                            review={review}
                        ></ReviewComponent>)
                    }
                </div>
                <div>
                    <button onClick={showReviewDetails} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8 mb-8' >See All Reviews</button>
                </div>
            </div>
        </div>
    );
};
export default Home;