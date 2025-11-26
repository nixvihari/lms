import { Link } from "react-router-dom";

export default function CourseList({ courses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="p-6 space-y-4">
            <h4 className="text-lg font-semibold text-slate-800 group-hover:text-blue-500 line-clamp-2">
              {course.title}
            </h4>

            <p className="text-sm text-slate-500 line-clamp-2">{course.description}</p>

            <div className="flex items-center gap-2">
              <img
                src={course.teacherAvatar}
                alt={course.teacher}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-slate-500">{course.teacher}</span>
            </div>

            <div className="flex items-center justify-between text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <span>⏳</span> <span>{course.duration}</span>
              </div>

              <div className="flex items-center gap-1">
                <span>👥</span>
                <span>{course.enrolled.toLocaleString()}</span>
              </div>
            </div>

             <div className="mt-4 flex justify-end">
            <Link
              to={`/course/${course.id}`}
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600"
            >
              View
            </Link>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
