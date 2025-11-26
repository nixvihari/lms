import { useEffect, useState } from "react";
import CourseList from "../CourseList";
import SearchBar from "../SearchBar";


export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.products.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.thumbnail,
          duration: Math.floor(Math.random() * 40) + 10 + " hours",
          teacher: "John Doe",
          teacherAvatar: `https://i.pravatar.cc/150?img=${item.id}`,
          enrolled: Math.floor(Math.random() * 10000),
        }));

        setCourses(formatted);
        setFiltered(formatted);
      });
  }, []);

  const handleSearch = (query) => {
    const s = query.toLowerCase();

  const result = courses.filter((c) =>
    c.title.toLowerCase().includes(s)
  );

  setFiltered(result);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-slate-800">Course Catalog</h1>
      <p className="text-slate-500 -mt-2">
        Explore our wide range of courses and start learning today
      </p>
      <SearchBar onSearch={handleSearch} />
      <CourseList courses={filtered} />
    </div>
  );
}
