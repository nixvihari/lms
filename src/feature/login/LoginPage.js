import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import api from "../../api/api";


export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    api.post("/login", { email, password })
      .then(response => {
        console.log("Sign in Successful.");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("isLoggedIn", true);

        setEmail("");
        setPassword("");

        if (localStorage.getItem('role') === 'student') {
          navigate('/student/dashboard', { replace: true });
        }

        if (localStorage.getItem('role') === 'teacher') {
          navigate('/teacher/dashboard', { replace: true });
        }

        if (localStorage.getItem('role') === 'admin') {
          navigate('/admin/dashboard', { replace: true })
        }
      })
      .catch(error => {
        setError("Invalid credentials. Failed to sign in.");
      })
      .finally(() => {
        setLoading(false);
      })
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE (same as original) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 p-12 flex-col justify-center items-center text-white">
        <div className="max-w-md text-center space-y-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 6V4.5M12 6v13.5m0-13.5H8.25A2.25 2.25 0 006 8.25v10.5M12 6h3.75A2.25 2.25 0 0118 8.25v10.5M6 18.75h12" />
            </svg>
          </div>

          <h1 className="text-3xl font-semibold">Welcome to CloudLMS</h1>
          <p className="text-blue-100">Empower your learning journey with our cloud-native LMS.</p>

          <img
            src="https://images.unsplash.com/photo-1759984782062-c90baecd0c93?auto=format&fit=crop&w=800&q=80"
            alt="Learning illustration"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">

          {/* MOBILE LOGO */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="white"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 6V4.5M12 6v13.5m0-13.5H8.25A2.25 2.25 0 006 8.25v10.5M12 6h3.75A2.25 2.25 0 0118 8.25v10.5M6 18.75h12" />
              </svg>
            </div>
            <span className="text-gray-800 text-xl font-semibold">CloudLMS</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-gray-800 text-2xl font-semibold">Sign in to your account</h2>
            <p className="text-gray-500">Enter your credentials to access your dashboard</p>
          </div>

          {/* Login Form Component */}
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />

          {loading &&
            <div id='loader' className='flex justify-center items-center h-10'>
              <div className='w-9 h-9 border-4 border-blue-500 border-t-transparent rounded-full  animate-spin'></div>
            </div>
          }

          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

          <p className="text-center text-gray-500">
            Don’t have an account?{" "}
            <Link to="/" className="text-blue-500 hover:text-blue-600">Sign up</Link>
          </p>

        </div>
      </div>
    </div >
  );
}
