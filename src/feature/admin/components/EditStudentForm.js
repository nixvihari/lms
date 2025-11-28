import { useState } from "react";

export default function EditStudentForm({ user, onSave, onCancel }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...user,
      name,
      email,
      role: "Student",
    });
  };

  return (
    <div className="bg-white p-6 shadow rounded-xl w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Edit Student</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Student Name</label>
          <input
            type="text"
            className="border rounded w-full px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="border rounded w-full px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-between mt-4">
          <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
