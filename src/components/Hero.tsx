import { FC } from 'react';
import { FaPlay } from 'react-icons/fa';

interface HeroProps {
  className?: string; // allows custom alignment class like justify-start
}

const Hero: FC<HeroProps> = ({ className }) => {
  const isLeftAligned = className?.includes('justify-start');

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative box-content"
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className={`items-center relative z-20 flex h-full ${className ?? "justify-center"}`}>
        <div className={`text-white px-4 ${isLeftAligned ? "text-start ml-10" : "text-center"}`}>
          <p className="text-sm md:text-base mb-2 font-semibold text-white">
            How Do I Get To The University?
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Welcome To IVY <br />
            <span className="block">Education Way Of School</span>
          </h1>

          <div className={`flex items-center gap-4 mt-6 ${isLeftAligned ? "justify-start" : "justify-center"}`}>
            <button className="bg-green-500 hover:bg-white text-white hover:text-green-500 transition duration-300 font-semibold px-6 py-2 rounded-full">
              VISIT CAMPUS
            </button>
            <button className="flex group items-center gap-2 bg-transparent text-white font-semibold pr-3 pl-1 transition duration-300 py-1 rounded-full hover:bg-green-500 border border-green-400">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-400 group-hover:bg-white">
                <FaPlay className="text-sm text-white group-hover:text-green-500" />
              </div>
              SCHEDULE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
