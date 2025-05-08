import { FC } from "react";
import Hero1 from "../components/Hero1";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Footer from "../components/Footer";

type Address = {
  name: string;
  address: string;
  description: string;
};

const campuses: Address[] = [
  {
    name: "IVY INSTITUTE - LONDON",
    address: "Po Box 1122, Milla Chock, London.",
    description: "Lorem ipsum dolor sit amet, adipiscing elit.",
  },
  {
    name: "IVY INSTITUTE - PARIS",
    address: "Po Box 1122, Milla Chock, London.",
    description: "Lorem ipsum dolor sit amet, adipiscing elit.",
  },
  {
    name: "IVY INSTITUTE - JAPAN",
    address: "Po Box 1122, Milla Chock, London.",
    description: "Lorem ipsum dolor sit amet, adipiscing elit.",
  },
  {
    name: "IVY INSTITUTE - CHINA",
    address: "Po Box 1122, Milla Chock, London.",
    description: "Lorem ipsum dolor sit amet, adipiscing elit.",
  },
  {
    name: "IVY INSTITUTE - TURKEY",
    address: "Po Box 1122, Milla Chock, London.",
    description: "Lorem ipsum dolor sit amet, adipiscing elit.",
  },
];

const Contact: FC = () => {
  return (
    <>
      <Hero1 />
      <div className="flex items-start justify-around my-10">
        <div className="border-1 border-gray-300 basis-[40%]">
          <div className="flex items-center justify-between px-4 border-b-1 border-gray-300  py-3">
            <div>
              <h4 className="font-bold">Adress</h4>
              <p className="text-sm">Po Box 1122, Millat Chock, London.</p>
            </div>
            <FaLocationDot />
          </div>
          <div className="flex items-center justify-between px-4 border-b-1 border-gray-300  py-3">
            <div>
              <h4 className="font-bold">Email</h4>
              <p className="text-sm">Example@gmail.com</p>
            </div>
            <IoMail />
          </div>
          <div className="flex items-center justify-between px-4 border-b-1 border-gray-300  py-3">
            <div>
              <h4 className="font-bold">Phone</h4>
              <p className="text-sm">+0900-78601</p>
            </div>
            <FaPhoneAlt />
          </div>
          <div className="flex items-center justify-between px-4  py-3">
            <div>
              <h4 className="font-bold">Find Us on</h4>
              <div className="flex  gap-2 items-center">
                <FaInstagram className="size-5" />
                <FaTwitterSquare className="size-6" />
                <FaYoutube className="size-7" />
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[50%] w-full p-4">
          <div className="pb-4">
            <h1 className="leading-3">Contact With Us</h1>
            <div className="w-[100px]  h-1 bg-green-500 pt-0 "></div>
          </div>
          <form className="flex gap-4 flex-col w-full  box-border">
            <div className="flex gap-4">
              <input
                type="text"
                className="px-3 py-1 border border-gray-300 rounded-none w-full box-border"
                placeholder="Name"
              />
              <input
                type="email"
                className="px-3 py-1 border border-gray-300 rounded-none w-full box-border"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                className="px-3 py-1 border border-gray-300 rounded-none w-full box-border"
                placeholder="Subject"
              />
              <input
                type="text"
                className="px-3 py-1 border border-gray-300 rounded-none w-full box-border"
                placeholder="Phone"
              />
            </div>
            <textarea
              rows={5}
              className="px-3 py-1 border border-gray-300 rounded-none w-full box-border resize-none"
              placeholder="Message..."
            ></textarea>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around md:flex-row">
        {/* Left side - Campus List with vertical scrollbar */}
        <div className="w-full md:w-1/3">
          <div className="flex items-center">
            <h2 className="text-lg font-bold uppercase mb-6">
              CAMPUSES DETAIL
            </h2>
            {/* Green vertical line */}
            <div className="h-6 w-1 bg-green-500 ml-2"></div>
          </div>

          {/* Campus list with vertical scrollbar */}
          <div className="h-96 overflow-y-auto pr-2 border-r border-gray-100">
            {campuses.map((campus, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-start">
                  <div className="mr-2 mt-1">
                    <div className="w-4 h-4 border border-black flex items-center justify-center text-xs">
                      ⬜
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase">
                      {campus.name}
                    </h3>
                    <p className="text-xs">{campus.address}</p>
                    <p className="text-xs text-gray-600">
                      {campus.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-[45%]">
          <img src="/map.png" className="object-cover p-7" alt="" />
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Contact;
