// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';



// import { RegistrationPage } from './feature/registration/RegistrationPage';
// import { LoginPage } from './feature/login/LoginPage';
// import DashBoard from './feature/home/StudentHomepage';
// import CoursePage from './feature/student/pages/CoursePage';
// import CourseDetail from './feature/student/pages/CourseDetail';
// import AssignmentDetail from './feature/student/pages/AssignmentDetail';
// import StudentProfile from './feature/student/pages/StudentProfile';
// import StudentDashboard from './feature/student/pages/StudentDashboard';



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<RegistrationPage/>} />
//         <Route path="/signin" element={<LoginPage/>} />
//         <Route path="/coursepage" element={<CoursePage/>}/>
//         <Route path="/course/:id" element={<CourseDetail />} />
//         <Route path="/assignment/:id" element={<AssignmentDetail />} />
//         <Route path="/profile" element={<StudentProfile/>}/>
//         <Route path='/studentDashboard' element={<StudentDashboard/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




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

    </Routes>
  );
}

export default App;
