import { FC } from 'react';
import Hero1 from '../components/Hero1';
import { RiGraduationCapFill, RiCodeBoxFill, RiTeamFill } from "react-icons/ri";
import FacultySlider from '../components/FacultySlider';
import Footer from '../components/Footer';

type About = {
  img: React.ReactElement; // JSX is a global namespace in React projects
  title: string;
  desc: string;
};

const array: About[] = [
  {
    img: <RiGraduationCapFill className='size-12'/>,
    title: "Education",
    desc: "Bachelor's degree in Computer Science with a focus on software development and modern web technologies.",
  },
  {
    img: <RiCodeBoxFill  className='size-12' />,
    title: "Experience",
    desc: "2+ years of experience building responsive, user-friendly web applications using React, Vue, and Node.js.",
  },
  {
    img: <RiTeamFill  className='size-12'/>,
    title: "Team Player",
    desc: "Collaborative and communicative, experienced in working with agile teams to deliver high-quality products.",
  },
];


const About: FC = () => {
  return <>
  <Hero1 />
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
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="relative w-full h-72 md:h-80">
            <img
              src="/about1.jpg"
              alt="IVY Institute"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
    <section className='bg-[#f5f4f0] py-5'>
      <div  className='text-center'>
        <h1>Why Choose our Institute</h1>
        <p>Lorem ipsum dolor sit amet consecteolor voluptatibuTemporibus esse nostrum sunt ad!</p>
      </div>
      <div className='flex items-center justify-around  my-5 p-2  py-4'>
        {array.map((item , index)=> (
          <div className='shadow-sm text-center w-[30%] flex items-center justify-center flex-col' key={index}>
            <div className='w-[100px]  h-[100px]  rounded-full shadow-lg flex  items-center justify-center'>
              {item.img}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div  className="w-full hero-section h-32 bg-cover bg-center relative box-content my-5"
    style={{
      backgroundImage: "url('/about2.jpg')",
    }}>
        <div className="flex items-center justify-around h-full text-white z-20 relative">
          <div className='text-center'>
            <h1 className='text-5xl'>98%</h1>
            <h3>Success Rate</h3>
          </div>
          <div className='text-center'>
            <h1 className='text-5xl'>126</h1>
            <h3>Employees</h3>
          </div>
          <div className='text-center'>
            <h1 className='text-5xl'>10</h1>
            <h3>Years</h3>
          </div>
          <div className='text-center'>
            <h1 className='text-5xl'>7123</h1>
            <h3>Students</h3>
          </div>
        </div>
    </div>

    <FacultySlider/>
    <div className='mt-4'>

    <Footer/>
    </div>

  </>;
};

export default About;
