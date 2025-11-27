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

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Lesson Materials</h2>

      <div className="space-y-4">
        {lessons.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{item.title}.pdf</span>

            {/*Restrict download until enrolled */}
            {isEnrolled ? (
              <a
                href={item.thumbnail}
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
