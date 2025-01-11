import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";

function Testimony() {
  const testimonials = [
    {
      text: "“Excellent product! User-friendly, efficient, and well-designed. It’s made a big difference in my workflow. Highly recommend!”",
      name: "John Doe",
      company: "Flyhawk Consulting",
    },
    {
      text: "“Outstanding service! The team is professional, responsive, and reliable. My go-to solution provider!”",
      name: "Jane Smith",
      company: "Bright Innovations",
    },
    {
      text: "“The quality and attention to detail are top-notch. I’m thrilled with the results and the support provided!”",
      name: "Michael Johnson",
      company: "TechCore Solutions",
    },
    {
      text: "“Amazing experience! This product has exceeded my expectations in every way!”",
      name: "Emily Davis",
      company: "Visionary Tech",
    },
    {
      text: "“Highly recommend! Their team provided outstanding support and guidance.”",
      name: "Chris Brown",
      company: "Innovate Hub",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const cardsPerView = 3;

  const extendedTestimonials = [
    ...testimonials,
    ...testimonials.slice(0, cardsPerView),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === testimonials.length) {
      // Temporarily disable transition to reset the position
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // The duration matches the transition time
    }
  }, [currentIndex, testimonials.length]);

  return (
    <section className="bg-white h-[100vh] px-4 mb-0 pb-0 md:flex flex-col items-center hidden">
      <div className="flex flex-col items-center md:mx-8">
        <div className="flex flex-row justify-center py-3 px-6 relative my-12 md:my-24">
          <h1 className="font-bold underline text-3xl md:text-5xl relative z-10 text-center">
            What People Are Saying!
          </h1>
        </div>

        {/* Horizontal Scroller */}
        <div className="w-[100vw] overflow-hidden relative">
          <div
            className={`flex transition-transform duration-500 ${
              !isTransitioning && "transition-none"
            }`}
            style={{
              transform: `translateX(${
                -(currentIndex * (100 / cardsPerView)) + "%"
              })`,
            }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[33.33%] flex justify-center ${
                  currentIndex === index ? "scale-105 shadow-lg" : "scale-100"
                } transition-all`}
              >
                <div className="flex flex-col justify-center items-start rounded-lg shadow-md  bg-contact-card p-6 ml-10">
                  <h1 className="text-black font-semibold text-2xl">
                    {testimonial.text}
                  </h1>
                  <div className="flex flex-row justify-between items-center mt-5">
                    <img
                      src={profile}
                      alt="profile"
                      className="w-[50px] h-[50px] object-contain"
                    />
                    <div className="ml-4">
                      <h1 className="text-black font-semibold text-2xl">
                        {testimonial.name}
                      </h1>
                      <p className="text-black font-semibold text-xl mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center mt-6">
          {Array.from({
            length: testimonials.length,
          }).map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 mx-1 rounded-full ${
                currentIndex % testimonials.length === index
                  ? "bg-yellow-500"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimony;




