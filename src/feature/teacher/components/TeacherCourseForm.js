import { useState } from "react";

export default function AddCourseForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjectives] = useState(Array(6).fill(""));
  const [duration, setDuration] = useState("");

  const handleObjectiveChange = (index, value) => {
    const updated = [...objectives];
    updated[index] = value;
    setObjectives(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, objectives, duration });
    setTitle("");
    setDescription("");
    setObjectives(Array(6).fill(""));
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Add Course</h2>

      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <textarea
        placeholder="Course Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
      />

      {objectives.map((obj, i) => (
        <input
          key={i}
          type="text"
          placeholder={`Learning Objective ${i + 1}`}
          value={obj}
          onChange={(e) => handleObjectiveChange(i, e.target.value)}
          className="w-full border p-2 rounded"
        />
      ))}

      <input
        type="number"
        placeholder="Course Duration (hours)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
        Save Course
      </button>
    </form>
  );
}
