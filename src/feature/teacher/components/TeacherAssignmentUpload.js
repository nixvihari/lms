import { useState } from "react";
import useCourses from '../../../hooks/useCourses';
import Loader from "../../../common_components/Loader";
import ErrorMessage from "../../../common_components/ErrorMessage";
import useAddCourse from "../../../hooks/useAddCourse";
import { addAssignment } from "../../../api/assignmentService";
import { useNavigate } from "react-router-dom";

export default function TeacherAssignmentUpload() {
  const [courseId, setCourseId] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [instructions, setInstructions] = useState('');

  const { courses, loading, error } = useCourses();

  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const navigate = useNavigate();


  const handleSubmit = (e,) => {
    e.preventDefault();

    console.log(courseId);
    setSubmitError('');
    setSubmitLoading(true);
    addAssignment({ courseId, title, description, dueDate, instructions })
      .then((response) => {
        console.log('New Assignment Added', response.data);
      })
      .catch((error) => {
        setSubmitError('Failed to sumbit assigment' + error.message);
      })
      .finally(() => {
        setSubmitLoading(false);
      });
    
      alert(`New Assignment "${title}" successfully added.`);
      setCourseId('');
      setTitle('');
      setDueDate('');
      setDescription('');
      setInstructions('');

      navigate('/teacher/assignments');
  }

  if (loading) return <Loader />

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {submitLoading && <Loader />}
      {submitError && <ErrorMessage error={submitError} />}
      {error && <ErrorMessage error={error} />}
      <h1 className="text-2xl font-bold mb-6">Upload Assignment</h1>

      <div className="space-y-4 bg-white p-6 rounded shadow max-w-xl mx-auto">
        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="course-id-dropdown" className="block mb-2 text-sm font-medium text-gray-700">Choose a course:</label>
            <select id="course-dropdown"
              className="block w-full rounded-md border rounded shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-700 p-2"
              name="course-dropdown"
              value={courseId}
              onChange={e => setCourseId(Number(e.target.value))}
            >
              {courses && courses.map(course => {
                return <option key={course.id} value={course.id}>{course.title}</option>
              })}
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter assignment title"
              className="w-full p-3 border rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              placeholder="Enter assignment description"
              className="w-full p-3 border rounded"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block font-semibold mb-1">Due Date</label>
            <input
              type="datetime-local"
              className="w-full p-3 border rounded"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block font-semibold mb-1">Instructions</label>
            <textarea
              placeholder="Enter detailed instructions"
              className="w-full p-3 border rounded"
              rows={4}
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
            />
          </div>

          {/* File Upload */}
          {/* <div>
          <label className="block font-semibold mb-1">Upload Files</label>
          <input
          type="file"
          multiple
          className="block w-full border border-gray-300 rounded p-2"
          />
          </div> */}

          {/* Notes */}
          <div>
            <label className="block font-semibold mb-1">Additional Notes (Optional)</label>
            <textarea
              placeholder="Add any extra notes"
              className="w-full p-3 border rounded"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold">
            Create New Assignment
          </button>
        </form>
      </div>
    </div>
  );
}
