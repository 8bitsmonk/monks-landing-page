import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";



const Footer = () => {


    const handleClick = (id:string) => {
      const selection = document.getElementById(id);
      if (selection) {
        selection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Element with id 'services-section' not found.");
      }
    };



    



  return (
    <footer className="relative w-full  md:-mt-24 -mt-5">
      {/* Curved Background */}
      <div className="absolute inset-0 bg-[#FFD54F] rounded-tl-[80px] md:rounded-tl-[150px] mb-0 pb-0" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">COMPANY</h2>
            <ul className="space-y-3">
              <li onClick={() => handleClick("about-section")}>
                <a className="hover:underline hover:cursor-pointer">About Us</a>
              </li>
              <li onClick={() => handleClick("contact-section")}>
                <a className="hover:underline hover:cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* Logo */}
            <div
              className="mt-12 hover:cursor-pointer"
              onClick={() => handleClick("home-section")}
            >
              <img src={logo} alt="8BitsMonk" className="h-24" />
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">OUR ADDRESS</h2>
            <address className="not-italic">
              WJ54+W7G, 17th Cross Rd,
              <br />
              Industrial Area, Stage 2,
              <br />
              BTM Layout,
              <br />
              Bengaluru, Karnataka
              <br />
              560076
            </address>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">CONTACT</h2>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <FaPhoneAlt size={20} />
                <a href="tel:+919xxxxxxxxx" className="hover:underline">
                  +91 9xxxxxxxxx
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <IoMdMailUnread size={20} />
                <a href="mailto:ceo@8bitsmonk.com" className="hover:underline">
                  ceo@8bitsmonk.com
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {/* <a href="#" className="hover:opacity-80">
                  <FaInstagram size={20} />
                </a> */}
                <a
                  href="https://x.com/8bitsmonk"
                  target="_blank"
                  className="hover:opacity-80 flex flex-row items-center hover:underline"
                >
                  <FaSquareXTwitter size={20} />
                  <p className="pl-2">x.com</p>
                </a>
                {/* <a href="#" className="hover:opacity-80">
                  <FaLinkedin size={20} />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
