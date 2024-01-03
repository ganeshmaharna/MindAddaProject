/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";

function About() {
  return (
    <div className="w-10/12 bg-gray-300 mx-auto flex flex-col lg:flex-row py-20">
      <div className="w-full lg:w-1/3 bg-red-300 lg:pl-20 mb-8 lg:mb-0">
        <img
          className="rounded-circle mx-auto lg:mx-0 w-80 h-80"
          alt="User Avatar"
          src="https://unsolved-networks-avatars.s3.ap-south-1.amazonaws.com/g/g.png"
        />
      </div>
      <div className="w-full lg:w-2/3 bg-green-300 lg:px-12">
        <div className="lg:text-4xl text-3xl md:text-left text-center font-bold mb-4 uppercase">
          <div className="text-light mb-2">About me</div>
          <div className="text-yellow-500">Ganesh Maharna</div>
        </div>
        <div className="text-xl bg-yellow-500 font-bold">
          <p className="">
            Hello! I’m Ganesh Maharna, a passionate front-end developer with a
            deep dive into the React and Angular realms. My journey began with
            an eye for detail and a heart for user-centric designs. I noticed a
            gap between complex web applications and the seamless experiences
            users craved. The challenge was daunting, but my determination was
            steadfast.
          </p>
          <p className="my-4">
            I rolled up my sleeves and plunged into experimenting with the
            latest in React and Angular, striving for that perfect synergy of
            performance and aesthetics. Through countless iterations and a
            relentless pursuit of excellence, I crafted solutions that not only
            solved the problem but elevated the user experience to new heights.
          </p>
          <p className="">
            The outcomes? Blazing-fast, intuitive interfaces that users loved
            and businesses thrived on. My mission now is to share this
            knowledge, to empower others to create impactful digital
            experiences. To solve the problem not just for now, but for good.
            Let's build the web of tomorrow, together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
