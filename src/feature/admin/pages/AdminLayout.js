import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAdminProfile from "../../../hooks/useAdminProfile";


export default function AdminLayout() {

  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);

  // Fetch admin profile from backend
  const { admin, loading } = useAdminProfile();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="w-full">

      {/* ADMIN HEADER */}
      <div className="relative flex justify-between items-center px-6 py-6 border-b">

        {/* ADMIN TITLE */}
        <div className="text-3xl font-semibold">ADMIN</div>

        {/* PROFILE CIRCLE */}
        <div className="relative">
          <div
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer select-none"
          >
            {loading ? "..." : admin.name?.charAt(0).toUpperCase()}
          </div>

          {/* DROPDOWN MENU */}
          {openDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border p-3 z-20">

              <div className="pb-2 border-b">
                <p className="text-sm font-semibold">
                  {loading ? "Loading..." : admin.name}
                </p>
                <p className="text-xs text-gray-500">
                  {loading ? "" : admin.email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="mt-3 w-full text-left px-3 py-2 text-sm text-red-600 rounded-md hover:bg-red-100"
              >
                Logout
              </button>

            </div>
          )}
        </div>
      </div>

      {/* TOP NAVIGATION TABS */}
      <div className="flex justify-center border-b bg-white">
        <div className="flex gap-4 py-3">

          {[
            { name: "Users", path: "users", disabled: false },
            { name: "Courses", path: "courses", disabled: true },
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
                  : isActive
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

      {/* MAIN PAGE CONTENT */}
      <div className="p-2">
        <Outlet />
      </div>

    </div>
  );
}
