import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-blue-900 shadow-sm">
      <div className="relative flex items-center justify-between h-16 px-6">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-white ">
             Spark Learning CloudLMS
          </h1>
        </div>

        {/* CENTER SEARCH BAR (Perfectly Centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-lg">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>

            <input
              type="search"
              placeholder="Search courses, assignments..."
              className="w-full pl-10 pr-4 h-10 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(`profile`)}
            className="h-10 w-10 rounded-full bg-white hover:ring-2 hover:ring-slate-950 transition-all"
          ></button>
        </div>

      </div>
    </div>
  );
}
