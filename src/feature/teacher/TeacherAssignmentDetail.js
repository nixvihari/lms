import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TeacherAssignmentDetail() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignment({
          id: data.id,
          title: data.title,
          description: data.description,
          submissions: [
            { student: "Alice", status: "submitted", grade: null },
            { student: "Bob", status: "submitted", grade: "A" },
          ],
        });
      })
      .catch(() => setError("Failed to load assignment"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleGradeChange = (student, grade) => {
    setAssignment((prev) => ({
      ...prev,
      submissions: prev.submissions.map((s) =>
        s.student === student ? { ...s, grade } : s
      ),
    }));
  };

  if (loading) return <p className="p-6">Loading assignment...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;
  if (!assignment) return null;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        {assignment.title}
      </h1>
      <p className="text-slate-600 mb-6">{assignment.description}</p>

      <h2 className="text-xl font-semibold mb-4">Student Submissions</h2>
      <div className="space-y-4">
        {assignment.submissions.map((s, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{s.student}</p>
              <p className="text-sm text-slate-500">Status: {s.status}</p>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={s.grade || ""}
                onChange={(e) => handleGradeChange(s.student, e.target.value)}
                className="border rounded p-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Assign Grade</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
              <span className="text-slate-600">
                {s.grade ? `Grade: ${s.grade}` : "Not graded"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
