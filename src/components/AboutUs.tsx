import React from "react";
import about1 from "../assets/about1.png";

function AboutUs() {
  return (
    <section id="about-section" className="bg-white  pt-10 pb-0 -mb-12">
      <div className="">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative py-3 px-6 bg-yellow-300 my-4 md:my-12">
            <h1 className="font-bold underline text-2xl md:text-3xl lg:text-5xl relative z-10 text-center">
              ABOUT US
            </h1>
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath:
                  "polygon(5% 50%, 0% 5%, 0% 95%, 5% 50%, 95% 50%, 100% 95%, 100% 5%, 95% 50%)",
              }}
            ></div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="bg-yellow-200 w-full md:w-[300px] text-center p-5 rounded-r-full shadow-2xl">
            <h1 className="font-bold underline text-3xl md:text-4xl text-start">
              WHO WE ARE ?
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <h1 className="text-2xl md:text-3xl font-medium w-full md:w-1/2 px-4">
              We're a team of hungry software engineers who love building
              things, constantly pushing the boundaries of innovation to create
              impactful solutions.
            </h1>
            <div className="w-full md:w-1/2">
              <img
                src={about1}
                alt="about us"
                className="w-full h-auto max-h-[340px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="bg-yellow-200 w-full md:w-[300px] text-center p-5 rounded-r-full shadow-2xl">
            <h1 className="font-bold underline text-3xl md:text-4xl text-start">
              WHAT WE DO ?
            </h1>
          </div>

          <div className="flex justify-center px-4">
            <h1 className="text-2xl md:text-3xl font-medium text-center max-w-4xl">
              While we're busy creating our own products, we also help companies
              and individuals turn their ideas into reality with our expert
              development services, delivering innovative and reliable
              solutions.
            </h1>
          </div>
        </div>

        {/* Where We Are Section */}
        <div className="flex flex-col gap-8 mb-12">
          <div className="bg-yellow-200 w-full md:w-[350px] text-center p-5 rounded-r-full shadow-2xl">
            <h1 className="font-bold underline text-3xl md:text-4xl text-start">
              WHERE WE ARE ?
            </h1>
          </div>

          <div className="flex justify-center px-4">
            <h1 className="text-2xl md:text-3xl font-medium text-center max-w-4xl">
              We are located in Bangalore, but we offer our services both online
              and offline, catering to clients across India and overseas
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;



