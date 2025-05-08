import React from 'react';

interface CourseCardProps {
  title: string;
  image: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, image, description }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden max-w-xs h-[350px]">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-md font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded">
          View More ➜
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
