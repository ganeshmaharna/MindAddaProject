/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import iconImage from "../assets/1.png";

const AibotPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-auto w-2/5 mt-20">
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
    </>
  );
};

export default AibotPage;
