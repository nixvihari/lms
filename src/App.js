import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import { RegistrationPage } from './feature/registration/RegistrationPage';
import { LoginPage } from './feature/login/LoginPage';
import DashBoard from './feature/home/DashBoard';
import CoursePage from './feature/student/pages/CoursePage';
import CourseDetail from './feature/student/pages/CourseDetail';
import AssignmentDetail from './feature/student/pages/AssignmentDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage/>} />
        <Route path="/signin" element={<LoginPage/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/coursepage" element={<CoursePage/>}/>
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/assignment/:id" element={<AssignmentDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
