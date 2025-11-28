import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="w-full">

      {/* ADMIN TITLE */}
      <div className="text-center text-3xl font-semibold py-6 border-b">
        ADMIN
      </div>

      {/* TOP NAVIGATION TABS */}
<div className="flex justify-center border-b bg-white">
  <div className="flex gap-4 py-3">

    {[
      { name: "Users", path: "users", disabled: false },
      { name: "Courses", path: "courses" , disabled: true},
      { name: "Assignments", path: "assignments", disabled: true },
      { name: "Submissions", path: "submissions", disabled: true },
      { name: "Enrolled", path: "enrolled", disabled: true },
      { name: "Course Material", path: "materials", disabled: true }
    ].map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
           `px-5 py-2 rounded-lg text-sm font-medium border transition-all
            ${item.disabled
            ? "bg-gray-200 text-gray-400 border-gray-300 opacity-50 pointer-events-none"
            :isActive 
            ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          }`
        }
      >
        {item.name}
      </NavLink>
    ))}

  </div>
</div>


      {/* PAGE CONTENT */}
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
}
