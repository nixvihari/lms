
export default function TeacherAssignmentUpload() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Upload Assignment</h1>

      <div className="space-y-4 bg-white p-6 rounded shadow max-w-xl mx-auto">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter assignment title"
            className="w-full p-3 border rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            placeholder="Enter assignment description"
            className="w-full p-3 border rounded"
            rows={3}
          />
        </div>

        {/* Due Date */}
        <div>
          <label className="block font-semibold mb-1">Due Date</label>
          <input
            type="date"
            className="w-full p-3 border rounded"
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold mb-1">Instructions</label>
          <textarea
            placeholder="Enter detailed instructions"
            className="w-full p-3 border rounded"
            rows={4}
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block font-semibold mb-1">Upload Files</label>
          <input
            type="file"
            multiple
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>

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
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold">
          Submit Assignment
        </button>
      </div>
    </div>
  );
}
