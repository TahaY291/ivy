import { useState } from "react";

type FacultyMember = {
  name: string;
  role: string;
  image: string;
};

const facultyData: FacultyMember[] = [
  {
    name: "Mr DEF",
    role: "Designer",
    image: "/test1.jpg",
  },
  {
    name: "Mr DEF",
    role: "Designer",
    image: "/slider2.jpg",
  },
  {
    name: "Mr ABC",
    role: "Developer",
    image: "/slider1.jpg",
  },
  {
    name: "Mr JKL",
    role: "Designer",
    image: "/test3.jpg",
  },
  {
    name: "Mr GHI",
    role: "SEO",
    image: "/explore4.jpg",
  },
  {
    name: "Mr JKL",
    role: "Designer",
    image: "/explore5.jpg",
  },
  {
    name: "Mr ABC",
    role: "Developer",
    image: "/explore6.jpg",
  },
  {
    name: "Mr GHI",
    role: "SEO",
    image: "/test2.jpg",
  },
];

const itemsPerPage = 4;

const FacultySlider: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pageCount = Math.ceil(facultyData.length / itemsPerPage);

  const paginatedData = facultyData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div
      className="relative bg-cover bg-top text-white py-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/check.png')",
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">Our Faculty</h2>

      <div className="flex justify-center gap-6 flex-wrap px-4">
        {paginatedData.map((person, index) => (
          <div
            key={index}
            className="w-72 bg-white text-black rounded shadow-md overflow-hidden"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{person.name}</h3>
              <p className="text-sm text-gray-500">{person.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            className={`p-0 h-3 w-3 rounded-full ${
              index === currentPage ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentPage(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FacultySlider;
