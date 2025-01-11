import React from "react";

import yes from "../assets/yes.png";

function Hero() {
  // #D9C86B;

  // className = "hidden md:block"; // Hidden on mobile, shows on md+
  // className = "md:hidden"; // Shows on mobile, hidden on md+

  return (
    <section
      id="home-section"
      className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-400 md:h-[80vh]"
    >
      <>
        <div className="flex flex-row justify-between items-center h-full md:mx-[80px] ">
          <div className="flex flex-col md:items-start items-center justify-center">
            <h1 className="font-bold text-black md:text-8xl text-6xl md:mt-0 mt-10 md:text-start text-center">
              Your vision our
              <br />
              expertise
            </h1>
            <div className="my-10">
              <h5 className="font-semibold text-black md:text-2xl ">
                No one can understands your vision
                <br /> better than you,
              </h5>
              <h5 className="font-semibold text-black md:text-2xl md:mt-10 mt-2">
                No one can understands software <br />
                like we do.
              </h5>
            </div>
            <div className="mb-5 md:mb-0">
              <button
                className="rounded-md md:px-24 px-16 py-2 bg-black text-white md:text-2xl font-semibold 
    hover:bg-gray-700 hover:scale-105 hover:shadow-lg focus:outline-none  
    transition-all duration-300 ease-in-out active:scale-95"
              >
                Explore our Services
              </button>
            </div>
          </div>

          <div className="absolute  right-10 hidden md:block">
            <img
              src={yes}
              alt="image1"
              className="w-[535px] h-[535px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-[10vh]">
          <h1 className="text-center md:font-bold">
            "Regret of not trying is greater than the fear of failure."
          </h1>
        </div>
      </>
    </section>
  );
}

export default Hero;





