import { useLocation, useParams } from "react-router-dom";
import Hero1 from "../components/Hero1";
import Footer from "../components/Footer";

interface Instructor {
  name: string;
  role: string;
  graduation: string;
  image: string;
}

interface ContentItem {
  title: string;
  duration: string;
  isPreview: boolean;
}

interface Course {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  certification: string;
  learningOutcomes: string[];
  content: ContentItem[];
  instructors: Instructor[];
  reviews: {
    average: number;
    breakdown: Record<string, string>;
  };
}

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const location = useLocation();

  const course = location.state as Course;
  if (!course || course.id !== courseId) {
    return (
      <div className="p-6 text-center text-red-500">
        Course data not found. Please go to the{" "}
        <a href="/courses" className="text-blue-600 underline">
          Courses
        </a>{" "}
        page first.
      </div>
    );
  }

  return (
    <>
      <Hero1 />

      <div>
        <h1 className="m-[3%]">{course.title}</h1>
        <div className="flex">
          <div className="mx-auto p-6 basis-[70%]">
            <div className="flex items-center m my-4">
              <div className="flex items-center gap-3 pr-8">
                <img
                  src={course.instructors[0].image}
                  className="w-20 h-20 rounded-full"
                  alt=""
                />
                <div>
                  <span className="text-gray-600">Teacher</span>
                  <h3>{course.instructors[0].name}</h3>
                </div>
              </div>
              <div className="px-8 border-x border-gray-500">
                <span className="text-gray-500 mb-4">Category</span>
                <p>{course.category}</p>
              </div>
              <div className="pl-8">
                <span className="text-gray-500 mb-4">Review</span>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>

            <img
              src={course.image}
              alt="Course banner"
              className="w-full h-[80vh] object-cover mb-6"
            />

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Course Description
              </h2>
              <p className="text-[16px] pl-3 font-[400]">
                {course.description}
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Certification</h2>
              <p className="text-[16px] pl-3 font-[400]">
                {course.certification}
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Learning Outcomes</h2>
              <ul className="list-disc ">
                {course.learningOutcomes.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-600 text-[16px] pl-3 font-[400]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="w-full  mx-auto mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-semibold">COURSE CONTENT</h2>
                <span className="text-sm text-gray-500">
                  Total Learning 6 Lessons / 1 Quiz · 35 Weeks
                </span>
              </div>

              <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
                <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                  <h3 className="font-medium">
                    Learn Python & Interactive Python
                  </h3>
                  <span className="text-sm text-gray-500">0/7</span>
                </div>

                <div className="divide-y">
                  <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">1.1</span>
                      <span className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-green-500 text-white text-xs">
                      Complete
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">1.1</span>
                      <span className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-green-500 text-white text-xs">
                      Complete
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">1.1</span>
                      <span className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-green-500 text-white text-xs">
                      Complete
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">1.1</span>
                      <span className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </div>
                    <div className="p-1 rounded-md bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-gray-400"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">1.1</span>
                      <span className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </div>
                    <div className="p-1 rounded-md bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-gray-400"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">1.1</span>
                      <span className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </div>
                    <div className="p-1 rounded-md bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="text-gray-400"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Instructors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.instructors.map((inst, idx) => (
                  <div
                    key={idx}
                    className="p-4 border rounded-lg flex gap-4 items-center"
                  >
                    <img
                      src={inst.image}
                      alt={inst.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{inst.name}</h3>
                      <p className="text-sm text-gray-600">{inst.role}</p>
                      <p className="text-sm text-gray-500 italic">
                        {inst.graduation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Review</h2>
              <p className="text-lg font-bold">
                {course.reviews.average.toFixed(1)} / 5
              </p>
              <div className="space-y-1 mt-2">
                {Object.entries(course.reviews.breakdown).map(
                  ([stars, percentage]) => (
                    <div key={stars} className="flex items-center gap-2">
                      <span className="w-6">{stars}</span>
                      <div className="flex-1 bg-gray-200 h-2 rounded-full">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: percentage }}
                        ></div>
                      </div>
                      <span>{percentage}</span>
                    </div>
                  )
                )}
              </div>
            </section>
          </div>
          <div className="border-l h-screen flex items-center flex-col basis-[18%] border-gray-400 px-6">
            <div>
              <div className="flex items-baseline">
                <span>Price</span>
                <h1>$ {course.price}</h1>
              </div>
              <button className="px-7 rounded-full bg-green-500">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CourseDetail;
