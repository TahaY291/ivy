import { useState } from 'react';

// Define the type for a news item
type NewsItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
};

// Sample data
const defaultNews: NewsItem[] = [
  {
    id: 1,
    title: "THE WORLD BEST UNIVERSITY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nisl, lectus nec tempor nec, sagittis sit.",
    image: "/new1.jpg",
    date: "Nov - 2023",
    author: "Admin"
  },
  {
    id: 2,
    title: "THE WORLD BEST UNIVERSITY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nisl, lectus nec tempor nec, sagittis sit.",
    image: "/new2.jpg",
    date: "Nov - 2023",
    author: "Admin"
  },
  {
    id: 3,
    title: "THE WORLD BEST UNIVERSITY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisl nisl, lectus nec tempor nec, sagittis sit.",
    image: "/new3.jpg",
    date: "Nov - 2023",
    author: "Admin"
  }
];

// NewsCard component for individual news items
const NewsCard = ({ news }: { news: NewsItem }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-bold text-gray-800">{news.title}</h3>
        <p className="text-xs text-gray-600 mt-2 flex-grow">{news.description}</p>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <div className="flex space-x-4">
            <span>{news.date}</span>
            <span>{news.author}</span>
          </div>
          <button className="bg-green-500 text-white px-3 py-1 rounded text-xs">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

// Main LatestNews component
const LatestNews = ({ customNews }: { customNews?: NewsItem[] }) => {
  const [newsItems] = useState<NewsItem[]>(customNews || defaultNews);
  
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 uppercase">LATEST NEWS</h2>
          <p className="text-sm text-gray-600 mt-1">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
        </div>
        
        <div className="flex items-center justify-center max-md:flex-wrap gap-6">
          {newsItems.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;