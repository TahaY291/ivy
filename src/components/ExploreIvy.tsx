import { FC } from "react";

const ExploreIvy: FC = () => {
  return (
    <div className="flex image-hover gap-5 min-h-[80vh] max-md:flex-col">
      <div className="flex gap-5 flex-col w-full">
        <div className="relative group">
        <img
          src="/explore1.jpg"
          alt="Main Campus"
          className="w-full  object-cover rounded"
          />
          </div>
        <div className="flex gap-5 max-sm:flex-col">
          <img
            src="/course3.jpg"
            alt="Student 1"
            className="w-full h-24 max-sm:h-[50%] object-cover rounded"
          />
          <img
            src="/course4.jpg"
            alt="Student 2"
            className="w-full h-24 max-sm:h-[50%] object-cover rounded"
          />
          <img
            src="/explore2.jpg"
            alt="Student 3"
            className="w-full h-24 max-sm:h-[50%] object-cover rounded"
          />
        </div>
      </div>
      
      <div className="w-full flex flex-col gap-5">
        <div className="flex gap-5  w-full">
          <img
            src="/explore3.jpg"
            alt="Student 4"
            className="w-full h-24 object-cover rounded"
          />
          <img
            src="/explore5.jpg"
            alt="Student 5"
            className="w-full h-24 object-cover rounded"
          />
          <img
            src="/explore4.jpg"
            alt="Student 6"
            className="w-full h-24 object-cover rounded"
          />
        </div>

        <div className="flex gap-5">
        <img
          src="/explore6.jpg"
          alt="Student 7"
          className="w-[80%] max-h-[83%]  object-cover rounded"
        />
        <div className="flex gap-5 flex-col w-[20%] max-h-[83%]">

        <img
          src="/explore7.jpg"
          alt="Student 8"
          className="w-full h-full object-cover rounded"
          />
        <img
          src="/hero.png"
          alt="Student 9"
          className="w-full h-full object-cover rounded"
          />
          </div>
          </div>
      </div>
    </div>
  );
};

export default ExploreIvy;
