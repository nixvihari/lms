import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAssignments from "../../../hooks/useAssignments";
import Loader from "../../../common_components/Loader";
import ErrorMessage from "../../../common_components/ErrorMessage";

export default function Assignments({ courseId }) {
  // const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();
  console.log('courseid in assignments', courseId);
  const { data : assignments, loading, error } = useAssignments(courseId);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products?limit=4")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAssignments(data.products);
  //     });
  // }, []);

  if (loading) return <Loader />
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Assignments</h2>
      
      {error && <ErrorMessage error={error} />}
      
      <div className="space-y-4">
        {assignments.map((item) => (
          <div
            key={item.assignmentId}
            className="bg-white p-4 rounded shadow flex justify-between items-center cursor-pointer"
          >
            <span>{item.title}</span>

            <div className="flex gap-4">
              <button
                onClick={() => navigate(`/assignment/${item.assignmentId}`)}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                View
              </button>

              {/* <a
                href={item.thumbnail}
                download
                className="px-4 py-2 bg-blue-600 text-white rounded"
                
              >
                Download
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
