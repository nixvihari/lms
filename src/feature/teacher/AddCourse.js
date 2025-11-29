import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);   // ✅ new state for file
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally you'd POST to backend here
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (file) {
      formData.append("file", file);
    }

    // Example: send to backend
    // fetch("/api/courses", {
    //   method: "POST",
    //   body: formData,
    // });

    console.log("New Course:", { title, description, file });

    // Redirect back to course catalog
    navigate("/teacher/courses");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Add New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* ✅ File Upload */}
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"   // restrict to pdf/jpg/png
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Save Course
        </button>
      </form>

      {/* Preview selected file */}
      {file && (
        <div className="mt-4 p-2 bg-white rounded shadow">
          <p className="font-semibold">Selected File:</p>
          <p>{file.name}</p>
        </div>
      )}
    </div>
  );
}
