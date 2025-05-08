import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Hero1: FC = () => {
  const location = useLocation();


  if (location.pathname === "/") return null; 

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const pageName = pathSegments[pathSegments.length - 1]
  ?.replace(/-/g, " ")
  .toUpperCase();

  const breadcrumbLinks = pathSegments.map((segment, index) => {
    const routeTo = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = segment.replace(/-/g, " ").toUpperCase();


    return (
      <span key={routeTo}>
        <span className="mx-2">/</span>
        <NavLink to={routeTo} className="text-white hover:text-green-400">
          {label}
        </NavLink>
      </span>
    );
  });

  return (
    <div
    className="w-full h-[70vh] bg-cover relative"
    style={{ backgroundImage: "url('/replace1.jpg')", backgroundPosition: "left",  }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">{pageName}</h1>

        <div className="text-sm mt-2 flex items-center">
          <NavLink to="/" className="text-white hover:text-green-400">
            HOME
          </NavLink>
          {breadcrumbLinks}
        </div>
      </div>
    </div>
  );
};

export default Hero1;
