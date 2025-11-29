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




import TeacherDashboard from './feature/teacher/TeacherDashboard';
import TeacherCoursePage from './feature/teacher/TeacherCoursePage';
import TeacherAssignmentDetail from './feature/teacher/TeacherAssignmentDetail';
import TeacherAssignments from './feature/teacher/TeacherAssignments';
import AddCourse from './feature/teacher/AddCourse';
import TeacherAssignmentReview from "./feature/teacher/TeacherAssignmentReview";
import CourseList from "./feature/teacher/CourseList";
import TeacherAssignmentUpload from "./feature/teacher/components/TeacherAssignmentUpload";
import TeacherProfile from "./feature/teacher/TeacherProfile";
function App() {
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


      {/* teacher routes */}
       <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/courses" element={<TeacherCoursePage />} />
        <Route path="/teacher/assignment/:id" element={<TeacherAssignmentDetail />} />
        <Route path="/teacher/assignments" element={<TeacherAssignments />} />
        <Route path="/teacher/add-course" element={<AddCourse />} />
        <Route path="/teacher/assignments/:id" element={<TeacherAssignmentReview />} />
        <Route path="/teacher/course/:id" element={<CourseList />} />
        <Route path="/teacher/assignments/:id/teacherAssignmentUpload" element={<TeacherAssignmentUpload />} />
        <Route path="/teacher/profile" element={<TeacherProfile />} />
    </Routes>
  );
}

export default App;
