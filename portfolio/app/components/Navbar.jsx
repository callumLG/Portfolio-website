import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <h1 className="font-bold text-[20px] hover:text-indigo-300 transition duration-300 ease-in-out">
          CLG
        </h1>
      </div>
      <div>
        <ul className="flex space-x-4 text-[15px] mx-2">
          <li>
            <a
              href="#home"
              className="text-white hover:text-indigo-300 transform transition duration-300 ease-in-out "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-indigo-300 transform transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-indigo-300 transform transition duration-300 ease-in-out "
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-indigo-300 transform transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
