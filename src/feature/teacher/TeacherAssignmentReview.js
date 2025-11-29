import { useParams, useNavigate } from "react-router-dom";

export default function TeacherAssignmentReview() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Example: fetch submissions from backend or mock data
  const submissions = [
    { student: "Alice", grade: "Pending" },
    { student: "Bob", grade: "Pending" },
    { student: "Charlie", grade: "Pending" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-slate-800">
        Submissions for Assignment {id}
      </h1>
      <ul className="mt-4 space-y-2">
        {submissions.map((s, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <span>{s.student}</span>
            <span className="text-slate-500">{s.grade}</span>
          </li>
        ))}
      </ul>

      {/* Navigation buttons */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => navigate("/teacher/courses")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Go to Course Page
        </button>
        <button
          onClick={() => navigate("/teacher/dashboard")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
