import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentCalendar from "../components/StudentCalendar";
import Loader from '../../../common_components/Loader';
import useUserProfile from "../../../hooks/useUserProfile";


export default function StudentDashboard() {
  const navigate = useNavigate();

  // const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(true);

  const {student, loading, error} = useUserProfile();

  // const STUDENT_API = "https://jsonplaceholder.typicode.com/users/1";
  const COURSES_API = "https://jsonplaceholder.typicode.com/posts?_limit=3";

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const sRes = await fetch(STUDENT_API);
  //       const cRes = await fetch(COURSES_API);

  //       const studentData = await sRes.json();
  //       const courseData = await cRes.json();

  //       setStudent(studentData);
  //       setCourses(
  //         courseData.map((c) => ({
  //           id: c.id,
  //           title: c.title,
  //           progress: Math.floor(Math.random() * 80) + 20,
  //         }))
  //       );

  //       setLoading(false);
  //     } catch (error) {
  //       console.log("Error loading dashboard:", error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  if (loading) return <Loader/>

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-3xl font-bold text-slate-800">
        Welcome, {student?.name}
      </h1>

      {/* TOP CARDS */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded-xl flex flex-col justify-center items-center">
          <h2 className="text-lg text-slate-500">Total Enrolled Courses</h2>
          <p className="text-4xl font-bold text-blue-900">{courses.length}</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT → ENROLLED COURSES */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">Enrolled Courses</h2>

          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {course.title.slice(0, 22)}...
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Progress: {course.progress}%
                </p>
              </div>

              <button
                onClick={() => navigate(`/course/${course.id}`)}
                className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Continue Learning
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT → SEPARATE CALENDAR COMPONENT */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Calendar</h2>
          <StudentCalendar /> 
        </div>

      </div>
    </div>
  );
}
