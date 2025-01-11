import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   const scrollToSection = (id:any) => {
    console.log("called")

     const section = document.getElementById(id);
     if (section) {
       section.scrollIntoView({ behavior: "smooth" });
     }
     setIsMenuOpen(false); 
   };

     const menuItems = [
       {name: "Home", id: "home-section"},
       { name: "Services", id: "services-section" },
       { name: "Products", id: "products-section" },
       { name: "About", id: "about-section" },
       { name: "Contact", id: "contact-section" },
     ];

  return (
    <nav className="bg-white py-3 px-4 md:px-10 sticky top-0  backdrop-blur-md bg-white/30 shadow-lg z-50 border-b border-white/20">
      <div className="flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-1 hover:cursor-pointer" onClick={()=>scrollToSection("home-section")}>
          <h5 className="font-bold text-3xl md:text-5xl text-black">8</h5>
          <div className="flex flex-col leading-none justify-center">
            <h5 className="text-xs md:text-base font-bold text-black md:-mb-1">
              Bits
            </h5>
            <h5 className="text-xs md:text-base font-bold text-black -mt-1">
              Monk
            </h5>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg relative group"
        >
          <div className="relative transition-all duration-300 ease-in-out">
            <div
              className={`absolute transition-all duration-300 ${
                isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            >
              <GiHamburgerMenu size={25} />
            </div>
            <div
              className={`transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            >
              <IoCloseSharp size={25} />
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {menuItems.map(
            (item) =>
              item.id !== "home-section" && ( // Only render the button if the ID is not "home-section"
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-black hover:text-white font-bold text-base lg:text-lg px-4 lg:px-6 py-2 rounded-3xl hover:bg-button-color hover:cursor-pointer active:scale-95 active:bg-gray-300 transition-all duration-200"
                >
                  {item.name}
                </button>
              )
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* <div
        className={`transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } md:hidden flex-col mt-4 space-y-2`}
      >
        {["Services", "Products", "About", "Contact"].map((item) => (
          <button
            key={item}
            className="w-full text-left text-black hover:text-white font-bold text-base px-4 py-2 rounded-3xl hover:bg-button-color hover:cursor-pointer active:scale-95 active:bg-gray-300 transition-all duration-200"
          >
            {item}
          </button>
        ))}
      </div> */}

      <div
        className={`absolute left-0 right-0 bg-white px-4 py-2 transform transition-all duration-300 ease-in-out shadow-lg   ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } md:hidden flex-col space-y-2 z-50`}
      >
        {menuItems.map(
          (item) =>
            item.id !== "home-section" && (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left text-black hover:text-white font-bold text-base px-4 py-2 rounded-3xl hover:bg-button-color hover:cursor-pointer active:scale-95 active:bg-gray-300 transition-all duration-200"
              >
                {item.name}
              </button>
            )
        )}
      </div>
    </nav>
  );
};

export default Navbar;