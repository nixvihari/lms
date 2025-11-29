import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TeacherAssignmentReview() {
  const { id } = useParams(); // assignment id from route
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Dummy fetch — replace with backend API for submissions of this assignment
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setSubmissions(data.products));
  }, [id]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Review Assignment #{id}</h1>
      <p className="text-slate-600 mb-6">
        Here you can view submissions and grade them.
      </p>

      <div className="space-y-4">
        {submissions.map((s) => (
          <div
            key={s.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold">{s.title}</h4>
              <p className="text-slate-500">Submitted by Student #{s.id}</p>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded">
              Grade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
