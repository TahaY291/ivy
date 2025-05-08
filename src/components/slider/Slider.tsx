import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profiles = [
  {
    name: "Mr. XYZ",
    role: "Branch Manager",
    quote:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. In Placerat Tellus Non Orci Viverra, At Cursus Augue Pellentesque.",
    image: "/xyz.jpg",
  },
  {
    name: "Ms. Jane",
    role: "Assistant Director",
    quote:
      "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam.",
    image: "/jane.jpg",
  },
  {
    name: "Mr. Doe",
    role: "Senior Advisor",
    quote:
      "But I Must Explain To You How All This Mistaken Idea Of Denouncing Pleasure And Praising Pain Was Born.",
    image: "/joe.jpg",
  },
];

export default function TeamSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 text-center">
      {/* Quote Section */}
      <div className="min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <p className="italic text-gray-500 text-sm sm:text-base mb-6">
              {profiles[activeIndex].quote}
            </p>
            <span className="text-green-400 underline underline-offset-4 font-semibold block">
              {profiles[activeIndex].name}
            </span>
            <p className="text-sm mt-1">{profiles[activeIndex].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Profile Images */}
      <div className="flex justify-center gap-4">
        {profiles.map((profile, idx) => (
          <img
            key={idx}
            src={profile.image}
            onClick={() => setActiveIndex(idx)}
            className={`w-12 h-12 rounded-full object-cover border-2 transition-all duration-300 cursor-pointer ${
              activeIndex === idx
                ? "border-green-400 scale-110"
                : "opacity-70 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
