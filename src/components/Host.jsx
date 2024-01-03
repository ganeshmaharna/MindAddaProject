// eslint-disable-next-line no-unused-vars
import React from "react";

function Host() {
  return (
    <div className="bg-gray-800 mx-auto w-10/12">
      <div className="container mx-auto px-8 py-28 text-white">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3">Hosted By</h1>
        </div>
        <div className="flex flex-col items-center w-4/12 mx-auto">
          <div className="">
            <img
              className="rounded-full"
              alt="User Avatar"
              style={{ width: "150px", height: "150px" }}
              src="https://unsolved-networks-avatars.s3.ap-south-1.amazonaws.com/g/g.png"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="font-semibold text-4xl">Hey! I am</p>
            <h2 className="text-2xl font-bold mb-2">Ganesh Maharna</h2>
            <p className="text-white px-4 py-2 text-xl rounded-md">
              Ganesh Maharna - Elite React/Angular Coach | 15+ years |
              Transformed 5000+ coders | Keynote Speaker | TechEd Innovator
              Award Winner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Host;
