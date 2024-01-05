// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthModal = ({login,onAuthentication}) => {
  const [activeCard, setActiveCard] = useState(login);
  const navigate = useNavigate();

  const handleTabClick = (tab) => {    
    setActiveCard(tab);
    tab === "login" ? navigate("/users/sign_in") : tab === "signup" && navigate("/users/sign_up");
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Main modal */}
      <div
        id="authentication-modal"
        aria-hidden="true"
        className="fixed bg-yellow-300 overflow-x-hidden overflow-y-auto h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-10 justify-center items-center"
      >
        <div className="relative top-16 w-full max-w-md px-4 h-full md:h-auto mx-auto bg-green-300">
          <div className="grid grid-cols-2 justify-items-center py-4">
            <div
              className={`bg-orange-300 py-2 px-4 cursor-pointer rounded-lg ${
                activeCard === "signup" ? "opacity-50" : ""
              }`}
              onClick={() => handleTabClick("signup")}
            >
              Signup
            </div>
            <div
              className={`bg-blue-300 py-2 px-4 cursor-pointer rounded-lg ${
                activeCard === "login" ? "opacity-50" : ""
              }`}
              onClick={() => handleTabClick("login")}
            >
              Login
            </div>
          </div>
          {activeCard === "login" ? <LoginCard onAuthentication={onAuthentication}/> : <SignupCard />}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
