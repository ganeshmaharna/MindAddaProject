/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ isAuthenticated }) {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-black shadow-md">
      <nav className="w-10/12 mx-auto px-4 flex py-4 items-center justify-between">
        <a className="text-white font-bold" href="/">
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold mr-2 font-18">G</div>
            <div className="text-white text-2xl">GanDevReactNg</div>
          </div>
        </a>

        {isAuthenticated ? (
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <a
                className="text-white px-3 py-2 rounded-md hover:bg-gray-800"
                href="/ai_conversations"
              >
                AiBot
              </a>
            </li>
            <li>
              <a
                className="text-white px-3 py-2 rounded-md hover:bg-gray-800"
                href="/users/sign_up"
              >
                Feed
              </a>
            </li>
            <li>
              <a
                className="text-white px-3 py-2 rounded-md hover:bg-gray-800"
                href="/users/sign_up"
              >
                Member
              </a>
            </li>
            <li>
              <a
                className="text-white px-3 py-2 rounded-md hover:bg-gray-800"
                href="/"
              >
                Event
              </a>
            </li>
          </ul>
        ) : (
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <Link
                className="text-white px-3 py-2 rounded-md hover:bg-gray-800"
                to="/users/sign_in"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="text-white px-3 py-2 rounded-md hover:bg-gray-800"
                to="/users/sign_up"
              >
                Signup
              </Link>
            </li>
          </ul>
        )}

        <a
          className="md:hidden text-white px-3 py-2 rounded-md hover:bg-gray-800"
          href="/users/sign_in"
        >
          Login
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
