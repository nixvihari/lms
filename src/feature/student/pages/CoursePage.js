import { useEffect, useState } from "react";
import CourseList from "../components/CourseList";
import SearchBar from "../components/SearchBar";
import useCourses from "../../../hooks/useCourses";
import Loader from "../../../common_components/Loader";
import ErrorMessage from "../../../common_components/ErrorMessage";

export default function CoursePage() {
  // const [courses, setCourses] = useState([]);
  const { courses, loading, error } = useCourses();
  const [filtered, setFiltered] = useState([]);
  
  useEffect(() => {
    setFiltered(courses);
  },[courses]);

  // Load dummy data 1
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const formatted = data.products.map((item) => ({
  //         id: item.id,
  //         title: item.title,
  //         description: item.description,
  //         image: item.thumbnail,
  //         duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //         teacher: "John Doe",
  //         teacherAvatar: `https://i.pravatar.cc/150?img=${item.id}`,
  //         enrolled: Math.floor(Math.random() * 10000),
  //       }));

  //       setCourses(formatted);
  //       setFiltered(formatted);
  //     });
  // }, []);


  // useEffect(() => {
  //   const courses = [
  //     {
  //       id: 1,
  //       title: "React Fundamentals",
  //       description: "Learn the basics of React including components, props, and state management.",
  //       image: "https://placehold.co/300x200?text=React+Fundamentals",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "John Doe",
  //       teacherAvatar: "https://placehold.co/100x100?text=JD",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     },
  //     {
  //       id: 2,
  //       title: "JavaScript Essentials",
  //       description: "Master ES6+ features, asynchronous programming, and DOM manipulation.",
  //       image: "https://placehold.co/300x200?text=JavaScript+Essentials",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "Jane Smith",
  //       teacherAvatar: "https://placehold.co/100x100?text=JS",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     },
  //     {
  //       id: 3,
  //       title: "Node.js for Beginners",
  //       description: "Build server-side applications using Node.js and Express.",
  //       image: "https://placehold.co/300x200?text=Node.js+Basics",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "Michael Brown",
  //       teacherAvatar: "https://placehold.co/100x100?text=MB",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     },
  //     {
  //       id: 4,
  //       title: "Full-Stack Development",
  //       description: "Learn to build complete web apps with React, Node.js, and MongoDB.",
  //       image: "https://placehold.co/300x200?text=Full+Stack+Dev",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "Emily Davis",
  //       teacherAvatar: "https://placehold.co/100x100?text=ED",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     },
  //     {
  //       id: 5,
  //       title: "TypeScript Mastery",
  //       description: "Enhance your JavaScript skills with TypeScript for better type safety.",
  //       image: "https://placehold.co/300x200?text=TypeScript+Mastery",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "Chris Wilson",
  //       teacherAvatar: "https://placehold.co/100x100?text=CW",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     },
  //     {
  //       id: 6,
  //       title: "CSS Flexbox & Grid",
  //       description: "Design responsive layouts using modern CSS techniques.",
  //       image: "https://placehold.co/300x200?text=CSS+Flexbox+Grid",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "Sophia Lee",
  //       teacherAvatar: "https://placehold.co/100x100?text=SL",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     },
  //     {
  //       id: 7,
  //       title: "React Hooks Deep Dive",
  //       description: "Understand useState, useEffect, and custom hooks in React.",
  //       image: "https://placehold.co/300x200?text=React+Hooks",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "David Clark",
  //       teacherAvatar: "https://placehold.co/100x100?text=DC",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     },
  //     {
  //       id: 8,
  //       title: "Next.js for Production",
  //       description: "Build SEO-friendly and fast web apps using Next.js.",
  //       image: "https://placehold.co/300x200?text=Next.js+Course",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "Olivia Martinez",
  //       teacherAvatar: "https://placehold.co/100x100?text=OM",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     },
  //     {
  //       id: 9,
  //       title: "MongoDB Basics",
  //       description: "Learn NoSQL database concepts and CRUD operations with MongoDB.",
  //       image: "https://placehold.co/300x200?text=MongoDB+Basics",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "Ethan White",
  //       teacherAvatar: "https://placehold.co/100x100?text=EW",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     },
  //     {
  //       id: 10,
  //       title: "Git & GitHub Essentials",
  //       description: "Master version control and collaboration using Git and GitHub.",
  //       image: "https://placehold.co/300x200?text=Git+GitHub",
  //       duration: Math.floor(Math.random() * 40) + 10 + " hours",
  //       teacher: "Isabella Green",
  //       teacherAvatar: "https://placehold.co/100x100?text=IG",
  //       enrolled: Math.floor(Math.random() * 10000)
  //     }
  //   ];

  //   setCourses(courses);
  //   setFiltered(courses);
  // }, []);



  //Load dummy data 2
  // useEffect(() => {
  //   setCourses(dummyCourses);
  //   setFiltered(dummyCourses);
  // }, []);

  const handleSearch = (query) => {
    const s = query.toLowerCase();

    const result = courses.filter((c) =>
      c.title.toLowerCase().includes(s)
    );

    setFiltered(result);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {loading && <Loader />}
      <h1 className="text-3xl font-bold text-slate-800">Course Catalog</h1>
      <p className="text-slate-500 -mt-2">
        Explore our wide range of courses and start learning today
      </p>
      {error && <ErrorMessage />}
      <SearchBar onSearch={handleSearch} />
      <CourseList courses={filtered} />
    </div>
  );
}
