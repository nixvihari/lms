import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-blue-900 to-gray-500 text-white p-6 space-y-4 shadow-xl">

      <button
        onClick={() => navigate("/teacher/dashboard")}
        className="block w-full text-left p-3 hover:bg-slate-500 rounded mt-12"
      >
        Dashboard
      </button>

      <button
        onClick={() => navigate("/teacher/courses")}
        className="block w-full text-left p-3 hover:bg-slate-500 rounded"
      >
        All Courses
      </button>

      <button
        onClick={() => navigate("/teacher/assignments")}
        className="block w-full text-left p-3 hover:bg-slate-500 rounded"
      >
        Assignments
      </button>

      <button
        onClick={() => navigate("/teacher/profile")}
        className="block w-full text-left p-3 hover:bg-slate-500 rounded"
      >
        Profile
      </button>

    </div>
  );
}
