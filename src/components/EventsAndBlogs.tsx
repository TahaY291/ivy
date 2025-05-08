import { FC } from "react";

const EventsAndBlogs: FC = () => {
  return (
    <div className="hero-section relative bg-cover bg-center  h-screen w-full text-white" style={{ backgroundImage: 'url(/eventandblog.jpg)' }}>

      <div className="relative z-10 flex items-center max-md:items-start max-md:p-5 justify-center max-md:flex-col h-full gap-10">
        {/* New Events */}
        <div className="basis-[40%] ">
          <h2 className="text-3xl font-bold mb-6 max-md:mb-1">New Events</h2>
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex gap-4 mb-6 max-md:mb-1 border-b max-md:border-b-0 pb-4 max-md:pb-2">
              <div className="border-green-500 border-2  flex items-center justify-center flex-col text-center min-w-[70px] px-2">
                <p className="text-2xl font-bold text-white leading-3">02</p>
                <p className="text-sm text-white leading-4">DEC 2022</p>
              </div>
              <div className="">
                <h3 className="font-semibold">
                  {i === 0 && "Presentation: The Geographics of a care based economy year 2020"}
                  {i === 1 && "Getting Started In Sucessfull Life Coaching Career in venice City"}
                  {i === 2 && "Product Design Branding Innovative Brand Design"}
                </h3>
                <div className="flex items-center text-sm mt-2">
                  <span className="mr-2">🕗 8:00 PM</span>
                  <span>Millat Chock, London</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blogs */}
        <div className="basis-[40%] ">
          <h2 className="text-3xl font-bold mb-6 max-md:mb-1">Blogs</h2>
          <div className="space-y-6 max-md:space-y-2">
            <div>
              <h3 className="font-semibold">IP Servellience System & Its Benifits</h3>
              <p className="text-sm text-green-400 mt-1">🕒 23 Days Ago</p>
            </div>
            <div>
              <h3 className="font-semibold">How Graphics Designing is Evolving?</h3>
              <p className="text-sm text-green-400 mt-1">🕒 23 Days Ago</p>
            </div>
            <div>
              <h3 className="font-semibold">The latest trend: Digital Media Marketing</h3>
              <p className="text-sm text-green-400 mt-1">🕒 23 Days Ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndBlogs;
