import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `hover:text-green-400 cursor-pointer text-white no-underline transition-colors duration-200 ${
    isActive ? "text-green-400" : ""
  }`;

const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 right-4 z-50 bg-green-500 text-white p-2 rounded shadow-lg"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0b1043] z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start gap-6 p-6 text-sm font-medium text-white">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={navLinkClass}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={navLinkClass}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={navLinkClass}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apply"
              className="bg-green-500 hover:bg-green-600 text-white no-underline rounded-full px-4 py-2 transition-all"
            >
              APPLY NOW
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
