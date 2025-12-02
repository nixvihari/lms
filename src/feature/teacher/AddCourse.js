import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAddCourse from "../../hooks/useAddCourse";
import Loader from '../../common_components/Loader';
import { addCourse } from "../../api/courseService";
import ErrorMessage from '../../common_components/ErrorMessage';

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState('');
  const [learningObjective1, setLearningObjective1] = useState("");
  const [learningObjective2, setLearningObjective2] = useState("");
  const [learningObjective3, setLearningObjective3] = useState("");
  const [learningObjective4, setLearningObjective4] = useState("");
  const [learningObjective5, setLearningObjective5] = useState("");
  const [learningObjective6, setLearningObjective6] = useState("");

  const [file, setFile] = useState(null);   // ✅ new state for file
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Normally you'd POST to backend here
    const formData = {
      title,
      description,
      courseDuration,
      learningObjectives: [
        learningObjective1,
        learningObjective2,
        learningObjective3,
        learningObjective4,
        learningObjective5,
        learningObjective6
      ]
    };

    setError('');
    setLoading('true');

    addCourse(formData)
      .then((response) => {
        console.log('Course Added: ', response.data);
        setData(response.data);
      })
      .catch((error) => {
        setError('Error: Failed to add course. ' + error.message);
      })
      .finally(() => {
        setLoading(false);
      });


    // if (file) {
    //   formData.append("file", file);
    // }

    // Example: send to backend
    // fetch("/api/courses", {
    //   method: "POST",
    //   body: formData,
    // });

    console.log("New Course:", data.title, data.description);

    // Redirect back to course catalog
    navigate("/teacher/courses");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      <h1 className="text-2xl font-bold mb-4">Add New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">




        {/* <label className="block font-medium text-gray-700">Course Title</label> */}
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-black rounded"
          required
        />

        {/* <label className="block font-medium text-gray-700">Course Description</label> */}
        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-black rounded"
          required
        />

        {/* <label className="block font-medium text-gray-700">Course Duration (in hours)</label> */}
        <input
          type="number"
          placeholder="Course Duration (in hours)"
          value={courseDuration}
          onChange={(e) => setCourseDuration(Number(e.target.value))}
          className="w-full p-2 border border-black rounded"
          required
        />

        {/* <label className="block font-medium text-gray-700">Learning Objective 1</label> */}
        <input
          type="text"
          placeholder="Learning Objective 1"
          value={learningObjective1}
          onChange={(e) => setLearningObjective1(e.target.value)}
          className="w-full p-2 border border-black rounded"
        />

        {/* <label className="block font-medium text-gray-700">Learning Objective 2</label> */}
        <input
          type="text"
          placeholder="Learning Objective 2"
          value={learningObjective2}
          onChange={(e) => setLearningObjective2(e.target.value)}
          className="w-full p-2 border border-black rounded"
        />

        {/* <label className="block font-medium text-gray-700">Learning Objective 3</label> */}
        <input
          type="text"
          placeholder="Learning Objective 3"
          value={learningObjective3}
          onChange={(e) => setLearningObjective3(e.target.value)}
          className="w-full p-2 border border-black rounded"
        />

        {/* <label className="block font-medium text-gray-700">Learning Objective 4</label> */}
        <input
          type="text"
          placeholder="Learning Objective 4"
          value={learningObjective4}
          onChange={(e) => setLearningObjective4(e.target.value)}
          className="w-full p-2 border border-black rounded"
        />

        {/* <label className="block font-medium text-gray-700">Learning Objective 5</label> */}
        <input
          type="text"
          placeholder="Learning Objective 5"
          value={learningObjective5}
          onChange={(e) => setLearningObjective5(e.target.value)}
          className="w-full p-2 border border-black rounded"
        />

        {/* <label className="block font-medium text-gray-700">Learning Objective 6</label> */}
        <input
          type="text"
          placeholder="Learning Objective 6"
          value={learningObjective6}
          onChange={(e) => setLearningObjective6(e.target.value)}
          className="w-full p-2 border border-black rounded"
        />


        {/* ✅ File Upload */}
        {/* <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"   // restrict to pdf/jpg/png
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full p-2 border rounded"
          /> */}

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
