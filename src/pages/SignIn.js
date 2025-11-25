import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    // Fetch all users from MockAPI
    const res = await fetch("https://6925375e82b59600d722bc2a.mockapi.io/users/user");
    const users = await res.json();

    // Find user with matching email
    const foundUser = users.find((u) => u.email === email);

    if (!foundUser) {
      alert("User not found");
      return;
    }

    // Validate password
    if (foundUser.password !== password) {
      alert("Incorrect password");
      return;
    }

    // If login successful → create a fake token
    const token = Math.random().toString(36).substring(2);

    // Store token, username, and role together in localStorage
    const userData = {
      token: token,
      username: foundUser.fullName,
      role: foundUser.role
    };
    localStorage.setItem("user", JSON.stringify(userData));

    //Navigate based on role
    if (foundUser.role === "teacher") {
      navigate("/teacher/dashboard");
    } else {
      navigate("/student/dashboard");
    }

  } catch (error) {
    console.error(error);
    alert("Login failed");
  }
};




  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 p-12 flex-col justify-center items-center text-white">
        <div className="max-w-md text-center space-y-6">

          {/* Book Icon */}
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5" stroke="currentColor"
              className="w-10 h-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4.5M12 6v13.5m0-13.5H8.25A2.25 2.25 0 006 8.25v10.5M12 6h3.75A2.25 2.25 0 0118 8.25v10.5M6 18.75h12" />
            </svg>
          </div>

          <h1 className="text-3xl font-semibold">Welcome to CloudLMS</h1>
          <p className="text-blue-100">
            Empower your learning journey with our cloud-native LMS.
          </p>

          <img
            src="https://images.unsplash.com/photo-1759984782062-c90baecd0c93?auto=format&fit=crop&w=800&q=80"
            alt="Learning illustration"
            className="w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">

          {/* Mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              {/* Book Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="white"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4.5M12 6v13.5m0-13.5H8.25A2.25 2.25 0 006 8.25v10.5M12 6h3.75A2.25 2.25 0 0118 8.25v10.5M6 18.75h12" />
              </svg>
            </div>
            <span className="text-gray-800 text-xl font-semibold">CloudLMS</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-gray-800 text-2xl font-semibold">Sign in to your account</h2>
            <p className="text-gray-500">Enter your credentials to access your dashboard</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">

            {/* Email */}
            <div className="space-y-2">
              <label className="text-gray-700">Email address</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="h-12 w-full px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Password</label>
                <Link to="/forgot-password" className="text-blue-500 hover:text-blue-600 text-sm">
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="h-12 w-full px-4 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* Password Toggle Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    // Eye Off Icon
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M9.88 9.88A3 3 0 0114.12 14.12M6.1 6.1C3.6 8.1 2 12 2 12s2.5 6.5 10 6.5c2.1 0 3.9-.5 5.4-1.5M9.9 9.9C10.3 9.2 11 8.8 12 8.8c1.8 0 3.2 1.4 3.2 3.2 0 1-.4 1.7-1 2.3" />
                    </svg>
                  ) : (
                    // Eye Icon
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s3.5-7.5 10.5-7.5S22.5 12 22.5 12s-3.5 7.5-10.5 7.5S1.5 12 1.5 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <label className="text-gray-500 cursor-pointer">Remember me for 30 days</label>
            </div>

            {/* Submit Button */}
            <button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
              Sign in
            </button>

           
          </form>

          <p className="text-center text-gray-500">
            Don’t have an account?{' '}
            <Link to="/" className="text-blue-500 hover:text-blue-600">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
