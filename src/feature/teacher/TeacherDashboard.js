
import { Link, useNavigate } from "react-router-dom";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out!");
    navigate("/signin"); // Navigate to Sign-In page
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Top section: Heading + Profile */}
      <div className="flex justify-between items-start">
        {/* Left: Heading */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Teacher Dashboard</h1>
          <p className="text-slate-500">
            Welcome back! Here’s an overview of your teaching activity.
          </p>
        </div>

        {/* Right: Teacher Profile Card */}
        <div className="bg-white p-4 rounded-lg shadow w-64">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">👩‍🏫 Profile</h2>

          {/* Profile Info (no avatar image) */}
          <div className="space-y-1">
            <p className="text-md font-bold text-slate-700">John Doe</p>
            <p className="text-slate-500 text-sm">Senior Mathematics Teacher</p>
            <p className="text-slate-600 text-sm">📞 +91 98765 43210</p>
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-2">
            <Link
              to="/teacher/profile"
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
            >
              View Profile
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Courses Card */}
        <Link
          to="/teacher/courses"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">📚 Courses</h3>
          <p className="text-2xl font-bold">12</p>
        </Link>

        {/* Assignments Card */}
        <Link
          to="/teacher/assignments"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">📝 Assignments</h3>
          <p className="text-2xl font-bold">34</p>
        </Link>

        {/* Students Card */}
        <Link
          to="/teacher/students"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">👩‍🎓 Students</h3>
          <p className="text-2xl font-bold">250</p>
        </Link>
      </div>
    </div>
  );
}
