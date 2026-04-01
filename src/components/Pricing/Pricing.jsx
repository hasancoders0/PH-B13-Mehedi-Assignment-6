import React from 'react';

const Pricing = () => {
    return (
        <section className="py-16 lg:py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-base-content">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-sm flex flex-col">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">Starter</h3>
              <p className="text-gray-500 mt-2">Perfect for getting started</p>
            </div>

            <div className="mt-8">
              <span className="text-5xl font-bold text-slate-900">$0</span>
              <span className="text-gray-500 text-2xl ml-1">/Month</span>
            </div>

            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>Access to 10 free tools</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>Basic templates</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>Community support</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>1 project per month</span>
              </li>
            </ul>

            <button className="mt-8 w-full rounded-full py-4 font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Get Started Free
            </button>
          </div>

          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-violet-600 to-fuchsia-600 shadow-sm">
            <div className="relative h-full rounded-2xl bg-gradient-to-b from-violet-600 to-fuchsia-600 p-6 lg:p-8 flex flex-col text-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-orange-100 text-orange-500 text-sm font-medium px-4 py-2 rounded-full">
                  Most Popular
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-bold">Pro</h3>
                <p className="text-violet-100 mt-2">Best for professionals</p>
              </div>

              <div className="mt-8">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-violet-100 text-2xl ml-1">/Month</span>
              </div>

              <ul className="mt-8 space-y-4 flex-1">
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white text-lg">✓</span>
                  <span>Access to all premium tools</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white text-lg">✓</span>
                  <span>Unlimited templates</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white text-lg">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white text-lg">✓</span>
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white text-lg">✓</span>
                  <span>Cloud sync</span>
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-white text-lg">✓</span>
                  <span>Advanced analytics</span>
                </li>
              </ul>

              <button className="mt-8 w-full rounded-full py-4 font-semibold bg-white text-violet-600">
                Start Pro Trial
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 shadow-sm flex flex-col">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">Enterprise</h3>
              <p className="text-gray-500 mt-2">For teams and businesses</p>
            </div>

            <div className="mt-8">
              <span className="text-5xl font-bold text-slate-900">$99</span>
              <span className="text-gray-500 text-2xl ml-1">/Month</span>
            </div>

            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>Team collaboration</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>SLA guarantee</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-green-500 text-lg">✓</span>
                <span>Custom branding</span>
              </li>
            </ul>

            <button className="mt-8 w-full rounded-full py-4 font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Pricing;