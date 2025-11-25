import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  { RegisterPage } from './pages/Register';
import  { LoginPage } from './pages/SignIn';
import DashBoard from './Teacher/DashBoard';
import SDashBoard from './Student/SDashBoard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/signin" element={<LoginPage/>} />
        <Route path="/teacher/dashboard" element={<DashBoard/>} />
        <Route path="/student/dashboard" element={<SDashBoard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
