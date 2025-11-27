import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Lessons from "../components/Lessons";
import Assignments from "../components/Assignments";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((p) => p.id === Number(id));

        // Add isEnrolled flag (default false). Keep other fields intact.
        setCourse({ ...found, isEnrolled: false });
      })
      .catch((err) => {
        console.error("Failed to fetch course:", err);
      });
  }, [id]);

  if (!course) return <p className="p-6">Loading...</p>;

  const handleEnroll = () => {
    // toggle enroll — in a real app you'd call backend then update state
    setCourse((prev) => ({ ...prev, isEnrolled: true }));
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Back Button */}
      <div className="bg-white p-4 border-b">
        <Link to="/coursepage" className="text-gray-700">← Back to Courses</Link>
      </div>

      {/* HERO BANNER */}
      <div className="relative h-80 bg-gray-900">
        <img
          src={course.thumbnail || course.image || course.images?.[0]}
          alt={course.title}
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 flex items-center px-10">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-3">{course.title}</h1>
            <p>{course.description}</p>

            <div className="flex gap-6 mt-4 text-gray-200">
              <p>⏱ {course.duration || "20 hours"}</p>
              <p>👥 {course.students || course.stock || 1200} students</p>
              <p>⭐ 4.8</p>
            </div>

            {/* ENROLL BUTTON */}
            {!course.isEnrolled ? (
              <button
                onClick={handleEnroll}
                className="mt-6 bg-green-600 px-6 py-2 rounded text-lg"
              >
                Enroll Now
              </button>
            ) : (
              <button className="mt-6 bg-gray-200 text-gray-800 px-6 py-2 rounded text-lg" disabled>
                Enrolled
              </button>
            )}
          </div>
        </div>
      </div>

     {/* NAVBAR */}
<div className="bg-white border-b flex gap-10 px-10 py-3 text-gray-600">
  {["overview", "lessons", "assignments"].map((tab) => {
    const isDisabled = tab === "assignments" && !course.isEnrolled;

    return (
      <button
        key={tab}
        onClick={() => !isDisabled && setActiveTab(tab)}
        className={`pb-2 text-lg ${
          activeTab === tab && !isDisabled
            ? "font-semibold border-b-2 border-black text-black"
            : "text-gray-400"
        } ${isDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    );
  })}
</div>



      {/* TAB CONTENT */}
      <div className="px-10 py-8">

        {/* Overview Section */}
        {activeTab === "overview" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
            <ul className="grid grid-cols-2 gap-4">
              <li>✔ Responsive Web Design</li>
              <li>✔ JavaScript Basics</li>
              <li>✔ Deployment Skills</li>
              <li>✔ UI/UX Basics</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Description</h2>
            <p>{course.description}</p>
          </div>
        )}

        {/* Lessons Component (pass isEnrolled) */}
        {activeTab === "lessons" && <Lessons courseId={id} isEnrolled={course.isEnrolled} />}

        {/* Assignments Component (pass isEnrolled) */}
        {activeTab === "assignments" && <Assignments courseId={id} isEnrolled={course.isEnrolled} />}

      </div>
    </div>
  );
}
