// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignupCard = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="relative w-full max-w-md px-4 h-full md:h-auto mx-auto bg-green-300">
      <div className="bg-red-300 rounded-lg shadow relative dark:bg-gray-700">
        <div className="flex justify-end p-2">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <form
          className="space-y-4 px-6 lg:px-6 pb-4 sm:pb-6 xl:pb-8"
          action="#"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign Up to our platform
          </h3>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className="text-md block px-3 py-2 rounded-lg w-full 
              bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
              focus:placeholder-gray-500
              focus:bg-white 
              focus:border-gray-600  
              focus:outline-none"
              placeholder="Full Name"
              required=""
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="text-md block px-3 py-2 rounded-lg w-full 
              bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
              focus:placeholder-gray-500
              focus:bg-white 
              focus:border-gray-600  
              focus:outline-none"
              placeholder="Email"
              required=""
            />
          </div>
          <div>
            <input
              type="phone"
              name="phone"
              id="phone"
              className="text-md block px-3 py-2 rounded-lg w-full 
              bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
              focus:placeholder-gray-500
              focus:bg-white 
              focus:border-gray-600  
              focus:outline-none"
              placeholder="Phone"
              required=""
            />
          </div>
          <div>
            <div className="relative">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className="text-md block px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className="h-6 text-gray-700 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            SignUp to your account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupCard;
