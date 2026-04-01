import React from 'react';

const Whyus = () => {
    return (
        <div className='bg-gradient-default py-12 my-5'>
            <div className='container w-8/12 mx-auto bg-grad'>
                <div className="flex text-lg text-white">
                    <div className="stat place-items-center border-solid border-white/30 border-b-0">
                        <div className="font-bold text-6xl">50K+</div>
                        <div className="text-sm mt-4">Active Users</div>
                    </div>

                    <div className="stat place-items-center border-solid border-white/30 border-b-0">
                        <div className="font-bold text-6xl">200+</div>
                        <div className="text-sm mt-4">Premium Tools</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="font-bold text-6xl">4.9</div>
                        <div className="text-sm mt-4">Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whyus;