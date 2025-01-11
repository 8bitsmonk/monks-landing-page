import loc from "../assets/loc.png";
import call from "../assets/call.png";
import email from "../assets/email.png";

function Contact() {
  return (
    <section
      id="contact-section"
      className="bg-white min-h-screen px-6 sm:px-10 py-10"
    >
      <div>
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative py-3 px-6 bg-yellow-300 my-4 md:my-12">
            <h1 className="font-bold underline text-2xl md:text-3xl lg:text-5xl relative z-10 text-center">
              CONTACT US
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

        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-36 md:mt-0">
          {/* Contact Information */}
          <div className="bg-contact-card p-6 rounded-lg shadow-md w-full lg:w-[47%] -mt-24 lg:mt-0">
            <h1 className="font-extrabold text-2xl lg:text-3xl">
              Contact 8bitsmonk
            </h1>
            <p className="font-medium mt-6 text-lg lg:text-2xl">
              Give us a call or drop a message, we will contact you within 24
              hours on business days. We will be happy to answer your questions.
            </p>
            <div className="flex items-start mb-4 mt-8">
              <img
                src={loc}
                alt="Location"
                className="w-[30px] h-[30px] mt-2 object-contain"
              />
              <p className="text-black font-medium ml-5 text-sm lg:text-base">
                WJ54+W7G, 17th Cross Rd, <br />
                Industrial Area, Stage 2, <br />
                BTM Layout, <br />
                Bengaluru, Karnataka 560076
              </p>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={call}
                alt="Call"
                className="w-[30px] h-[30px] object-contain"
              />
              <a
                href="tel:+919xxxxxxxx"
                className="text-black font-semibold ml-5 text-sm lg:text-base"
              >
                +91 9xxxxxxxx
              </a>
            </div>
            <div className="flex items-center">
              <img
                src={email}
                alt="Email"
                className="w-[30px] h-[30px] object-contain"
              />
              <a
                href="mailto:ceo@8bitsmonk.com"
                className="text-black font-semibold ml-5 text-sm lg:text-base"
              >
                ceo@8bitsmonk.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded-lg w-full lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h1>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="w-full p-4 rounded-lg bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email*"
                  required
                  className="w-full p-4 rounded-lg bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-lg bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message..."
                  rows={6}
                  className="w-full p-4 rounded-lg bg-gray-100 resize-none font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
