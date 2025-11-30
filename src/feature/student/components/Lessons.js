import { useEffect, useState } from "react";

export default function Lessons({ courseId, isEnrolled }) {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setLessons(data.products);
      });
  }, []);

  const courseMaterials = [
  "Introduction to Java",
  "Java Variables and Data Types",
  "Control Flow and Loops in Java",
  "Object-Oriented Programming Concepts",
  "Java Collections Framework",
  "Spring Boot Project Setup",
  "REST API Design with Spring Boot",
  "Database Design and ERD",
  "React Components and Props",
  "State Management and Hooks in React"
];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Lesson Materials</h2>

      <div className="space-y-4">
        {courseMaterials.map((title, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{title}.pdf</span>

            {/*Restrict download until enrolled */}
            {isEnrolled ? (
              <a
                href={title}
                target="blank"
                download
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Download
              </a>
            ) : (
              <button
                disabled
                className="px-4 py-2 rounded bg-gray-400 text-white cursor-not-allowed"
              >
                Enroll to Download
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
