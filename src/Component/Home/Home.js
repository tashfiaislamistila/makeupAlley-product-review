import React from 'react';
import lipstick from '../../Image/lipstick.jpg'
const Home = () => {
    return (
        <div>
            <div className='text-6xl text-red-700 mt-8'>
                <h1>MakeupAlley</h1>
                <h1 className='text-6xl text-neutral-800'>Retro Matte Ruby Woo Lipstick </h1>
            </div>
            <div className='mt-8  text-2xl font-light'>
                <p>Let's begin by stating the obvious: It's never too late to become a lipstick girl. Whether you've previously been someone who loves swiping on a statement red lip for a night out, who has always kept your go-to neutral buried at the bottom of your purse, or who has really never worn lipstick ever, 2021 is the time to enjoy the makeup accessory for what it is: fabulously fun. We've rounded up all the different lipsticks to try out throughout the year, from collagen-boosting, skin-nourishing formulas to come-hither bright color options to strikingly bold matte finishes. We've even thrown in one or two barely-there balmy tints that are perfect for those beginning their lipstick journey.

                    Here are the best lipsticks to wear fearlessly in 2021</p>

            </div>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8'>Live Demo</button>
            <div className='w-1/3 mt-8'>
                <img src={lipstick} alt="" />
            </div>
        </div>
    );
};

export default Home;