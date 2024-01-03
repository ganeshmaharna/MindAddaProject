// eslint-disable-next-line no-unused-vars
import React from "react";

function HowItWorks() {
  return (
    <div className="w-10/12 bg-red-300 mx-auto py-9">
      <div className="text-center text-white pb-20 px-2">
        <h1 className="text-4xl font-semibold mt-5">
          HOW IT <span className="text-yellow-500">WORKS</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-5 text-white mt-5 px-4 py-md-5">
        <div className="bg-blue-300 mb-5 rounded-lg py-3 px-4 h-100">
          <div className="text-5xl text-white text-right mb-2">1</div>
          <div className="text-2xl font-semibold mb-2">Become a Member</div>
          <div className="text-white pb-8">
            Pick the plan that best helps you achieve your goals
          </div>
        </div>
        <div className="bg-blue-300 mb-5 rounded-lg py-3 px-4 h-100">
          <div className="text-5xl text-white text-right mb-2">2</div>
          <div className="text-2xl font-semibold mb-2">Become a Member</div>
          <div className="text-white">
            Pick the plan that best helps you achieve your goals
          </div>
        </div>
        <div className="bg-blue-300 mb-5 rounded-lg py-3 px-4 h-100">
          <div className="text-5xl text-white text-right mb-2">3</div>
          <div className="text-2xl font-semibold mb-2">Become a Member</div>
          <div className="text-white">
            Pick the plan that best helps you achieve your goals
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
