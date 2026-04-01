import React from 'react';

const HeroSection = () => {
    return (
        <>
            <div className='container m-auto px-5'>
                <div className="hero min-h-[65vh]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="./src/assets/banner.png"className="max-w-sm"/>
                        <div>
                        <div className='bg-primary/10 w-fit px-6 py-2 rounded-full text-primary font-medium flex gap-2'>
                            <img className='w-6' src='/src/assets/indicator.png'></img>
                            <p>New: AI-Powered Tools Available</p>
                        </div>
                        <h1 className="text-6xl font-bold leading-18 mt-3">Supercharge Your Digital Workflow!</h1>
                        <p className="py-5 text-gray-500">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products
                        </p>
                        <button className="btn btn-primary rounded-full mr-3">Get Started</button>
                        <button className="btn btn-outline btn-primary rounded-full"><img src='/src/assets/Play.png'></img>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;