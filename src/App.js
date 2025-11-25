import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import { RegistrationPage } from './feature/registration/RegistrationPage';
import { LoginPage } from './feature/login/LoginPage';
import DashBoard from './feature/home/DashBoard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage/>} />
        <Route path="/signin" element={<LoginPage/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
