import { FC } from "react"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer: FC = () => {
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `hover:text-green-400 cursor-pointer text-white no-underline transition-colors duration-200 ${
          isActive ? "text-green-400" : ""
        }`;
  return (
    <footer className="bg-[#011c45] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img
              src="/navbarLogo.png"
              alt="Ivy Logo"
              className="h-24 cursor-pointer"
            />
          </NavLink>
        </div>
          <p className="text-gray-300">
            Lorem Ipsum Dolor Sit A Consectetur Adipiscing Elit. In Placerat Tellus Non Orci Viverra, At Cursus Pellentesque. Nullam Elementum Ante Quis Magna.
          </p>
        </div>

        {/* User Links */}
        <div className="border-r-1 max-md:border-r-0">
          <h3 className="font-semibold mb-2">User Links</h3>
          <ul className="flex flex-col  gap-1 text-sm font-medium ">
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
        </ul>
        </div>

        {/* Popular Tags */}
        <div>
          <h3 className="font-semibold mb-2">Popular Tags</h3>
          <ul className="space-y-1 text-gray-300">
            {["Short Courses", "Certifications", "Diploma", "Short Courses", "Certifications", "Diploma"].map((tag, idx) => (
              <li key={idx} className="hover:text-white">• {tag}</li>
            ))}
          </ul>
        </div>

        {/* Subscribe & Contact */}
        <div>
          <div className="flex mb-4 gap-2 items-center ">
            <input
              type="text"
              placeholder="Subscribe Here"
              className="w-full px-3 py-2 text-black bg-white rounded-l outline-none border-black"
            />
            <button className="bg-green-500 px-3 py-2 text-white rounded-r">➤</button>
          </div>

          <div className="flex space-x-4 mb-4">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
          </div>

          <p className="text-gray-300 mb-1">📞 041-1234567  •  0315-1234567</p>
          <p className="text-gray-300 flex items-center"><MdEmail className="mr-1" /> example123@gmail.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#00122d] text-center md:text-left px-6 py-3 flex flex-col md:flex-row justify-between items-center border-t border-blue-900">
        <p>CopyRight ©2024 Pratice. All Rights Reserved</p>
        <p>Designed By Csoftsystems</p>
      </div>
    </footer>
  );
};

export default Footer;
