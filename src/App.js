import { Routes, Route } from "react-router-dom";
import StudentHomepage from "./feature/home/StudentHomepage";
import StudentDashboard from "./feature/student/pages/StudentDashboard";
import CoursePage from "./feature/student/pages/CoursePage";
import Assignments from "./feature/student/components/Assignments";
import StudentProfile from "./feature/student/pages/StudentProfile";
import CourseDetail from "./feature/student/pages/CourseDetail";
import AssignmentDetail from "./feature/student/pages/AssignmentDetail";
import { LoginPage } from "./feature/login/LoginPage";
import { RegistrationPage } from "./feature/registration/RegistrationPage";
import UsersList from "./feature/admin/pages/UsersList";
import AdminLayout from "./feature/admin/pages/AdminLayout";


function App() {
  localStorage.setItem('isLoggedIn', false);
  return (
    <Routes>

       <Route path="/" element={<RegistrationPage/>} />
       <Route path="/signin" element={<LoginPage/>} />

       
      {/* Dashboard layout for student */}
      <Route path="/student" element={<StudentHomepage />}>

        <Route path="dashboard" element={<StudentDashboard />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="profile" element={<StudentProfile />} />

      </Route>

      {/* These pages can stay outside since they are full-page view */}
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/assignment/:id" element={<AssignmentDetail />} />


      {/*admin navigatio flow*/}
      <Route path="/admin" element={<AdminLayout />}>
      <Route path="users" element={<UsersList />} />
      </Route>
    </Routes>
  );
}

export default App;
