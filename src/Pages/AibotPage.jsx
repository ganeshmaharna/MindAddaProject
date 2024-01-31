/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import iconImage from "../assets/1.png";

const AibotPage = () => {
  const [isDeleteVisible, setDeleteVisible] = useState(undefined);
  const [flag, setFlag] = useState([]);
  const getResponse = () => {
    const lists = localStorage.getItem("responses");
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };
  const [responses, setResponses] = useState(getResponse());
  const [prompt, setPrompt] = useState("");

  const getLocalData = () => {
    const lists = localStorage.getItem("submissions");
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };
  const [submissions, setSubmissions] = useState(getLocalData());

  const responseClick = (index) => {
    setFlag((prevFlags) => {
      if (prevFlags.includes(index)) {
        return prevFlags.filter((prevIndex) => prevIndex !== index);
      } else {
        return [...prevFlags, index];
      }
    });
  };

  //get localStorage data back

  const handleToggleClick = (index) => {
    setDeleteVisible((prevIndex) => (prevIndex === index ? undefined : index));
  };
  const handleTextareaChange = (event) => {
    setPrompt(event.target.value);
  };

  function callOpenaiApi(prompt, index) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: prompt }),
    };

    fetch("http://localhost:8080/hitOpenaiApi", requestOptions)
      .then((response) => response.text())
      .then((data) => {
        setResponses((prevResponses) => {
          console.log("This is previous response", prevResponses);
          const newResponses = [...prevResponses];
          newResponses[index] = data;
          return newResponses;
        });
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  // Save submissions and responses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
    localStorage.setItem("responses", JSON.stringify(responses));
  }, [submissions, responses]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSubmissionIndex = submissions.length;
    setSubmissions([...submissions, prompt]);
    callOpenaiApi(prompt, newSubmissionIndex);
    setPrompt("");
  };
  return (
    <div className="w-10/12 mx-auto bg-red-300">
      <Navbar />
      <div className="grid grid-cols-4 mt-20">
        <div className="bg-blue-400 col-span-1">Hello</div>
        <div className="col-span-2">
          <div className="flex flex-col mx-auto px-4 w-full mb-5">
            <div className="w-full bg-cardheader py-2 px-4 flex rounded-t-lg">
              <img
                className="rounded-circle"
                alt="AI Assistant"
                width="30"
                height="30"
                src={iconImage}
              />
              <h2 className="font-bold text-white text-lg pl-2">
                Ask AI Anything
              </h2>
            </div>
            <div className="w-full bg-cardbody flex flex-col rounded-b-lg">
              <form
                className="ai-conversation-form px-8 py-4"
                onSubmit={handleSubmit}
              >
                <textarea
                  className="form-control text-lg bg-transparent text-white w-full border-none focus:border-none outline-none focus:outline-none"
                  placeholder="What do you want AI to create?"
                  required
                  rows="4"
                  value={prompt}
                  onChange={handleTextareaChange}
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
          <div className="mx-auto text-white bg-green-300 p-2">
            {submissions.map((submission, index) => (
              <div key={index}>
                <div className="lg:w-11/12 bg-blue-800 rounded-lg p-3 w-full mx-auto mb-5">
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
                            <div className="timestamp text-sm">
                              10 Jan 24, 10:35AM
                            </div>
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
                          <p>{submission}</p>
                        </div>
                      </div>
                      <div
                        className="flex justify-end cursor-pointer"
                        onClick={() => responseClick(index)}
                      >
                        <span className="comment--icon mt-1 me-2">
                          <FontAwesomeIcon icon={faCommentAlt} />
                        </span>
                        <span className="font-semibold text-lg">
                          1 Response
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    flag.includes(index) ? "" : "hidden"
                  } text-white bg-yellow-800 lg:w-11/12 rounded-lg p-3 w-full mx-auto mb-5`}
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
                      {responses[index] || "Loading response..."}
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
                              <FontAwesomeIcon
                                icon={faPaperPlane}
                                className="text-2xl"
                              />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default AibotPage;
