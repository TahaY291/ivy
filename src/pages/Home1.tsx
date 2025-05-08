import {FC} from "react"
import Hero from "../components/Hero"
import CourseCard from "../components/CourseCard";
import { FaCheck } from "react-icons/fa";
import EventsAndBlogs from "../components/EventsAndBlogs";
import ExploreIvy from "../components/ExploreIvy";
import LatestNews from "../components/LatestNews";
import Lenovo from "../components/Lenovo";
import Footer from "../components/Footer";

const courseData = [
    {
      title: "Digital Marketing & SEO",
      image: "course2.jpg",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    },
    {
      title: "Frontend Web Development",
      image: "/course3.jpg",
      description: "Build stunning UIs using React, Tailwind, and more.",
    },
    {
      title: "Backend Development",
      image: "/baloon.jpg",
      description: "Learn Node.js, Express, and database integration.",
    },
    {
      title: "UI/UX Design",
      image: "/writing.jpg",
      description: "Design intuitive interfaces and improve user experience.",
    },
    {
      title: "Python Programming",
      image: "/js.jpg",
      description: "Master Python for automation, web, and data science.",
    },
    {
      title: "Graphic Designing",
      image: "/html.jpg",
      description: "Create visual content using Adobe tools.",
    },
    {
      title: "App Development",
      image: "/nodejs.jpg",
      description: "Develop Android and iOS apps with modern frameworks.",
    },
    {
      title: "Cloud & DevOps",
      image: "/ps.jpg",
      description: "Learn cloud deployment, CI/CD, Docker, and Kubernetes.",
    },
  ];

  const testimonials = [
    {
      image: '/test1.jpg', // Replace with your actual image paths
      name: 'Mitchel John',
      country: 'Turkey',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh felis, luctus nec semper nec, egestas sit amet felis. Ut scelerisque blandit nisi sed hendrerit. Suspendisse vel accumsan quam.',
    },
    {
      image: '/test2.jpg',
      name: 'Mitchel John',
      country: 'Turkey',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh felis, luctus nec semper nec, egestas sit amet felis. Ut scelerisque blandit nisi sed hendrerit. Suspendisse vel accumsan quam.',
    },
    {
      image: '/test3.jpg',
      name: 'Mitchel John',
      country: 'Turkey',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh felis, luctus nec semper nec, egestas sit amet felis. Ut scelerisque blandit nisi sed hendrerit. Suspendisse vel accumsan quam.',
    },
  ];
  

const Home1: FC =()=>{
    return (
        <>
            <Hero className="justify-start" />
            <section className="px-6 py-12 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2">
          <div className="border-l-4 border-green-500 pl-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              <span className="font-bold">WHY CHOOSE US</span>
            </h2>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">About IVY Institute</h3>
          <p className="text-sm text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur nulla, eu sagittis felis turpis eget nisl. 
            Adipiscing elit. Quisque vitae ipsum pretium, sagittis felis quis, placerat felis. Sed 
            et pulvinar diam, at porttitor enim. Morbi risus est, interdum augue id, vestibulum 
            placerat enim. Maecenas luctus velit magna, sed fermentum lorem venenatis sit amet. 
            Proin congue metus ut volutpat faucibus. Fusce auctor, ex nec placerat aliquet, est 
            venenatis nulla, eu sagittis felis turpis eget nisl.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="relative w-full h-72 md:h-80">
            <img
              src="/home1.jpg"
              alt="IVY Institute"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute  top-[4%] left-[5%] w-[90%] h-[90%] border-2 border-dashed border-white"></div>
          </div>
        </div>
      </div>
    </section>

    <section>
        <h1 className="font-serif text-center">Feature Courses</h1>
        <div className="flex items-center justify-around gap-5 flex-wrap">
        {courseData.map((item, index)=>(
            <CourseCard key={index} title={item.title} image={item.image} description={item.description} />
        ))}
        </div>
    </section>
          <section
            className="hero-section   max-w-[100%] relative w-screen min-h-screen bg-cover bg-center box-content pb-20"
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
            <div className="relative z-20 bg-[#0b1043] w-[90%] mx-auto text-white py-16 rounded-lg shadow-lg">
              <div className="flex justify-center max-md:flex-col gap-12 px-4 sm:px-6 lg:px-8">
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

          <section className="bg-white py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">OUR TESTIMONIAL</h2>
        <p className="text-gray-600 text-sm md:text-base">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white max-w-sm w-full p-6 rounded-md shadow-md text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{item.country}</p>
            <p className="text-gray-600 text-sm mb-4">{item.review}</p>
            <div className="text-yellow-400 text-lg flex justify-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <EventsAndBlogs />

    <div className="p-4 my-4">
        <div>
            <h1 className="font-serif text-center">Gallery</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto dignissimos repellat similique numquam saepe neque nam eligendi placeat voluptatem.</p>
        </div>
        <ExploreIvy />
    </div>

    <LatestNews />
    <Lenovo/>
    <Footer/>
        </>
    )
}

export default Home1