import { useParams, Link } from "react-router-dom";
import { use, useEffect, useState } from "react";
import UploadSection from "../components/UploadSection"; 
import UseAssignmentDetails from "../../../hooks/UseAssignmentDetails";
import Loader from "../../../common_components/Loader";
import ErrorMessage from "../../../common_components/ErrorMessage";

export default function AssignmentDetail() {
  const { id } = useParams();
  // const [assignment, setAssignment] = useState(null);
  const {data: assignment, loading, error} = UseAssignmentDetails(id);

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAssignment({
  //         id: data.id,
  //         title: data.title,
  //         courseName: "Web Development Bootcamp",
  //         description:
  //           data.description +
  //           "\n\nDeliverables:\n- Source code\n- Documentation\n- Screenshots",
  //         dueDate: "2025-12-05",
  //         status: "pending",
  //         grade: undefined,
  //         thumbnail: data.thumbnail,
  //       });
  //     });
  // }, [id]);

  // if (!assignment) return <p className="p-6">Loading...</p>;

  const dueDate = new Date(assignment.dueDate);

  if (loading) return <Loader/>

  return (
    <div className=" bg-slate">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <Link
          to={`/course/${assignment.courseId}`}
          className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
        >
          ← Back to Course
        </Link>
      </div>

      {error && <ErrorMessage error={error}/>}

      <div className="container mx-auto px-6 py-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 space-y-6">

            {/* Assignment Header */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-slate-800">
                        {assignment.title}
                      </h2>
                    </div>
                    <p className="text-slate-500">{assignment.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-6 text-slate-500">
                  📅 <span>Due: {dueDate.toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold text-slate-800">
                  Instructions
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 whitespace-pre-line">
                  {assignment.instructions}
                </p>
              </div>
            </div>

            {/* Upload Section*/}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold text-slate-800">
                  Upload Your Work
                </h3>
              </div>

              <UploadSection
                onSubmit={(data) => {
                  console.log("Submitted:", data);
                  alert("Assignment submitted successfully!");
                }}
              />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-slate-800">
                  Requirements
                </h3>
              </div>
              <div className="p-6 space-y-2">
                <div className="flex gap-2">✅ Submit before deadline</div>
                <div className="flex gap-2">✅ Include all required files</div>
                <div className="flex gap-2">✅ Follow instructions carefully</div>
              </div>
            </div>

            {/* Help Box */}
            <div className="bg-blue-50 rounded-lg shadow-md p-6">
              <h6 className="font-semibold text-slate-800 mb-2">Need help?</h6>
              <p className="text-slate-600 mb-3">
                If you have questions, ask your instructor.
              </p>
              <button className="w-full border rounded-lg py-2 bg-white hover:bg-slate-50">
                Ask Question
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
