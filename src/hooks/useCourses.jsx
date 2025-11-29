import { useEffect, useState } from 'react'
import { getCourses } from '../api/courseService';

export default function useCourses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        setLoading(true);

        getCourses()
            .then((response) => {
                const mappedCourses = response.data.map(c => {
                    return {
                        id: c.courseId,
                        title: c.title,
                        description: c.description,
                        image: `https://placehold.co/300x200?text=${c.title.trim().replaceAll(" ", "+")}`,
                        duration: "duration",
                        teacher: "Teacher",
                        teacherAvatar: "https://placehold.co/100x100?text=T",
                        enrolled: Math.floor(Math.random() * 10000),
                    }
                })
                setCourses(mappedCourses);
            })
            .catch(error => setError('Error! Failed to fetch courses.'))
            .finally(() => setLoading(false));
    }, []);

    return { courses, loading, error };
}

// {
//       id: 10,
//       title: "Git & GitHub Essentials",
//       description: "Master version control and collaboration using Git and GitHub.",
//       image: "https://placehold.co/300x200?text=Git+GitHub",
//       duration: Math.floor(Math.random() * 40) + 10 + " hours",
//       teacher: "Isabella Green",
//       teacherAvatar: "https://placehold.co/100x100?text=IG",
//       enrolled: Math.floor(Math.random() * 10000)
//     }