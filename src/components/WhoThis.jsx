// eslint-disable-next-line no-unused-vars
import React from "react";
// import mobileImage from "../assets/mobilepng.jpg";
function WhoThis() {
  return (
    <div className="w-10/12 mx-auto py-16 bg-gray-500">
      <div className="flex flex-wrap">
        <div className="mb-6 md:w-1/2 px-12">
          <img className="w-full" src="https://gandevreactng.unsolved.network/assets/landing_page/1-f46f4632edefd7d1175012442c0f66c19487894a40fdcb98f8fe7d698495cfd6.png" alt="Image Alt Text" />
        </div>
        <div className="md:w-1/2 px-4 w-full">
          <div className="text-4xl font-bold mb-9 text-white">
            WHO IS <span className="text-blue">THIS FOR</span>
          </div>
          <div className="list-items mt-4 pt-2 mb-5">
            <ul>
              <li className="mb-3">
                <div className="text-3xl font-bold text-whothisli">1. Frontend Developer</div>
                <div className="mt-2">
                  Seeks to enhance UI/UX skills
                </div>
              </li>
              <li className="mb-3">
                <div className="text-3xl font-bold text-whothisli">2. Career Switcher</div>
                <div className="mt-2">
                  Aiming for a tech role transition
                </div>
              </li>
              <li className="mb-3">
                <div className="text-3xl font-bold text-whothisli">3. Entrepreneur</div>
                <div className="mt-2">
                  Builds own tech startup
                </div>
              </li>
              <li className="mb-3">
                <div className="text-3xl font-bold text-whothisli">4. UI/UX Designer</div>
                <div className="mt-2">
                  Wants to implement designs
                </div>
              </li>
              <li className="mb-3">
                <div className="text-3xl font-bold text-whothisli">5. Back-end Developer</div>
                <div className="mt-2">
                  Expanding to full-stack
                </div>
              </li>
              <li className="mb-3">
                <div className="text-3xl font-bold text-whothisli">6. Student</div>
                <div className="mt-2">
                  Learning cutting-edge tech
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoThis;
