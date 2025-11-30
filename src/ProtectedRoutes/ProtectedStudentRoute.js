import { Navigate } from "react-router-dom";

export default function ProtectedStudentRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("role");

  if (!isLoggedIn) return <Navigate to="/signin" />;
  if (role !== "student") return <Navigate to="/" />;

  return children;
}
