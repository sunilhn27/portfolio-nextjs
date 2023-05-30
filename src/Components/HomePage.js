import React from "react";
import Image from "next/image";
import profilePic from "../image/img1.png";

function Homepage() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center text-white">
      <div className="flex flex-1 flex-col justify-center px-16 space-y-4 m-3">
        <p className="text-cyan-400 font-bold">Hi, my name is</p>
        <h1 className="text-5xl font-extrabold ">Sunil </h1>
        <h1 className="text-5xl font-extrabold text-gray-400">
          I make ideas & things alive.
        </h1>
        <p>
          Im a
          <span className="text-cyan-400 font-bold"> software engineer </span>
          skilled in problem-solving and specializing in building (and
          occasionally designing) exceptional digital experiences.
        </p>
        <button className=" text-white border-2 px-3 py-1 w-fit border-cyan-500 font-bold m-auto  hover:bg-cyan-200 hover:text-black">
          Check out my Resume
        </button>
      </div>

      {/* image */}
      <div className="flex flex-1">
        <Image src={profilePic} alt="img"></Image>
      </div>
    </div>
  );
}

export default Homepage;
