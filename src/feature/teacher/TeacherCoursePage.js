
import { useState } from "react";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import SearchBar from "./SearchBar";

export default function TeacherCoursePage() {
  // Dummy data for programming languages
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
    },
  ];

  const [courses] = useState(dummyCourses);
  const [filtered, setFiltered] = useState(dummyCourses);

  const handleSearch = (query) => {
    const s = query.toLowerCase();
    const result = courses.filter((c) =>
      c.title.toLowerCase().includes(s)
    );
    setFiltered(result);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Course Catalog</h1>
          <p className="text-slate-500 -mt-2">
            Explore our wide range of courses and start learning today
          </p>
        </div>

        {/* Add Course Button */}
        <Link
          to="/teacher/add-course"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          ➕ Add Course
        </Link>
      </div>

      <SearchBar onSearch={handleSearch} />
      <CourseList courses={filtered} />
    </div>
  );
}