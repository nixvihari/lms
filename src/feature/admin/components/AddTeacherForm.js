import { useState, useEffect } from "react";

export default function AddTeacherForm({ user, onCancel, onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Teacher"); 

  // Pre-fill when editing
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalUser = {
      id: user?.id || Date.now(),
      name,
      email,
      role, 
    };

    onSave(finalUser);
  };

  return (
    <div className="bg-white shadow p-6 rounded-xl max-w-lg mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4 text-center">
        {user ? "Edit User" : "Add Teacher"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            {role} Name
          </label>
          <input
            type="text"
            className="border w-full p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="border w-full p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Role - only shown when editing */}
        {user && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border w-full p-2 rounded"
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {user ? "Update" : "Save"}
          </button>
        </div>

      </form>
    </div>
  );
}
