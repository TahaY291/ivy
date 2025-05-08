import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/Home1";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Sidebar from "./components/Sidebar";
import CourseDetail from "./pages/CourseDetail";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <div className="absolute w-full">
      <Navbar />
    </div>
    <div className="z-50 relative hidden max-md:block">
    <Sidebar />
    </div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home1" element={<Home1/>} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
