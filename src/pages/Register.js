import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
  });

  const navigate = useNavigate();

  const passwordRules = [
    { label: 'At least 8 characters', valid: password.length >= 8 },
    { label: 'Contains uppercase letter', valid: /[A-Z]/.test(password) },
    { label: 'Contains lowercase letter', valid: /[a-z]/.test(password) },
    { label: 'Contains number', valid: /[0-9]/.test(password) },
    { label: 'Contains special character', valid: /[!@#$%^&*]/.test(password) },
  ];

  const handleSubmit = async (e) => {
  e.preventDefault();

  const userData = {
    fullName: formData.fullName,
    email: formData.email,
    role: formData.role,
    password,
  };

  try {
    const res = await fetch('https://6925375e82b59600d722bc2a.mockapi.io/users/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      // Redirect to Sign In page after successful registration
      navigate('/signin');
    } else {
      alert("Registration failed");
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};



  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 p-12 flex-col justify-center items-center text-white">
        <div className="max-w-md space-y-6 text-center">

          {/* Book Icon */}
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V4.5M12 6v13.5M12 6H8.25A2.25 2.25 0 006 8.25v10.5M12 6h3.75A2.25 2.25 0 0118 8.25v10.5M6 18.75h12"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-semibold">Start Your Learning Journey</h1>
          <p className="text-blue-100">
            Join thousands of students and teachers using CloudLMS.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              ['10,000+', 'Active Students'],
              ['500+', 'Expert Teachers'],
              ['1,000+', 'Courses'],
              ['4.9/5', 'Average Rating'],
            ].map(([value, label], i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <div className="text-white">{value}</div>
                <p className="text-blue-100 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white ">
        <div className="w-full max-w-md space-y-8">

          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4.5M12 6v13.5M12 6H8.25A2.25 2.25 0 006 8.25v10.5M12 6h3.75A2.25 2.25 0 0118 8.25v10.5M6 18.75h12"
                />
              </svg>
            </div>
            <span className="text-gray-800 text-xl font-semibold">CloudLMS</span>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Create your account
            </h2>
            <p className="text-gray-500">Get started with your free account today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block mb-1 text-gray-700">Full name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.fullName}
                required
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-700">Email address</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Role (Dropdown) */}
            <div>
              <label className="block mb-2 text-gray-700">I am a</label>
              <select
                className="w-full h-12 border border-gray-300 px-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.role}
                required
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              >
                <option value="">Select your role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher / Instructor</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* toggle eye icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    /* Eye Off */
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3l18 18M9.88 9.88A3 3 0 0114.12 14.12M6.1 6.1C3.6 8.1 2 12 2 12s2.5 6.5 10 6.5c2.1 0 3.9-.5 5.4-1.5"
                      />
                    </svg>
                  ) : (
                    /* Eye */
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M1.5 12s3.5-7.5 10.5-7.5S22.5 12 22.5 12s-3.5 7.5-10.5 7.5S1.5 12 1.5 12z"
                      />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Password Validation */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600 mb-2">Password must contain:</p>
              {passwordRules.map((rule, i) => (
                <div key={i} className="flex items-center gap-2 mb-1">
                  {rule.valid ? (
                    /* Check */
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    /* X */
                    <svg
                      className="w-4 h-4 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <span className={rule.valid ? 'text-green-600' : 'text-gray-500'}>
                    {rule.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2">
              <input type="checkbox" required className="mt-1 w-4 h-4" />
              <label className="text-gray-600 leading-snug">
                I agree to the{' '}
                <Link to="/terms" className="text-blue-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-blue-500">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit */}
            <button
              disabled={!passwordRules.every((rule) => rule.valid)}
              className="w-full h-12 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-md transition"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-gray-500">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
