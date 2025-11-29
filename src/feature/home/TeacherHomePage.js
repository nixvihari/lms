import { Outlet } from "react-router-dom";
import TeacherSidebar from "../teacher/components/TeacherSidebar";
import TeacherNavbar from "../teacher/components/TeacherNavbar";

export default function TeacherHomepage() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-screen">
        <TeacherSidebar />
      </div>

      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <TeacherNavbar />

        <div className="flex-1 flex flex-col h-full md:ml-64">

          {/* Main Dynamic Content */}
          <div className="p-6">
            <Outlet />
          </div>

        </div>
      </div>

    </div>
  );
}
