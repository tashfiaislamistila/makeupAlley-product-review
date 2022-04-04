import React from 'react';

const QuestionAnswer = () => {
    return (
        <div>
            <div>
                <h2 className='text-6xl text-neutral-800 mt-8'>This is question answer page</h2>
            </div>
            <div className='grid grid-cols-2 justify-items-center gap-4 pt-10 '>
                <div className='text-xl text-neutral-800 mt-8 mx-8 max-w-sm rounded overflow-hidden shadow-lg p-10'>
                    <h1 className='font-bold text-red-700'>Question: What is Semantic tag?</h1>
                    <ul>1. Semantic tag or semantic markup is new markup in HTML 5.</ul>
                    <ul>2. Semantic tag describe how the content within them is suppose to behave.</ul>
                    <ul>3. Semantic tag have specific attribute</ul>
                    <ul>4. Semantic tags aim to make our code more meaningful.</ul>
                    <ul>5. Semantic tags introduce us meaning of web page rather than presentation .</ul>
                    <ul>6. Good example of Semantic tags is- header tags,blockquote,em,code,section etc .</ul>
                </div>
                <div className='text-xl text-neutral-800 mt-8 mx-8 max-w-sm rounded overflow-hidden shadow-lg p-10'>
                    <h1 className='font-bold text-red-700'>Question: What is the purpose of Context API?</h1>
                    <ul>1. Context API is a way to pass data through the
                        component without passing props manually.</ul>
                    <ul>2. Context API is the alternative of "props drilling".</ul>
                    <ul>3. Context API is an easier,lighter approach to state management using redux.</ul>
                    <ul>4. Context API requires minimal setup.</ul>
                    <ul>5. Context API specifically designed for static data, that is not often update.</ul>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;