import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-300 p-4 z-10">
      <div className="flex justify-between items-center">
        <span className="text-blue-950 font-extrabold text-xl font-serif">
          Blog Spot
        </span>

        {/* Hamburger Menu Button */}
        <button
          className="text-blue-950 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,56a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56Zm0,64a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,120Zm-8,72H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          className={`md:flex md:space-x-16 text-blue-950 list-none font-mono ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <a href="#articles" className=" md:inline-block hover:text-blue-700 ">
              Articles
            </a>
          </li>
          <li>
            <a href="#podcast" className=" md:inline-block hover:text-blue-700 ">
              Podcast
            </a>
          </li>
          <li>
            <a href="#be-a-writer" className=" md:inline-block hover:text-blue-700 ">
              Be a writer
            </a>
          </li>
          <li>
            <a href="#talk-to-us" className=" md:inline-block hover:text-blue-700 ">
              Talk to us
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex space-x-3 hover:cursor-pointer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
            </svg>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
