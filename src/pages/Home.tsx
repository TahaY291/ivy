import { FC } from "react";
import Main from "../components/Hero";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdInsertPageBreak } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import Slider from "../components/slider/Slider";
import EventsAndBlogs from "../components/EventsAndBlogs";
import ExploreIvy from "../components/ExploreIvy";
import Lenovo from "../components/Lenovo";
import Footer from "../components/Footer";

const courses = [
  {
    title: "Content Writing",
    image: "/hero.png",
    icon: <MdInsertPageBreak className="size-10" />,
  },
  {
    title: "Business Admin",
    image: "/course2.jpg",
    icon: <LuBriefcaseBusiness className="size-10" />,
  },
  {
    title: "Graphics Design",
    image: "/course3.jpg",
    icon: <SlScreenDesktop className="size-10" />,
  },
  {
    title: "Digital Marketing",
    image: "/course4.jpg",
    icon: <SlScreenDesktop className="size-10" />,
  },
];

const Home: FC = () => {
  return (
    <>
      <Main />
      <section className="w-full flex items-center justify-around py-6 ">
        {/* Left: News Highlight */}
        <div className="flex flex-col gap-4 basis-[30%]">
          <div className="relative ">
            <img src="/check.png" alt="News" className="rounded shadow-lg" />
            <div className="absolute duration-200 group top-2 left-2 hover:bg-white bg-green-600 text-white p-2 text-center text-xs font-bold rounded cursor-pointer">
              <p className="text-2xl group-hover:text-green-500 text-white leading-tight	">
                02
              </p>
              <p className="text-white group-hover:text-green-500 text-lg leading-tight	">
                DEC 2022
              </p>
            </div>
          </div>
          <h2 className="font-semibold text-lg">
            Introduction Week: How Will You Enjoy Summer School
          </h2>
          <div className="text-sm text-gray-600 flex gap-4">
            <span className="flex items-center gap-1">
              <FaClock /> 8:00 PM
            </span>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> Mikeal Chios, London
            </span>
          </div>
        </div>

        {/* Middle: Latest News */}
        <div className="basis-[30%]">
          <h3 className="font-bold text-2xl mb-4 font-serif">Latest News</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li className="flex flex-col gap-4 border-b pb-2">
              <span>8 ways to keep your heart forever young</span>
              <span className="text-green-600 text-xs flex items-center gap-1">
                <FaCalendarAlt /> Dec 27, 2022
              </span>
            </li>
            <li className="flex  flex-col gap-4 border-b pb-2">
              <span>How Drugs Alert The Brain</span>
              <span className="text-green-600 text-xs flex items-center gap-1">
                <FaCalendarAlt /> Nov 27, 2022
              </span>
            </li>
            <li className="flex flex-col gap-4 border-b pb-2">
              <span>Red-Green Colour Blindness</span>
              <span className="text-green-600 text-xs flex items-center gap-1">
                <FaCalendarAlt /> Oct 27, 2022
              </span>
            </li>
            <li className="flex flex-col gap-4 border-b pb-2">
              <span>Environmental Awareness</span>
              <span className="text-green-600 text-xs flex items-center gap-1">
                <FaCalendarAlt /> Sep 27, 2022
              </span>
            </li>
          </ul>
        </div>

        {/* Right: Why Choose Us */}
        <div className="basis-[30%]">
          <h3 className="font-bold text-2xl mb-2 font-serif">Why Choose Us</h3>
          <p className="text-sm text-gray-700 mb-2">
            <strong>About IVY Institute</strong>
          </p>
          <p className="text-md  text-gray-600 leading-relaxed">
            Lorem ipsum dolor siamet,consectetur adipiscing elit. Quisque vitae
            ipsum pretium, sagittis felis quis, placerat felis. Sed et pulvinar
            diam, at porttitor enim. Morbi risus est, interdum augue id,
            vestibulum placerat eni Maecenas luctus velit magna, sed fermentum
            lorem venenatis sit amet. Proi congue metus et volutpat faucibus.
            Fusauctor, ex nec placerat aliquet, est venenatis nulla, eu sagittis
            felis turpis eget nisl. metus et volutpat faucibus. Fusauctor, ex
            nec placerat aliquet, est venenatis nulla, eu sagittis felis turpis
            eget nisl. nulla, eu sagittis felis turpis eget nisl.
          </p>
        </div>
      </section>

      <section className="w-full py-10 box-border">
        <h2 className="text-4xl font-bold text-center mb-10 font-serif">
          Course Collection
        </h2>
        <div className="flex justify-around w-[95%] m-auto   gap-5">
          {courses.map((course, index) => (
            <div
              key={index}
              className="text-center w-full  rounded-lg overflow-hidden bg-white relative"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover shadow-md hover:scale-110 duration-150 cursor-pointer"
              />
              <div className="bg-white w-[80px] flex items-center justify-center h-[80px] rounded-full shadow-lg absolute top-[42%] left-[39%]">
                {course.icon}
              </div>
              <h3 className="font-semibold mt-10">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Lorem Ipsum Dolor Sit Amet
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="hero-section  max-w-[100%] relative w-screen min-h-screen  bg-cover bg-center box-content pb-20"
        style={{ backgroundImage: `url('/hero.png')` }} // ← Use your own image path
      >
        {/* Content over image + dark overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-12">
          <p className="text-white text-sm uppercase mb-2">Our Goals To</p>
          <h2 className="text-green-400 text-4xl md:text-5xl font-bold mb-12">
            Educate The Leaders Of Enterprises
          </h2>

          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {[
              { value: "98%", label: "Success Rate" },
              { value: "126", label: "Employees" },
              { value: "10", label: "Years" },
              { value: "7123", label: "Students" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-white text-5xl font-bold">
                  {stat.value}
                </span>
                <span className="text-white text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Blue Section on image */}
        <div className="relative z-20 bg-[#0b1043] w-[80%] mx-auto text-white py-16 rounded-lg shadow-lg">
          <div className="flex justify-center max-md:flex-col gap-12 sm:px-6 lg:px-8">
            {/* Working Hours */}
            <div className="w-full sm:w-1/3">
              <h3 className="text-lg font-semibold mb-4">WORKING HOURS</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { day: "Monday", time: "8:00 - 8:40" },
                  { day: "Tuesday", time: "8:00 - 8:40" },
                  { day: "Wednesday", time: "8:40 - 9:20" },
                  { day: "Thursday", time: "8:20 - 9:00" },
                  { day: "Friday", time: "9:00 - 9:40" },
                  { day: "Saturday", time: "8:40 - 9:20" },
                  { day: "Sunday", time: "Holiday" },
                ].map((wh) => (
                  <li key={wh.day} className="flex justify-between">
                    <span>{wh.day}</span>
                    <span
                      className={wh.time === "Holiday" ? "text-green-400" : ""}
                    >
                      {wh.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="w-full sm:w-1/3">
              <h3 className="text-lg font-semibold mb-4">WHY CHOOSE US</h3>
              <p className="text-sm text-gray-300 font-semibold mb-2">
                About IVY Institute
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  "Curriculum & Instruction Start Lorem ipsum dolor sit amet,",
                  "Student Support Service Lorem ipsum dolor sit amet,",
                  "Human Resource ED Center Lorem ipsum dolor sit amet,",
                  "Early Childhood Center Lorem ipsum dolor sit amet,",
                  "Auditorium with Stage Lorem ipsum dolor sit amet,",
                  "ED Middle School Lorem ipsum dolor sit amet,",
                  "Three Athletical fields Lorem ipsum dolor sit amet,",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCheck className="mt-1 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Here */}
            <div className="w-full sm:w-1/3">
              <h3 className="text-lg font-semibold mb-4">SUBSCRIBE HERE</h3>
              <form className="space-y-4 text-sm">
                {[
                  { placeholder: "Your Name*", type: "text" },
                  { placeholder: "Your Email*", type: "email" },
                  { placeholder: "Contact Number*", type: "tel" },
                  { placeholder: "Your City", type: "text" },
                ].map((field, idx) => (
                  <input
                    key={idx}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="px-4 w-[90%] py-2 rounded bg-[#1a214a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                ))}
                <button
                  type="submit"
                  className="w-[90%] bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
                >
                  Get It Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Slider />
      <EventsAndBlogs />

      <div className=" p-6 bg-white text-black">
        <div className="lg:col-span-1 space-y-4">
          <div className="flex gap-5 items-baseline">
          <div className="flex items-baseline justify-between basis-1/2">
          <div>
            <p className="uppercase text-sm">All The Time</p>
            <h2 className="text-2xl font-bold leading-tight">
              Explore IVY Institute
            </h2>
          </div>
          <div className="border-x px-3 flex items-baseline flex-col">
            <p className="text-4xl font-bold leading-6">24</p>
            <p className="text-sm uppercase ">Hours</p>
          </div>
          </div>
          <div className="basis-1/2">
            <p className="text-sm">
              There's Always Something Amazing Happening At Michigan. Whether
              It's On Campus Or Around The World, Our Students, Staff And Alumni
              Are Out Seizing The Day As Shown In The Slideshow Below. Happy
              School.
            </p>
          </div>
        </div>
          </div>
        <ExploreIvy />
        <Lenovo />
      </div>
        <Footer />
    </>
  );
};

export default Home;
