import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Assignments({ courseId }) {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data.products);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Assignments</h2>

      <div className="space-y-4">
        {assignments.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center cursor-pointer"
          >
            <span>{item.title}</span>

            <div className="flex gap-4">
              <button
                onClick={() => navigate(`/assignment/${item.id}`)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                View
              </button>

              {/* <a
                href={item.thumbnail}
                download
                className="px-4 py-2 bg-blue-600 text-white rounded"
                
              >
                Download
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
