import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { CiSignpostDuo1 } from "react-icons/ci";
import { CgClose } from "react-icons/cg";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-gradient-to-r customHeight  text-white from-slate-900 via-gray-700 to-slate-800 shadow-lg shadow-slate-400  ">
      <div className="flex items-center justify-between  md:max-w-7xl mx-auto   h-16">
        <Link to="/" className=" mt-8 font-medium text-white text-3xl mx-9">
          <span className="text-red-500 text-4xl">g</span>oat
        </Link>

        <div className="flex items-center mt-8">
          <div className="hidden md:block mr-5   ">
            <div className="mr-12">
              <Link
                to="/features"
                className="px-3 mx-3 py-2 rounded-md  font-medium text-white text-md hover:text-orange-600 transition duration-100"
              >
                Home
              </Link>
              <Link
                to="/features"
                className="px-3 mx-3 py-2 rounded-md text-md font-medium text-white hover:text-orange-600"
              >
                Projects
              </Link>
              <Link
                to="/pricing"
                className="px-3 mx-3 py-2 rounded-md text-md font-medium text-white hover:text-orange-600"
              >
                About us
              </Link>
              <Link
                to="/blog"
                className="px-3 py-2 mx-3 rounded-md text-md font-medium text-white hover:text-orange-600"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 mx-3 rounded-md text-md font-medium text-white hover:text-orange-600"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 relative left-9 border-2 customBorder rounded-full text-md font-semibold text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* <Link to="/" className="px-3 py-2 rounded-md text-md font-medium text-white">
                Instagram
              </Link>
              <Link to="/" className="px-3 py-2 rounded-md text-md font-medium text-white">
                LinkedIn
              </Link> */}

          <div className="  items-center hidden md:flex">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-md font-medium text-white"
            >
              <AiFillLinkedin className="h-6 w-6" />
            </Link>
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-md font-medium text-white"
            >
              <AiFillInstagram className="h-6 w-6" />
            </Link>
          </div>

          <div className=" flex items-center relative  right-7 justify-end md:hidden ">
            {showMenu ? (
              <CgClose
                onClick={() => setShowMenu(!showMenu)}
                type="button"
                className="inline-flex mt-2 text-white  items-center h-12 w-12 justify-center p-3  rounded-md   focus:outline-none  transition duration-150 ease-in-out"
              >
                <span className="sr-only"></span>
              </CgClose>
            ) : (
              <CiSignpostDuo1
                onClick={() => setShowMenu(!showMenu)}
                type="button"
                className="inline-flex mt-2  items-center h-12 w-12 justify-center p-3  rounded-md   focus:outline-none  transition duration-150 ease-in-out"
              >
                <span className="sr-only"></span>
              </CiSignpostDuo1>
            )}
          </div>
        </div>
      </div>

      <div className="container mt-24 flex flex-col  w-full  p-4  ">
        <div className="mainContainer md:ml-48  max-w-xl p-2">
          <h1 className=" customLineHeight py-4  md:px-6 font-semibold space-y-6 my-3 ">
            FULL <span className="relative md:-left-2 -left-1">SERVICE</span> MARKETING AGENCY
            
          </h1>
          <div className="paragraphContainer mt-4">
          <p className="text-gray-400 max-w-lg md:mx-8  text-left md:text-lg  font-medium -mt-3 ">Google Developer Student Club Leads are passionate leaders at their universities who are dedicated to helping.</p>
        </div>
        </div>
       
        <div className="buttonSection max-w-md mt-4">
         
        <Link
              to=""
              className="custom_reverse relative top-3 mt-24 py-3 px-16 text-white font-medium mx-3 md:mx-60 my-5 "
            >
              Contact
            </Link>

        </div>
      </div>

      {showMenu && (
        <div className="md:hidden absolute px-3 py-8 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 top-24 left-8 customHeightnew max-w-xs mx-auto  shadow-slate-300">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <Link
              to="/features"
              className="block px-1 py-2 my-3  rounded-md text-4xl font-semibold text-white  hover:text-orange-600 transition duration-100"
            >
              Home
            </Link>
            <Link
              to="/pricing"
              className="block px-1 py-2 my-3 rounded-md text-4xl font-medium text-white  hover:text-orange-600 transition duration-100"
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className="block px-1 py-2 my-3 rounded-md text-4xl font-medium text-white  hover:text-orange-600 transition duration-100"
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="block px-1 py-2 my-3 rounded-md text-4xl font-medium text-white  hover:text-orange-600 transition duration-100"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-1 py-2 my-3 rounded-md text-4xl font-medium text-white  hover:text-orange-600 transition duration-100"
            >
              Blog
            </Link>

            <div className="flex justify-center">
              <Link
                to="/contact"
                className="px-24 py-3 mt-8 border-2 border-orange-600 rounded-full text-md font-semibold text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
