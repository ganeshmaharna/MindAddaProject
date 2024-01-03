// eslint-disable-next-line no-unused-vars
import React from "react";

function Home() {
  return (
    <div className="w-10/12 mx-auto flex flex-col py-28 md:flex-row bg-gray-600 items-center">
      <div className="md:w-7/12 p-4 mt-10">
        <span className="text-white md:text-6xl text-3xl font-bold block">
          Welcome to{" "}
        </span>
        <span className="text-yellow-300 md:text-6xl text-3xl font-bold block">
          GanDevReactNg
        </span>
        <p className="text-white text-2xl md:mt-11 mt-7">
          Unlock elite web development skills in just 30 days with our Code
          Evolution Challenge – no endless hours or hefty fees required!
        </p>
        <div className="flex mt-9 mb-5">
          <a
            className="bg-blue-500 text-white px-4 py-4 rounded-tl-lg rounded-bl-lg font-bold hover:bg-blue-700"
            href="/users/sign_up"
          >
            Join for free
          </a>
        </div>
      </div>
      <div className="md:w-5/12 text-center -mt-12">
        <img
          className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto mt-4 md:mt-0"
          alt="User Avatar"
          src="https://unsolved-networks-avatars.s3.ap-south-1.amazonaws.com/g/g.png"
        />
      </div>
    </div>
  );
}

export default Home;
