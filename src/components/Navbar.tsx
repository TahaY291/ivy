import { FC } from "react";
import { FaPhoneAlt, FaEnvelope, FaSearch, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `hover:text-green-400 cursor-pointer no-underline max-lg:text-[14px] transition-colors duration-200 ${
      isActive ? "text-green-400" : "text-white"
    }`;

  return (
    <div className="w-full relative z-50 ">
      <div className="text-white text-sm px-4 flex justify-between items-center mx-10 max-lg:mx-8 max-md:mx-6 border-b border-white/30 ">
        <div className="flex gap-4 max-md:hidden">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-xs" /> NEED HELP? CALL US NOW: (+586) 30
            85 409.
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-xs" /> hello@eduma.com
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hover:text-green-400 cursor-pointer">
            example@gmail.com
          </span>
          <div className="flex box-border">
            <FaSearch className="cursor-pointer hover:text-green-400 border-l  px-4 size-12 border-white/30" />
            <FaUser className="cursor-pointer hover:text-green-400 border-l px-4 size-12 border-white/30" />
          </div>
        </div>
      </div>

      <div className="text-white px-6 py-2 mx-6 max-lg:mx-4 max-md:mx-2 flex justify-between items-center relative">
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img
              src="/navbarLogo.png"
              alt="Ivy Logo"
              className="h-24 max-lg:h-18 max-md:h-16 max-sm:h-14 cursor-pointer"
            />
          </NavLink>
        </div>

        <ul className="flex items-center gap-6 max-lg:gap-2 text-sm max-lg:text-[14px] font-medium max-md:hidden">
        <li className="relative flex items-center space-x-1">
  {/* Home link – no dropdown trigger */}
  <NavLink
    to="/"
    className={({ isActive }) =>
      `${navLinkClass({ isActive })} text-white no-underline`
    }
  >
    Home
  </NavLink>

  {/* ▼ Arrow is the only dropdown trigger */}
  <div className="relative group">
    <span className="text-xs cursor-pointer text-white">▼</span>

    {/* Dropdown only shows when hovering on the arrow (group) */}
    <div className="absolute top-5 -left-14 mt-1 hidden group-hover:flex flex-col bg-black/30 text-white rounded w-36 py-1 z-10">
      <NavLink
        to="/home1"
        className="px-4 py-2 hover:bg-black/50 no-underline text-white"
      >
        Home1
      </NavLink>
    </div>
  </div>
</li>


          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => navLinkClass({ isActive })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) => navLinkClass({ isActive })}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => navLinkClass({ isActive })}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => navLinkClass({ isActive })}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => navLinkClass({ isActive })}
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apply"
              className="bg-green-500 hover:bg-green-600 text-white max-lg:text-[16px] no-underline rounded-full px-4  py-2 transition-all"
            >
              APPLY NOW
            </NavLink>
          </li>
        </ul>
        <div className="hidden max-md:block">
          <NavLink
            to="/apply"
            className="bg-green-500 hover:bg-green-600 text-white max-lg:text-[16px] no-underline rounded-full px-4 max-md:px-1 max-md:py-1 max-md:text-sm py-2 transition-all"
          >
            APPLY NOW
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
