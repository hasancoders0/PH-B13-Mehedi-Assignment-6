import React from 'react';

const Workflow = () => {
    return (
            <section className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
          Join thousands of professionals who are already using Digitools to work
          smarter. Start your free trial today.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn rounded-full border-none bg-white text-violet-600 px-8 hover:bg-white">
            Explore Products
          </button>

          <button className="btn rounded-full bg-transparent border border-white text-white px-8 hover:bg-white hover:text-violet-600">
            View Pricing
          </button>
        </div>

        <p className="mt-6 text-sm text-white/75">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
    );
};

export default Workflow;