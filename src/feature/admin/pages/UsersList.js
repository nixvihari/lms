import { useState, useMemo } from "react";
import UsersTable from "../components/UsersTable";
import AddTeacherForm from "../components/AddTeacherForm";
import useUsers from "../../../hooks/useUsers";

export default function UsersList() {
  const { users, loading, error, setUsers } = useUsers();

  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [pageIndex, setPageIndex] = useState(0);

  const [showAddTeacherForm, setShowAddTeacherForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // ADD USER
  const handleSaveTeacher = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
    setShowAddTeacherForm(false);
  };

  // EDIT USER
  const handleSaveEdit = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
    setEditingUser(null);
  };

  // DELETE USER
  const handleDelete = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      setUsers((prev) => prev.filter((u) => u.id !== user.id));
    }
  };

  if (loading) return <p className="text-center p-4">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center p-4">{error}</p>;

  return (
    <div className="p-2 w-full">
      <div className="text-center text-3xl font-semibold py-4 mt-1">
        USERS
      </div>

      {/* Add User Button */}
      <div className="flex justify-end mb-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => {
            setEditingUser(null);
            setShowAddTeacherForm(true);
          }}
        >
          Add User
        </button>
      </div>

      {/* Conditional Rendering */}
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
          data={users}
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
