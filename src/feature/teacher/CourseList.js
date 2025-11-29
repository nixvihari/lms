
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const dummyCourses = [
  {
    id: 1,
    title: "JavaScript Basics",
    description: "Learn the fundamentals of JavaScript for web development.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
    duration: "20 hours",
    teacher: "Alice Johnson",
    teacherAvatar: "https://i.pravatar.cc/150?img=1",
    enrolled: 1200,
    pdf: "/pdfs/javascript-basics.pdf", // ✅ Add PDF path
  },
  {
    id: 2,
    title: "Python for Beginners",
    description: "Start your journey with Python programming.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
    duration: "25 hours",
    teacher: "Bob Smith",
    teacherAvatar: "https://i.pravatar.cc/150?img=2",
    enrolled: 1500,
    pdf: "/pdfs/python-for-beginners.pdf",
  },
  {
    id: 3,
    title: "Java Fundamentals",
    description: "Master the basics of Java and object-oriented programming.",
    image: "https://cdn-icons-png.flaticon.com/512/919/919854.png",
    duration: "30 hours",
    teacher: "Carol White",
    teacherAvatar: "https://i.pravatar.cc/150?img=3",
    enrolled: 900,
    pdf: "/pdfs/java-fundamentals.pdf",
  },
];

export default function CourseList({ courses }) {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  if (id) {
    const course = dummyCourses.find((c) => c.id === parseInt(id));
    if (!course) return <p className="text-center text-red-500">Course not found!</p>;

    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <Link
          to="/teacher/courses"
          className="text-blue-500 hover:underline mb-4 inline-block"
        >
          ← Back to Courses
        </Link>

        <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <img src={course.image} alt={course.title} className="w-20 h-20 object-contain" />
            <div>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-gray-500">Duration: {course.duration}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mt-6 border-b pb-2">
            {["overview", "material", "assignments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 ${
                  activeTab === tab ? "border-b-2 border-blue-500 font-bold" : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "overview" && (
              <div>
                <p className="text-gray-700">{course.description}</p>
                <p className="mt-2 text-gray-500">Enrolled: {course.enrolled}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={course.teacherAvatar}
                    alt={course.teacher}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="text-gray-700 font-medium">{course.teacher}</span>
                </div>
              </div>
            )}

            {activeTab === "material" && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Course PDF</h2>
                <a
                  href={course.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  📄 Download Course Material
                </a>
                <div className="mt-4">
                  <iframe
                    title="Course PDF"
                    src={course.pdf}
                    className="w-full h-[600px] border rounded"
                  />
                </div>
              </div>
            )}

            {activeTab === "assignments" && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Assignments</h2>
                <p className="text-gray-600">
                  Assignment submission feature is currently disabled.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // List view
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white p-4 rounded shadow">
          <img src={course.image} alt={course.title} className="w-full h-40 object-contain mb-4" />
          <h2 className="text-xl font-semibold">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
          <p className="text-sm text-gray-500 mt-2">Duration: {course.duration}</p>
          <div className="flex items-center mt-3">
            <img
              src={course.teacherAvatar}
              alt={course.teacher}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-700">{course.teacher}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Enrolled: {course.enrolled}</p>

          {/* View Button */}
          <Link
            to={`/teacher/course/${course.id}`}
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            👁 View
          </Link>
        </div>
      ))}
    </div>
  );
}
