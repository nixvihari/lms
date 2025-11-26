import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((p) => p.id === Number(id));
        setCourse(found);
       
      });
  }, [id]);

  if (!course) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Back Button */}
      <div className="bg-white p-4 border-b">
        <Link to="/coursepage" className="flex items-center gap-2 text-gray-700">
          Back to Courses
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-80 bg-gray-900">
        <img
          src={course.image}
          alt={course.title || "course image"}
          className="w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 flex items-center px-10">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-3">{course.title}</h1>
            <p className="text-gray-200">{course.description}</p>

            <div className="flex gap-6 mt-6 text-gray-200">
              <p>⏱ {course.duration || "20 hours"}</p>
              <p>👥 {course.students || 1200} students</p>
              <p>⭐ 4.8</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
