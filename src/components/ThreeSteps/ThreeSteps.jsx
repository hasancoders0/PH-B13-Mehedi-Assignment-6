import React from 'react';

const ThreeSteps = () => {
    return (


<div className="container mx-auto px-4 my-10">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
    Get Started In 3 Steps
  </h2>

  <p className="py-5 text-gray-500 text-center mb-5">
    Start using premium digital tools in minutes, not hours.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="card bg-base-100 w-full shadow-sm rounded-2xl max-w-[350px] mx-auto">
      <div className="card-body items-center text-center">
        <div className="w-full flex justify-end">
          <span className="bg-gradient-default rounded-full h-10 w-10 flex items-center justify-center text-white">
            01
          </span>
        </div>

        <figure className="pt-2">
          <div className="rounded-full bg-primary/15 p-6">
            <img
              src="/src/assets/user.png"
              alt="Create Account"
              className="w-20"
            />
          </div>
        </figure>

        <h2 className="card-title text-2xl mt-2">Create Account</h2>
        <p className="text-gray-500">
          Sign up for free in seconds. No credit card required to get started.
        </p>
      </div>
    </div>
    <div className="card bg-base-100 w-full shadow-sm rounded-2xl max-w-[350px] mx-auto">
      <div className="card-body items-center text-center">
        <div className="w-full flex justify-end">
          <span className="bg-gradient-default rounded-full h-10 w-10 flex items-center justify-center text-white">
            02
          </span>
        </div>

        <figure className="pt-2">
          <div className="rounded-full bg-primary/15 p-6">
            <img
              src="/src/assets/package.png"
              alt="Choose Products"
              className="w-20"
            />
          </div>
        </figure>

        <h2 className="card-title text-2xl mt-2">Choose Products</h2>
        <p className="text-gray-500">
          Browse our catalog and select the tools that fit your needs.
        </p>
      </div>
    </div>
    <div className="card bg-base-100 w-full shadow-sm rounded-2xl max-w-[350px] mx-auto">
      <div className="card-body items-center text-center">
        <div className="w-full flex justify-end">
          <span className="bg-gradient-default rounded-full h-10 w-10 flex items-center justify-center text-white">
            03
          </span>
        </div>

        <figure className="pt-2">
          <div className="rounded-full bg-primary/15 p-6">
            <img
              src="/src/assets/rocket.png"
              alt="Create Account"
              className="w-20"
            />
          </div>
        </figure>

        <h2 className="card-title text-2xl mt-2">Start Creating</h2>
        <p className="text-gray-500">
          Download and start using your premium tools immediately.
        </p>
      </div>
    </div>


  </div>
</div>


    );
};

export default ThreeSteps;