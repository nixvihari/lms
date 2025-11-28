import { Link } from "react-router-dom";
import InputField from "../../common_components/InputField";
import PasswordField from "../../common_components/PasswordField";

export default function RegistrationForm({ formData, setFormData, passwordRules, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <InputField
        label="Full name"
        type="text"
        placeholder="John Doe"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <InputField
        label="Email address"
        type="email"
        placeholder="name@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      {/* Role */}
      <div>
        <label className="block mb-2 text-gray-700">I am a</label>
        <select
          className="w-full h-12 border border-gray-300 px-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          value={formData.role}
          required
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="">Select your role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher / Instructor</option>
        </select>
      </div>

      <PasswordField
        label="Password"
        value={formData.password}
        placeholder="Create a strong password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />

      {/* Password Rules */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-600 mb-2">Password must contain:</p>
        {passwordRules.map((rule, i) => (
          <div key={i} className="flex items-center gap-2 mb-1">
            {rule.valid ? (
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className={rule.valid ? "text-green-600" : "text-gray-500"}>{rule.label}</span>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" required className="mt-1 w-4 h-4" />
        <label className="text-gray-600 leading-snug">
          I agree to the{" "}
          <Link to="/terms" className="text-blue-500">Terms of Service</Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-500">Privacy Policy</Link>
        </label>
      </div>

      <button
        disabled={!passwordRules.every((rule) => rule.valid)}
        className="w-full h-12 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white rounded-md transition"
      >
        Create account
      </button>
    </form>
  );
}
