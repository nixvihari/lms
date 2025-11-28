import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import api from "../../api/api";


export function RegistrationPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const passwordRules = [
    { label: "At least 8 characters", valid: formData.password.length >= 8 },
    { label: "Contains uppercase letter", valid: /[A-Z]/.test(formData.password) },
    { label: "Contains lowercase letter", valid: /[a-z]/.test(formData.password) },
    { label: "Contains number", valid: /[0-9]/.test(formData.password) },
    { label: "Contains special character", valid: /[!@#$%^&*]/.test(formData.password) },
  ];


  const registrationUrl = "/register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    api.post(registrationUrl, formData)
      .then(response => {
        console.log("Successfully registered")
        setFormData({
          name: "",
          email: "",
          role: "",
          password: "",
        });
        navigate("/signin", { replace: true });
      })
      .catch(error => {
        setError("Error. Failed to register")
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex overflow-hidden">

      {/* LEFT SIDE (Exactly same as your original UI) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 p-12 flex-col justify-center items-center text-white">
        <div className="max-w-md space-y-6 text-center">

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

          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              ["10,000+", "Active Students"],
              ["500+", "Expert Teachers"],
              ["1,000+", "Courses"],
              ["4.9/5", "Average Rating"],
            ].map(([value, label], i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <div className="text-white">{value}</div>
                <p className="text-blue-100 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
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
            <p className="text-gray-500">
              Get started with your free account today
            </p>
          </div>

          {/* FORM COMPONENT HERE */}
          <RegistrationForm
            formData={formData}
            setFormData={setFormData}
            passwordRules={passwordRules}
            handleSubmit={handleSubmit}
          />

          {loading &&
            <div id='loader' className='flex justify-center items-center h-10'>
              <div className='w-9 h-9 border-4 border-blue-500 border-t-transparent rounded-full  animate-spin'></div>
            </div>
          }
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <p className="text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500">
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
