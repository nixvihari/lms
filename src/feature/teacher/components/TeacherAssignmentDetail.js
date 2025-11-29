import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TeacherAssignmentDetail() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
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
      });
  }, [id]);

  if (!assignment) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{assignment.title}</h1>
      <p className="text-slate-600 mb-6">{assignment.description}</p>

      <h2 className="text-xl font-semibold mb-4">Student Submissions</h2>
      <div className="space-y-4">
        {assignment.submissions.map((s, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{s.student}</span>
            <span>{s.status}</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              {s.grade ? `Grade: ${s.grade}` : "Grade"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
