import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import links from "./data";
import menu from "../assets/menu.png"



const Navbar = () => {
  const [navbar_hamburger, showNavbar_hamburger] = useState(false);
  
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };                                                                             

  return (
    <>
      <div className={` ${classes.navbar_section} ${stickyClass}  w-full  z-10 `}>

        <nav className={`font-poppins text-[#E7E7E7]  bg-[#1A496A] lg:flex items-center justify-between px-10 rounded-3xl`}>
          <section className="flex  justify-between items-center">
            <div className="flex items-center">
              {" "}
              {/* <img
                className="m-2 rounded-3xl w-8 lg:w-10"
                src={" "}
                alt="logo"

              /> */}
              <h1 className="text-lg lg:text-2xl font-bold">
                <Link to="/">
                  Cloudegic <span className={classes.logoHeading}>Inc</span>
                </Link>
              </h1>
            </div>

           
    

            <img  src={menu}
              onClick={() => showNavbar_hamburger(!navbar_hamburger)}
              className=" w-8 h-8 text-2xl cursor-pointer lg:hidden"
            />
          </section>

          <section className={`${navbar_hamburger ? "visible" : "hidden"} py-2   lg:bg-[#1A496A] text-center lg:flex text-md xl:text-lg`}>
          <form className="max-w-sm px-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
            <ul className={`lg:mr-16 my-4 lg:flex justify-evenly`}>
              {links.map((item) => {
                return (
                  <li key={item.id} className="lg:mx-4">
                    <NavLink
                      onClick={() => {
                        if (navbar_hamburger)
                          showNavbar_hamburger(navbar_hamburger)
                        else showNavbar_hamburger(!navbar_hamburger)
                      }}
                      className={({ isActive }) =>
                        isActive ? `${classes.active}` : "inactive"
                      }
                      to={item.link}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
           
          </section>


        </nav>
      </div>
    </>
  );
};

export default Navbar;
