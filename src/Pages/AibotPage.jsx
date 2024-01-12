/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import iconImage from "../assets/1.png";

const AibotPage = () => {
  const [isDeleteVisible, setDeleteVisible] = useState(undefined);
  const [flag, setFlag] = useState([]);

  const responseClick = (index) => {
    setFlag((prevFlags) => {
      // Check if the current index is already in the flags array
      if (prevFlags.includes(index)) {
        // If yes, remove it to close the response div
        return prevFlags.filter((prevIndex) => prevIndex !== index);
      } else {
        // If no, add it to open the response div
        return [...prevFlags, index];
      }
    });
  };
  const handleToggleClick = (index) => {
    console.log("This is the index", index);
    // setDeleteVisible(!isDeleteVisible);
    setDeleteVisible((prevIndex) => (prevIndex === index ? undefined : index));
  };
  const childDivs = Array.from({ length: 3 }).map((_, index) => (
    <div key={index}>
      <div className="lg:w-2/5 bg-gray-800 rounded-lg p-3 md:w-1/2 sm:w-full mx-auto mb-5">
        <div className="rounded-sm h-full mb-4">
          <div className="card-body">
            <div className="flex justify-between">
              <div className="flex-grow-1 flex">
                <div className="me-2">
                  <img
                    className="rounded-full"
                    alt="User Avatar"
                    width="35"
                    height="40"
                    src="https://unsolved-networks-avatars.s3.ap-south-1.amazonaws.com/g/g.png"
                  />
                </div>
                <div>
                  Ganesh Maharna <br />
                  <div className="timestamp text-sm">10 Jan 24, 10:35AM</div>
                </div>
              </div>
              <div className="relative">
                <span
                  className="cursor-pointer"
                  onClick={() => handleToggleClick(index)}
                >
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="text-white text-base px-3"
                  />
                </span>

                {isDeleteVisible === index && (
                  <div className="px-4 py-2 rounded-lg text-black font-bold bg-white absolute top-6 right-0">
                    Delete
                  </div>
                )}
              </div>
            </div>
            <div className="text-base mb-2 mt-2">
              <div className="discussion--content">
                <p>give me tips about grid system</p>
              </div>
            </div>
            <div
              className="flex justify-end cursor-pointer"
              onClick={() => responseClick(index)}
            >
              <span className="comment--icon mt-1 me-2">
                <FontAwesomeIcon icon={faCommentAlt} />
              </span>
              <span className="font-semibold text-lg">1 Response</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          flag.includes(index) ? "" : "hidden"
        } text-white bg-red-800 lg:w-2/5 rounded-lg p-3 md:w-1/2 sm:w-full mx-auto mb-5`}
      >
        <div className="flex mb-4">
          <div className="w-1/12">
            <img
              className="rounded-full mt-2"
              alt="AI Assistant"
              width="35"
              height="35"
              src="https://unsolved-networks-avatars.s3.ap-south-1.amazonaws.com/g/g.png"
            />
          </div>
          <div className="rounded-5 py-2 bg-dark text-ea strict-h1 w-11/12">
            <p>
              The grid system is a fundamental concept in web design and
              development that provides a structure for laying out web pages.
              It's a way to create complex layouts that are both visually
              appealing and functional. Here are some tips to help you
              effectively use the grid system in your projects:
            </p>

            <ol className="list-decimal pl-4">
              <li>
                <p>Understand the Basics:</p>

                <ul>
                  <li>
                    A grid is made up of vertical and/or horizontal guidelines
                    used to align elements on a page.
                  </li>
                  <li>
                    Commonly, grids are made up of columns, gutters (the space
                    between columns), and margins (the space on the outer sides
                    of the grid).
                  </li>
                </ul>
              </li>
            </ol>

            <p>
              Remember, the grid system is a guide, not a rule. Don't be afraid
              to break out of the grid when the design calls for it, but do so
              thoughtfully and with purpose. Practice will make you more
              comfortable with using grids, and over time you'll develop an
              intuition for when and how to use them effectively.
            </p>
          </div>
        </div>
        <div className="flex mb-4">
          <div>
            <img
              className="rounded-full mt-1"
              alt="User Avatar"
              width="35"
              height="35"
              src="https://unsolved-networks-avatars.s3.ap-south-1.amazonaws.com/g/g.png"
            />
          </div>
          <div className="ms-2 w-full px-4">
            <form
              id="chat-form"
              className="ai-disable-on-submit"
              action="/reply?id=6155"
              acceptCharset="UTF-8"
              data-remote="true"
              method="post"
            >
              <input type="hidden" name="conversation_id" id="6155" />

              <div className="flex">
                <textarea
                  name="message_content"
                  id="message-content"
                  className="form-control bg-gray-600 border-0 text-white px-2 outline-none w-full rounded-lg flex items-center"
                  placeholder="Ask AI something more"
                  required="required"
                ></textarea>
                <div>
                  <button
                    type="submit"
                    className="ms-2 rounded-full border-0 mt-1 flex items-center justify-center w-10 h-10 bg-black"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="text-2xl" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="bg-red-300">
      <Navbar />
      <div className="flex flex-col mx-auto md:w-2/5 w-full mb-5 mt-20">
        <div className="w-full bg-cardheader py-2 px-4 flex rounded-t-lg">
          <img
            className="rounded-circle"
            alt="AI Assistant"
            width="30"
            height="30"
            src={iconImage}
          />
          <h2 className="font-bold text-white text-lg pl-2">Ask AI Anything</h2>
        </div>
        <div className="w-full bg-cardbody flex flex-col rounded-b-lg">
          <form
            className="ai-conversation-form px-8 py-4"
            action="/ai_conversations"
            acceptCharset="UTF-8"
            method="post"
          >
            <textarea
              className="form-control text-lg bg-transparent text-white w-full border-none focus:border-none outline-none focus:outline-none"
              placeholder="What do you want AI to create?"
              required="required"
              rows="4"
              name="ai_conversation[body]"
              id="ai_conversation_body"
            ></textarea>
            <div className="float-right bg-aibtn rounded-md p-2">
              <button type="submit" className="btn btn-sm btn-primary">
                Generate with AI
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto text-white bg-green-300 p-2">{childDivs}</div>
    </div>
  );
};

export default AibotPage;
