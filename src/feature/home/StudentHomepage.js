import { Outlet } from "react-router-dom";
import Sidebar from "../student/components/Sidebar";
import Navbar from "../student/components/Navbar";


export default function StudentHomepage() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

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
