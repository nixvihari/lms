import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentProfile() {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [showContact, setShowContact] = useState(false); 
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/users/1";

  useEffect(() => {
    async function fetchStudent() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();

        setStudent({
          id: data.id || "STU000",
          name: data.name || "Unknown Student",
          email: data.email || "noemail@example.com",
          about:
            "I am passionate about Web Development, UI/UX Design, and 3D Animation. Always learning and exploring new technologies.",
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchStudent();
  }, []);

  if (loading)
    return <p className="p-6 text-lg">Loading student data...</p>;

  if (error)
    return (
      <p className="p-6 text-red-600 font-semibold">
         Error: {error}
      </p>
    );

    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('userId');
      localStorage.setItem('isLoggedIn', false);


      navigate('/signin');
    }

  return (
    <div className="min-h-screen bg-slate-100 py-10 relative">

      {/*BACK BUTTON */}
      {/* <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 left-6 bg-white px-4 py-2 rounded-lg shadow hover:bg-slate-200 transition"
      >
        ⬅ Back to Dashboard
      </button> */}

      <div className="max-w-3xl mx-auto px-6 space-y-8">

        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-5xl font-bold">
            {student.name.charAt(0)}
          </div>

          <h2 className="text-3xl font-bold mt-4 text-slate-800">
            {student.name}
          </h2>
        </div>

        {/* ABOUT DROPDOWN */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full text-left text-xl font-semibold text-slate-800 flex justify-between items-center"
          >
            About
            <span>{showDetails ? "▲" : "▼"}</span>
          </button>

          {showDetails && (
            <div className="mt-4 border-t pt-4 space-y-3 transition-all">
              <p className="text-slate-700">
                <span className="font-semibold">Name:</span> {student.name}
              </p>
              <p className="text-slate-700">
                <span className="font-semibold">Email:</span> {student.email}
              </p>
              <p className="text-slate-700">
                <span className="font-semibold">Student ID:</span> {student.id}
              </p>
              <p className="text-slate-700">
                <span className="font-semibold">About Me:</span> {student.about}
              </p>
            </div>
          )}
        </div>

        {/* CONTACT SUPPORT */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <button
            onClick={() => setShowContact(!showContact)}
            className="w-full text-left text-xl font-semibold text-slate-800 flex justify-between items-center"
          >
            Contact LMS Support
            <span>{showContact ? "▲" : "▼"}</span>
          </button>

          {showContact && (
            <div className="mt-4 border-t pt-4 space-y-2 transition-all">
              <p className="text-slate-700">
                📧 <strong>Email:</strong> support@lmsportal.com
              </p>
              <p className="text-slate-700">
                📞 <strong>Phone:</strong> +91 98765 43210
              </p>
              <p className="text-slate-700">
                🕒 <strong>Working Hours:</strong> 9:00 AM – 6:00 PM (Mon–Sat)
              </p>
            </div>
          )}
        </div>

        {/* LOGOUT BUTTON */}
        <div className="text-center">
          <button
            onClick={handleLogout}
            className="w-full md:w-64 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
