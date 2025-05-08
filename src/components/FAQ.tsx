import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const questions = [
    { id: 1, question: 'What is the degree earned of the program?', answer: 'Answer 1' },
    { id: 2, question: 'What is the degree earned of the program?', answer: 'Answer 2' },
    { id: 3, question: 'What is the degree earned of the program?', answer: 'Answer 3' },
    { id: 4, question: 'What is the degree earned of the program?', answer: 'Answer 4' },
    { id: 5, question: 'What is the degree earned of the program?', answer: 'Answer 5' },
    { id: 6, question: 'What is the degree earned of the program?', answer: 'Answer 6' },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Split into two columns manually
  const leftColumn = questions.filter((_, i) => i % 2 === 0);
  const rightColumn = questions.filter((_, i) => i % 2 === 1);

  return (
    <div className="max-w-[90%] mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Ready to Start Application?</h2>
        <p className="text-gray-500">The next cohort starts on August 16, 2018</p>
      </div>

      <div className="flex gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full">
          {leftColumn.map((q) => (
            <div
              key={q.id}
              className="border rounded p-4 cursor-pointer"
              onClick={() => toggleItem(q.id)}
            >
              <div className="flex items-center">
                <FaChevronRight
                  className={`mr-2 transition-transform duration-300 ${
                    openItems[q.id] ? 'rotate-90' : ''
                  }`}
                />
                <span className="font-medium">{q.question}</span>
              </div>
              {openItems[q.id] && (
                <p className="mt-2 text-sm text-gray-600">{q.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 w-full">
          {rightColumn.map((q) => (
            <div
              key={q.id}
              className="border rounded p-4 cursor-pointer"
              onClick={() => toggleItem(q.id)}
            >
              <div className="flex items-center">
                <FaChevronRight
                  className={`mr-2 transition-transform duration-300 ${
                    openItems[q.id] ? 'rotate-90' : ''
                  }`}
                />
                <span className="font-medium">{q.question}</span>
              </div>
              {openItems[q.id] && (
                <p className="mt-2 text-sm text-gray-600">{q.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
