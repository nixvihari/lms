import { useState } from "react";

export default function StudentCalendar() {
  const [currentDate] = useState(new Date());

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const daysArray = [];

  // Empty slots before the first day
  for (let i = 0; i < firstDay; i++) {
    daysArray.push("");
  }

  // Actual days
  for (let d = 1; d <= daysInMonth; d++) {
    daysArray.push(d);
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      {/* Month Title */}
      <h3 className="text-xl font-bold text-center mb-3">
        {monthNames[month]} {year}
      </h3>

      {/* Week Names */}
      <div className="grid grid-cols-7 text-center font-semibold text-slate-600 mb-2">
        <div>Sun</div><div>Mon</div><div>Tue</div>
        <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysArray.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              day === new Date().getDate() &&
              month === new Date().getMonth() &&
              year === new Date().getFullYear()
                ? "bg-blue-900 text-white font-bold"
                : "text-slate-700"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
