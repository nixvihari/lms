import { Navigate } from "react-router-dom";

export default function ProtectedTeacherRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("role");

  if (!isLoggedIn) return <Navigate to="/signin" />;
  if (role !== "teacher") return <Navigate to="/" />;

  return children;
}
