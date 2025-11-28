import { useState, useMemo, useEffect } from "react";
import UsersTable from "../components/UsersTable";
import AddTeacherForm from "../components/AddTeacherForm";

export default function UsersList() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);

  const [showAddTeacherForm, setShowAddTeacherForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null); 

  // Fetch dummy data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentRes = await fetch("https://dummyjson.com/users?limit=5");
        const studentData = await studentRes.json();

        const teacherRes = await fetch(
          "https://dummyjson.com/users?limit=5&skip=5"
        );
        const teacherData = await teacherRes.json();

        setStudents(
          studentData.users.map((u) => ({
            id: u.id,
            name: `${u.firstName} ${u.lastName}`,
            email: u.email,
            role: "Student",
          }))
        );

        setTeachers(
          teacherData.users.map((u) => ({
            id: u.id + 500, 
            name: `${u.firstName} ${u.lastName}`,
            email: u.email,
            role: "Teacher",
          }))
        );
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchData();
  }, []);

  const data = useMemo(() => [...students, ...teachers], [students, teachers]);

  const totalStudents = students.length;
  const totalTeachers = teachers.length;

  // ADD TEACHER
  const handleSaveTeacher = (newTeacher) => {
    setTeachers((prev) => [...prev, newTeacher]);
    setShowAddTeacherForm(false);
  };

  // EDIT USER
  const handleSaveEdit = (updatedUser) => {
    if (updatedUser.role === "Student") {
      setStudents((prev) =>
        prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );
    } else {
      setTeachers((prev) =>
        prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );
    }
    setEditingUser(null);
  };

  // DELETE USER
  const handleDelete = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      if (user.role === "Student") {
        setStudents((prev) => prev.filter((u) => u.id !== user.id));
      } else {
        setTeachers((prev) => prev.filter((u) => u.id !== user.id));
      }
    }
  };

  return (
    <div className="p-2 w-full">
      <div className="text-center text-3xl font-semibold py-4  mt-1">
        USERS
      </div>
 
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 shadow p-6 rounded-xl text-center">
          <h2 className="text-white text-sm">Total Students</h2>
          <p className="text-3xl font-bold mt-2">{totalStudents}</p>
        </div>

        <div className="bg-purple-600 shadow p-6 rounded-xl text-center">
          <h2 className="text-white text-sm">Total Teachers</h2>
          <p className="text-3xl font-bold mt-2">{totalTeachers}</p>
        </div>

        <div className="bg-yellow-500 shadow p-6 rounded-xl text-center">
          <h2 className="text-white text-sm">Add Teacher</h2>
          <button
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              setEditingUser(null); // close edit form if it is open
              setShowAddTeacherForm(true);
            }}
          >
            Add Teacher
          </button>
        </div>
      </div>

      {/* CONDITIONAL RENDERING FIXED */}
      {showAddTeacherForm ? (
        <AddTeacherForm
          onCancel={() => setShowAddTeacherForm(false)}
          onSave={handleSaveTeacher}
        />
      ) : editingUser ? (
        <AddTeacherForm
          user={editingUser}
          onCancel={() => setEditingUser(null)}
          onSave={handleSaveEdit}
        />
      ) : (
        <UsersTable
          data={data}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          pageSize={pageSize}
          setPageSize={setPageSize}
          onEdit={(user) => {
            setShowAddTeacherForm(false); 
            setEditingUser(user);
          }}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
