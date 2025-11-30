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




import TeacherDashboard from './feature/teacher/TeacherDashboard';
import TeacherCoursePage from './feature/teacher/TeacherCoursePage';
import TeacherAssignmentDetail from './feature/teacher/TeacherAssignmentDetail';
import TeacherAssignments from './feature/teacher/TeacherAssignments';
import AddCourse from './feature/teacher/AddCourse';
import TeacherAssignmentReview from "./feature/teacher/TeacherAssignmentReview";
import CourseList from "./feature/teacher/CourseList";
import TeacherAssignmentUpload from "./feature/teacher/components/TeacherAssignmentUpload";
import TeacherProfile from "./feature/teacher/TeacherProfile";
import ProtectedStudentRoute from "./ProtectedRoutes/ProtectedStudentRoute";
import ProtectedTeacherRoute from "./ProtectedRoutes/ProtectedTeacherRoute";
import ProtectedAdminRoute from "./ProtectedRoutes/ProtectedAdminRoute";
import TeacherHomepage from "./feature/home/TeacherHomePage";
function App() {
  return (
    <Routes>

       <Route path="/" element={<RegistrationPage/>} />
       <Route path="/signin" element={<LoginPage/>} />

       
      {/* Dashboard layout for student */}
       <Route
           path="/student"
           element={
               <ProtectedStudentRoute>
                 <StudentHomepage />
               </ProtectedStudentRoute>
             }
        >
             <Route path="dashboard" element={<StudentDashboard />} />
             <Route path="courses" element={<CoursePage />} />
             <Route path="assignments" element={<Assignments />} />
             <Route path="profile" element={<StudentProfile />} />
        </Route>

        {/* These pages can stay outside since they are full-page view */}
        {/* These pages must be OUTSIDE, full-page views */}
        <Route
          path="/course/:id"
          element={
            <ProtectedStudentRoute>
              <CourseDetail />
            </ProtectedStudentRoute>
          }
        />
        
        <Route
          path="/assignment/:id"
          element={
            <ProtectedStudentRoute>
              <AssignmentDetail />
            </ProtectedStudentRoute>
          }
        />  

      


      {/* teacher routes */}
      <Route
        path="/teacher"
        element={
          <ProtectedTeacherRoute>
            <TeacherHomepage />
          </ProtectedTeacherRoute>
        }
      >
          <Route path="dashboard" element={<TeacherDashboard/>}/>
          <Route path="courses" element={<TeacherCoursePage/>}/>
          <Route path="assignments" element={<TeacherAssignments/>}/>
          <Route path="profile" element={<TeacherProfile/>}/>
      </Route>
      
      
      
      <Route
        path="teacher/assignment/:id"
        element={
          <ProtectedTeacherRoute>
            <TeacherAssignmentDetail />
          </ProtectedTeacherRoute>
        }
      />
      
      
      <Route
        path="teacher/add-course"
        element={
          <ProtectedTeacherRoute>
            <AddCourse />
          </ProtectedTeacherRoute>
        }
      />
      
      <Route
        path="teacher/assignments/:id"
        element={
          <ProtectedTeacherRoute>
            <TeacherAssignmentReview />
          </ProtectedTeacherRoute>
        }
      />
      
      <Route
        path="teacher/course/:id"
        element={
          <ProtectedTeacherRoute>
            <CourseList />
          </ProtectedTeacherRoute>
        }
      />
      
      <Route
        path="/teacher/assignments/:id/teacherAssignmentUpload"
        element={
          <ProtectedTeacherRoute>
            <TeacherAssignmentUpload />
          </ProtectedTeacherRoute>
        }
      />
    
          
      {/*admin navigatio flow*/}
      <Route
          path="/admin"
          element={
              <ProtectedAdminRoute>
                <AdminLayout />
              </ProtectedAdminRoute>
            }
            >
          <Route path="users" element={<UsersList />} />
      </Route>


    </Routes>
  );
}

export default App;
