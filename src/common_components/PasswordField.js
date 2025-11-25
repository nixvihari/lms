import { useState } from 'react';

export default function PasswordField({ label, value, onChange, placeholder, required = true }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="block mb-1 text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="h-12 w-full px-4 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
        </button>
      </div>
    </div>
  );
}
