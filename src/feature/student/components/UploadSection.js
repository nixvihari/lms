import { useState } from "react";

export default function UploadSection({ onSubmit }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [notes, setNotes] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(e.target.files)]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const removeFile = (index) =>
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));

  const handleSubmitClick = () => {
    onSubmit({ uploadedFiles, notes });
  };

  return (
    <div className="p-6 space-y-4 ">
      {/* Upload Box */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-xl p-8 text-center ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:border-blue-500"
        }`}
      >
        <div className="text-4xl mb-3">📤</div>
        <h5 className="text-lg font-semibold text-slate-800 mb-2">
          Drag & drop files here
        </h5>
        <p className="text-slate-500 mb-4">or</p>

        <label
          htmlFor="file-upload"
          className="cursor-pointer px-4 py-2 border rounded-lg hover:bg-slate-50"
        >
          Browse Files
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* File List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h6 className="font-semibold text-slate-800">Uploaded Files</h6>

          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-slate-100 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex justify-center items-center text-xl">
                  📄
                </div>
                <div>
                  <p>{file.name}</p>
                  <p className="text-sm text-slate-500">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>

              <button
                onClick={() => removeFile(index)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Notes */}
      <textarea
        className="w-full p-3 border rounded-lg"
        rows={4}
        placeholder="Add notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmitClick}
        disabled={uploadedFiles.length === 0}
        className={`w-full h-12 rounded-lg font-semibold ${
          uploadedFiles.length === 0
            ? "bg-slate-300 text-slate-500 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        Submit Assignment
      </button>
    </div>
  );
}
