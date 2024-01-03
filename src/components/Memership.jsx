/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Memership() {
  return (
    <div className="w-10/12 py-16 mx-auto bg-gray-800">
      <div className="text-white py-5 px-2">
        <div className="subscription">
          <div className="text-5xl text-center font-bold mb-8">
            MEMBERSHIP <span className="text-yellow-500">BENEFITS</span>
          </div>
          <div className="description mb-9 text-xl text-center font-semibold">
            Pick a membership plan to get started
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 bg-blue-500 p-4 grid-cols-1">
            <div className="bg-gray-500 p-4 flex flex-col rounded-lg">
              <div className="text-center text-3xl font-bold">Level 1</div>
              <div className="p-6 text-center">
                <img
                  className="w-75 rounded-lg"
                  src="https://gandevreactng.unsolved.network/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazloIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b6828eb0b4c903311c501735c68914cac2e0d4e2/1.png"
                  alt="Level 1 Image"
                />
              </div>
              <div className="mb-6 text-center text-lg font-bold">
                <i className="fas fa-rupee-sign"></i> 999/monthly
              </div>
              <div
                className="text-start text-xl px-3"
                style={{ lineHeight: "1.5rem" }}
              >
                <p>
                  Intro:
                  <br />
                  "Master the essentials of web development: Build and deploy
                  your first website within 30 days!"
                </p>
                <p>
                  Who is this level for:
                  <br />
                  "Ideal for aspiring coders seeking a breakthrough."
                </p>
                <p>
                  Key Outcome in Month 1:
                  <br />
                  "Create your first website", "Deploy with confidence"
                </p>
                <p>
                  Mode of delivery:
                  <br />
                  "Weekly interactive live coding sessions"
                  <br />
                  "24/7 access to step-by-step video tutorials"
                  <br />
                  "Join our vibrant beginner developer community"
                  <br />
                  "Weekly live Q&amp;A to clear your doubts"
                </p>
                <p>
                  What you will get:
                  <br />
                  "Build a website from scratch"
                  <br />
                  "Understand HTML, CSS, and JavaScript basics"
                  <br />
                  "Learn web hosting and domain fundamentals"
                  <br />
                  "Deploy your personal project online"
                  <br />
                  "Exclusive resources and code snippets"
                  <br />
                  "Peer-to-peer coding collaboration"
                </p>
                <p>
                  "Turn your curiosity into creation, and your creativity into a
                  career. Start coding, start succeeding!"
                </p>
              </div>
              <div className="text-center mt-5 mb-5 flex-grow-1 flex justify-center items-center align-items-end">
                <button
                  className="btn btn-danger submit-btn px-5 text-black bg-orange-300 px-9 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                  data-toggle="modal"
                  data-target="#unavailablePlan"
                >
                  <span className="text-xl font-bold">Join Level 1</span>
                  <br />
                  <span className="font-semibold">
                    {" "}
                    <i className="fas fa-rupee-sign"></i> 999/monthly
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-gray-500 p-4 flex flex-col rounded-lg">
              <div className="text-center text-3xl font-bold">Level 1</div>
              <div className="p-6 text-center">
                <img
                  className="w-75 rounded-lg"
                  src="https://gandevreactng.unsolved.network/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazloIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b6828eb0b4c903311c501735c68914cac2e0d4e2/1.png"
                  alt="Level 1 Image"
                />
              </div>
              <div className="mb-6 text-center text-lg font-bold">
                <i className="fas fa-rupee-sign"></i> 999/monthly
              </div>
              <div
                className="text-start text-xl px-3"
                style={{ lineHeight: "1.5rem" }}
              >
                <p>
                  Intro:
                  <br />
                  "Master the essentials of web development: Build and deploy
                  your first website within 30 days!"
                </p>
                <p>
                  Who is this level for:
                  <br />
                  "Ideal for aspiring coders seeking a breakthrough."
                </p>
                <p>
                  Key Outcome in Month 1:
                  <br />
                  "Create your first website", "Deploy with confidence"
                </p>
                <p>
                  Mode of delivery:
                  <br />
                  "Weekly interactive live coding sessions"
                  <br />
                  "24/7 access to step-by-step video tutorials"
                  <br />
                  "Join our vibrant beginner developer community"
                  <br />
                  "Weekly live Q&amp;A to clear your doubts"
                </p>
                <p>
                  What you will get:
                  <br />
                  "Build a website from scratch"
                  <br />
                  "Understand HTML, CSS, and JavaScript basics"
                  <br />
                  "Learn web hosting and domain fundamentals"
                  <br />
                  "Deploy your personal project online"
                  <br />
                  "Exclusive resources and code snippets"
                  <br />
                  "Peer-to-peer coding collaboration"
                </p>
                <p>
                  What you will get:
                  <br />
                  "Build a website from scratch"
                  <br />
                  "Understand HTML, CSS, and JavaScript basics"
                  <br />
                  "Learn web hosting and domain fundamentals"
                  <br />
                  "Deploy your personal project online"
                  <br />
                  "Exclusive resources and code snippets"
                  <br />
                  "Peer-to-peer coding collaboration"
                </p>
                <p>
                  "Turn your curiosity into creation, and your creativity into a
                  career. Start coding, start succeeding!"
                </p>
              </div>
              <div className="text-center mt-5 mb-5 flex-grow-1 flex justify-center items-center align-items-end">
                <button
                  className="btn btn-danger submit-btn px-5 text-black bg-orange-300 px-9 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                  data-toggle="modal"
                  data-target="#unavailablePlan"
                >
                  <span className="text-xl font-bold">Join Level 1</span>
                  <br />
                  <span className="font-semibold">
                    {" "}
                    <i className="fas fa-rupee-sign"></i> 999/monthly
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-gray-500 p-4 flex flex-col rounded-lg">
              <div className="text-center text-3xl font-bold">Level 1</div>
              <div className="p-6 text-center">
                <img
                  className="w-75 rounded-lg"
                  src="https://gandevreactng.unsolved.network/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazloIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b6828eb0b4c903311c501735c68914cac2e0d4e2/1.png"
                  alt="Level 1 Image"
                />
              </div>
              <div className="mb-6 text-center text-lg font-bold">
                <i className="fas fa-rupee-sign"></i> 999/monthly
              </div>
              <div
                className="text-start text-xl px-3"
                style={{ lineHeight: "1.5rem" }}
              >
                <p>
                  Intro:
                  <br />
                  "Master the essentials of web development: Build and deploy
                  your first website within 30 days!"
                </p>
                <p>
                  Who is this level for:
                  <br />
                  "Ideal for aspiring coders seeking a breakthrough."
                </p>
                <p>
                  Key Outcome in Month 1:
                  <br />
                  "Create your first website", "Deploy with confidence"
                </p>
                <p>
                  Mode of delivery:
                  <br />
                  "Weekly interactive live coding sessions"
                  <br />
                  "24/7 access to step-by-step video tutorials"
                  <br />
                  "Join our vibrant beginner developer community"
                  <br />
                  "Weekly live Q&amp;A to clear your doubts"
                </p>
                <p>
                  What you will get:
                  <br />
                  "Build a website from scratch"
                  <br />
                  "Understand HTML, CSS, and JavaScript basics"
                  <br />
                  "Learn web hosting and domain fundamentals"
                  <br />
                  "Deploy your personal project online"
                  <br />
                  "Exclusive resources and code snippets"
                  <br />
                  "Peer-to-peer coding collaboration"
                </p>
                <p>
                  "Turn your curiosity into creation, and your creativity into a
                  career. Start coding, start succeeding!"
                </p>
              </div>
              <div className="text-center mt-5 mb-5 flex-grow-1 flex justify-center items-center align-items-end">
                <button
                  className="btn btn-danger submit-btn px-5 text-black bg-orange-300 px-9 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                  data-toggle="modal"
                  data-target="#unavailablePlan"
                >
                  <span className="text-xl font-bold">Join Level 1</span>
                  <br />
                  <span className="font-semibold">
                    {" "}
                    <i className="fas fa-rupee-sign"></i> 999/monthly
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-gray-500 p-4 flex flex-col rounded-lg">
              <div className="text-center text-3xl font-bold">Level 1</div>
              <div className="p-6 text-center">
                <img
                  className="w-75 rounded-lg"
                  src="https://gandevreactng.unsolved.network/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazloIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b6828eb0b4c903311c501735c68914cac2e0d4e2/1.png"
                  alt="Level 1 Image"
                />
              </div>
              <div className="mb-6 text-center text-lg font-bold">
                <i className="fas fa-rupee-sign"></i> 999/monthly
              </div>
              <div
                className="text-start text-xl px-3"
                style={{ lineHeight: "1.5rem" }}
              >
                <p>
                  Intro:
                  <br />
                  "Master the essentials of web development: Build and deploy
                  your first website within 30 days!"
                </p>
                <p>
                  Who is this level for:
                  <br />
                  "Ideal for aspiring coders seeking a breakthrough."
                </p>
                <p>
                  Key Outcome in Month 1:
                  <br />
                  "Create your first website", "Deploy with confidence"
                </p>
                <p>
                  Mode of delivery:
                  <br />
                  "Weekly interactive live coding sessions"
                  <br />
                  "24/7 access to step-by-step video tutorials"
                  <br />
                  "Join our vibrant beginner developer community"
                  <br />
                  "Weekly live Q&amp;A to clear your doubts"
                </p>
                <p>
                  What you will get:
                  <br />
                  "Build a website from scratch"
                  <br />
                  "Understand HTML, CSS, and JavaScript basics"
                  <br />
                  "Learn web hosting and domain fundamentals"
                  <br />
                  "Deploy your personal project online"
                  <br />
                  "Exclusive resources and code snippets"
                  <br />
                  "Peer-to-peer coding collaboration"
                </p>
                <p>
                  "Turn your curiosity into creation, and your creativity into a
                  career. Start coding, start succeeding!"
                </p>
              </div>
              <div className="text-center mt-5 mb-5 flex-grow-1 flex justify-center items-center align-items-end">
                <button
                  className="btn btn-danger submit-btn px-5 text-black bg-orange-300 px-9 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                  data-toggle="modal"
                  data-target="#unavailablePlan"
                >
                  <span className="text-xl font-bold">Join Level 1</span>
                  <br />
                  <span className="font-semibold">
                    {" "}
                    <i className="fas fa-rupee-sign"></i> 999/monthly
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memership;
