
// src/feature/teacher/TeacherProfile.js
import React, { useState } from "react";

export default function TeacherProfile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    subjects: ["Mathematics", "Algebra", "Calculus"],
    bio:
      "Passionate educator with 10+ years of experience teaching mathematics and mentoring students.",
    avatar: "https://i.pravatar.cc/150?img=12",
  });

  const handleEdit = () => {
    // Example: toggle name suffix to show change
    setProfile((prev) => ({
      ...prev,
      name: prev.name.endsWith(" (Edited)") ? "John Doe" : "John Doe (Edited)",
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Teacher Profile</h1>
          <button
            type="button"
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>

        <div className="flex items-center gap-6 mb-6">
          <img
            src={profile.avatar}
            alt="Teacher Avatar"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
            <p className="text-gray-600">{profile.phone}</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Subjects</h3>
          <div className="flex gap-2 flex-wrap">
            {profile.subjects.map((subject, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Bio</h3>
          <p className="text-gray-700">{profile.bio}</p>
        </div>
      </div>
    </div>
  );
}
