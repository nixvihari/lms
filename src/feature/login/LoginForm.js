import InputField from "../../common_components/InputField";
import PasswordField from "../../common_components/PasswordField";

export default function LoginForm({ email, setEmail, password, setPassword, handleLogin }) {
  return (
    <form onSubmit={handleLogin} className="space-y-6">

      {/* Email Field */}
      <InputField
        label="Email address"
        type="email"
        placeholder="name@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Field */}
      <PasswordField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Remember me */}
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="w-4 h-4 align-middle" />
        <label className="text-gray-500 cursor-pointer leading-tight">
          Remember me for 30 days
        </label>
      </div>

      {/* Submit button */}
      <button className="w-full h-12 bg-blue-900 hover:bg-gray-500 text-white rounded-md transition">
        Sign in
      </button>
    </form>
  );
}
