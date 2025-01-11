import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";
import box5 from "../assets/box5.png";
import box6 from "../assets/box6.png";

function Services() {
  const services = [
    {
      image: box1,
      title: "Custom Product Development",
      description: "Tailored Solutions to Meet Unique Business Requirements",
    },
    {
      image: box2,
      title: "Website Development",
      description: "Static, Dynamic, and E-commerce Solutions for All Needs",
    },
    {
      image: box3,
      title: "Mobile App Development",
      description:
        "Cross-Platform and Native Mobile Applications for iOS & Android",
    },
    {
      image: box4,
      title: "Automation Software",
      description: "Efficient, Custom, and Scalable Solutions for All Needs",
    },
    {
      image: box5,
      title: "Desktop App Development",
      description: "Robust, Custom, and Scalable Solutions for All Needs.",
    },
    {
      image: box6,
      title: "Artificial Intelligence Solutions",
      description: "Innovative, Scalable, and Tailored for All Needs.",
    },
  ];

  return (
    <section id="services-section" className="bg-white h-full px-4 mb-0 pb-0 ">
      <div className="flex flex-col items-center md:mx-8">
        <div className="flex flex-row justify-center py-3 px-6 bg-yellow-300 relative my-12 md:my-24">
          <h1 className="font-bold underline text-3xl md:text-5xl relative z-10 text-center">
            OUR SERVICES
          </h1>
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath:
                "polygon(5% 50%, 0% 5%, 0% 95%, 5% 50%, 95% 50%, 100% 95%, 100% 5%, 95% 50%)",
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105"
            >
              <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-300 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
              <div className="relative flex flex-col justify-center items-center h-full p-6 text-center">
                <div className="mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>
                <h2 className="font-bold text-lg sm:text-xl mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
