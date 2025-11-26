import React from 'react';

export default function InputField({ label, type, value, onChange, placeholder, required = true }) {
  return (
    <div>
      <label className="block mb-1 text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full h-12 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
