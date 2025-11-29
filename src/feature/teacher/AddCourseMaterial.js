import { useState } from "react";

export default function AddCourseMaterial({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, file });
    setTitle("");
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Add Course Material</h2>

      <input
        type="text"
        placeholder="Material Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="file"
        accept=".pdf,.docx,.pptx,.png,.jpeg,.jpg"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full border p-2 rounded"
      />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Upload Material
      </button>
    </form>
  );
}
