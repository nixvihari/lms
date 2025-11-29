
import { useNavigate } from "react-router-dom";

export default function TeacherAssignments() {
  const navigate = useNavigate();

  const assignments = [
    { id: 1, title: "JavaScript Basics", submissions: 12 },
    { id: 2, title: "Python Functions", submissions: 18 },
    { id: 3, title: "Java OOP", submissions: 9 },
  ];

  const handleReview = (id) => {
    navigate(`/teacher/assignments/${id}`);
  };

  // Top-right Upload Assignment button → goes to TeacherAssignmentUpload page
  const goToUploadAssignment = () => {
    // You can choose whether this upload is generic or for a specific assignment.
    // If generic (new assignment upload), keep it without id:
    // navigate("/teacher/assignments/teacherAssignmentUpload");

    // If you want it under a generic new route with id (optional), pick a convention:
    navigate(`/teacher/assignments/new/teacherAssignmentUpload`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with Upload Assignment button on the right */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Assignments</h1>
          <p className="text-slate-500">
            Review student submissions and manage assignments.
          </p>
        </div>

        {/* Top-right Upload Assignment button */}
        <button
          onClick={goToUploadAssignment}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          ⬆️ Upload Assignment
        </button>
      </div>

      {/* Assignment List (no upload buttons per row) */}
      <div className="space-y-4">
        {assignments.map((a) => (
          <div
            key={a.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center gap-4"
          >
            <span className="font-semibold">{a.title}</span>
            <span className="text-slate-500">{a.submissions} submissions</span>
            <button
              onClick={() => handleReview(a.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
