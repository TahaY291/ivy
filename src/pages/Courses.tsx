import { Link } from "react-router-dom";
import Hero1 from "../components/Hero1";
import { FaCalendarAlt } from "react-icons/fa";
import { MdInsertPageBreak } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { LuBriefcaseBusiness } from "react-icons/lu";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";



const courses = [
  {
    id: "python",
    title: "Learn Python & Interactive Python",
    category: "Programming",
    rating: 0.0,
    image: "/baloon.jpg",
    price: 49.99, // Added price
    description:
      "Welcome to this Python Basics course. Here, you'll be guided step-by-step to understand Python fundamentals, syntax, and basic programming logic through interactive examples.",
    certification:
      "After completing the course, you'll be awarded a certificate showcasing your skills in Python and your ability to build simple applications.",
    learningOutcomes: [
      "Understand Python syntax and basic programming logic",
      "Write and execute Python scripts",
      "Work with variables, loops, and conditionals",
      "Handle input/output and simple data structures",
      "Use Python in interactive environments",
    ],
    content: [
      { title: "Course Introduction", duration: "1 min", isPreview: true },
      { title: "Basic Syntax", duration: "2 mins", isPreview: true },
      { title: "Working with Variables", duration: "2 mins", isPreview: false },
      { title: "Control Flow", duration: "3 mins", isPreview: false },
      { title: "Functions", duration: "2 mins", isPreview: false },
      { title: "Conclusion", duration: "1 min", isPreview: false },
    ],
    instructors: [
      {
        name: "Mr. Jamil",
        role: "Senior Software Engineer",
        graduation: "Graduated from COMSATS University Islamabad",
        image: "/explore4.jpg",
      },
      {
        name: "Miss Nabeel",
        role: "Python Developer",
        graduation: "Graduated from COMSATS University Islamabad",
        image: "/explore3.jpg",
      },
    ],
    reviews: {
      average: 0.0,
      breakdown: {
        "5": "0%",
        "4": "0%",
        "3": "0%",
        "2": "0%",
        "1": "0%",
      },
    },
    relatedCourses: ["data_science", "python_for_beginners", "advanced_python"],
  },
  {
    id: "javascript",
    title: "Modern JavaScript Fundamentals",
    category: "Web Development",
    rating: 4.8,
    image: "/course11.jpg",
    price: 59.99, // Added price
    description:
      "Master the fundamentals of JavaScript, the language of the web. Learn modern ES6+ features, DOM manipulation, and asynchronous programming.",
    certification:
      "Earn a certificate demonstrating your proficiency in modern JavaScript concepts and browser APIs.",
    learningOutcomes: [
      "Understand JavaScript syntax and core concepts",
      "Work with modern ES6+ features",
      "Manipulate the DOM effectively",
      "Handle asynchronous operations",
      "Debug JavaScript applications",
    ],
    content: [
      {
        title: "Introduction to JavaScript",
        duration: "2 mins",
        isPreview: true,
      },
      {
        title: "Variables and Data Types",
        duration: "3 mins",
        isPreview: true,
      },
      { title: "Functions and Scope", duration: "4 mins", isPreview: false },
      { title: "Arrays and Objects", duration: "3 mins", isPreview: false },
      { title: "DOM Manipulation", duration: "5 mins", isPreview: false },
      { title: "Async JavaScript", duration: "4 mins", isPreview: false },
    ],
    instructors: [
      {
        name: "Mr. Ahmed",
        role: "Frontend Architect",
        graduation: "Graduated from FAST University",
        image: "/explore5.jpg",
      },
    ],
    reviews: {
      average: 4.8,
      breakdown: {
        "5": "85%",
        "4": "10%",
        "3": "3%",
        "2": "1%",
        "1": "1%",
      },
    },
    relatedCourses: ["react", "nodejs", "typescript"],
  },
  {
    id: "react",
    title: "React.js - The Complete Guide",
    category: "Frontend Development",
    rating: 4.9,
    image: "/course4.jpg",
    price: 69.99, // Added price
    description:
      "Learn React from the ground up. Build modern, scalable web applications with React hooks, context API, and React Router.",
    certification:
      "Certificate awarded for building production-ready React applications with best practices.",
    learningOutcomes: [
      "Build React applications from scratch",
      "Understand component-based architecture",
      "Manage state with hooks and context",
      "Implement routing in single-page applications",
      "Optimize React performance",
    ],
    content: [
      { title: "React Introduction", duration: "2 mins", isPreview: true },
      { title: "JSX Fundamentals", duration: "3 mins", isPreview: true },
      { title: "Components and Props", duration: "4 mins", isPreview: false },
      { title: "State and Lifecycle", duration: "5 mins", isPreview: false },
      { title: "Hooks in Depth", duration: "6 mins", isPreview: false },
      { title: "Advanced Patterns", duration: "4 mins", isPreview: false },
    ],
    instructors: [
      {
        name: "Ms. Sara",
        role: "React Specialist",
        graduation: "Graduated from LUMS",
        image: "/test2.jpg",
      },
      {
        name: "Mr. Ali",
        role: "UI/UX Engineer",
        graduation: "Graduated from NUST",
        image: "/test3.jpg",
      },
    ],
    reviews: {
      average: 4.9,
      breakdown: {
        "5": "90%",
        "4": "7%",
        "3": "2%",
        "2": "1%",
        "1": "0%",
      },
    },
    relatedCourses: ["javascript", "redux", "nextjs"],
  },
  {
    id: "nodejs",
    title: "Node.js - Backend Development",
    category: "Backend Development",
    rating: 4.7,
    image: "/course2.jpg",
    price: 64.99, // Added price
    description:
      "Learn to build scalable server-side applications with Node.js. Master Express, MongoDB, authentication, and deployment.",
    certification:
      "Certificate awarded for building RESTful APIs and backend services with Node.js.",
    learningOutcomes: [
      "Create server-side applications with Node.js",
      "Build RESTful APIs with Express",
      "Work with databases (MongoDB)",
      "Implement authentication and authorization",
      "Deploy Node.js applications",
    ],
    content: [
      { title: "Node.js Basics", duration: "2 mins", isPreview: true },
      { title: "Core Modules", duration: "3 mins", isPreview: true },
      { title: "Express Framework", duration: "4 mins", isPreview: false },
      { title: "Database Integration", duration: "5 mins", isPreview: false },
      { title: "Authentication", duration: "4 mins", isPreview: false },
      { title: "Deployment", duration: "3 mins", isPreview: false },
    ],
    instructors: [
      {
        name: "Mr. Usman",
        role: "Backend Engineer",
        graduation: "Graduated from UET Lahore",
        image: "/slider2.jpg",
      },
    ],
    reviews: {
      average: 4.7,
      breakdown: {
        "5": "80%",
        "4": "15%",
        "3": "3%",
        "2": "1%",
        "1": "1%",
      },
    },
    relatedCourses: ["javascript", "mongodb", "rest_api"],
  },
];

const Courses = () => {

  return (
    <>
      <Hero1 />

      <div className="flex flex-col max-w-[90%] mx-auto gap-5 box-content">
        <div className="my-[3%]">
          <h1 className="text-black">What you will learn...</h1>
          <p>
            Choose a Course, practice what you learn, and become an IT
            professional.
          </p>
        </div>
        <div className="flex justify-around">
          <div className="flex  flex-col  gap-10 border-r-1 pr-5  border-gray-400">
            <div className="">
              <div className="flex items-center gap-2">
                <div className="h-8 w-[2px] bg-green-500"></div>
                <h3>Search Course</h3>
              </div>
              <input
                type="text"
                className="px-2  py-1 rounded-none  outline-none"
                placeholder="search"
              />
              <button className="bg-green-500 px-2 py-1 w-full  rounded-none">
                Search
              </button>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-[2px] bg-green-500"></div>
                <h3>Quick Access</h3>
              </div>
              <input
                type="text"
                className="px-2  py-1 rounded-none  outline-none"
                placeholder="name"
              />
              <input
                type="text"
                className="px-2  py-1 rounded-none  outline-none"
                placeholder="phone"
              />
              <button className="bg-green-500 px-2 py-1 w-full  rounded-none">
                Access
              </button>
            </div>
            <div className="border-l-2 border-green-500 pl-3">
              <h2 className="text-lg font-semibold mb-2">Latest News</h2>
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="border-b pb-2 text-sm font-light">
                  Summer course starting from 1st June.
                </li>
                <li className="border-b pb-2 text-sm font-light">
                  New Exam Schedules for Diploma.
                </li>
                <li className="border-b pb-2 text-sm font-light">
                  Lorem ipsum dolor sit amet.
                </li>
                <li className="border-b pb-2 text-sm font-light">
                  Lorem ipsum dolor sit amet.
                </li>
                <li className="border-b pb-2 text-sm font-light">
                  Lorem ipsum dolor sit amet.
                </li>
                <li className="border-b pb-2 text-sm font-light">
                  Lorem ipsum dolor sit amet.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 basis-[60%]">
            <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
            <ul className="space-y-2">
              {courses.map((course) => (
                <Link
                  to={`/courses/${course.id}`}
                  state={course}
                  key={course.id}
                  className=" border border-gray-400 no-underline p-4 flex  gap-4  w-full  hover:shadow"
                >
                  <img
                    src={course.image}
                    className="w-[250px] h-[250px] object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl font-bold text-black">{course.title}</h3>
                    <span className="text-black">{course.category}</span>
                    <p>${course.price}</p>
                    <p>Course description:</p>
                    <p>{course.description}</p>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="w-full hero-section h-48 bg-cover bg-center relative box-content my-5"
        style={{
          backgroundImage: "url('/about2.jpg')",
        }}
      >
        <div className="flex items-center justify-around h-full text-white z-20 ">
          <div className="text-center flex flex-col items-center ">
            <FaCalendarAlt className="size-14" />
            <p className="text-white  text-lg">Success Rate</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <MdInsertPageBreak className="size-14" />
            <p className="text-white  text-lg">Employees</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <SlScreenDesktop className="size-14" />
            <p className="text-white  text-lg">Years</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <LuBriefcaseBusiness className="size-14" />
            <p className="text-white  text-lg">Students</p>
          </div>
        </div>

        <div className="my-10">
          <div className="text-center mb-10">
            <h1>Ready for class ?</h1>
            <p>The next cohort starts on August 16, 2018</p>
          </div>
          <div className="flex items-center w-[90%] justify-center mx-auto gap-5">
            <div className="border-1 border-gray-400 text-center py-4 ">
              <h3>Early admission deadline...</h3>
              <p className="w-[60%] mx-auto">
                April 15, 2018. When you apply, we’ll make a decision within 2-4
                weeks. Once you’re accepted, you can start open courses right
                away!
              </p>
            </div>
            <div className="border-1 border-gray-400 text-center py-4 ">
              <h3>Early admission deadline...</h3>
              <p className="w-[60%] mx-auto">
                April 15, 2018. When you apply, we’ll make a decision within 2-4
                weeks. Once you’re accepted, you can start open courses right
                away!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-7">
          <button  className="bg-green-500 text-center rounded-full px-10">Apply Now !</button>
          </div>
        </div>
      <FAQ />
      <Footer />
      </div>
    </>
  );
};

export default Courses;
