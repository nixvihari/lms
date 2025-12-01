import { useEffect, useState } from "react";
import { addCourse } from "../api/courseService";

export default function useAddCourse(courseDetails) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    setError('');
    setLoading('true');

    addCourse(courseDetails)
        .then((response) => {
            console.log('Course Added: ', response.data);
        })
        .catch((error) => {
            setError('Error: Failed to add course. ' + error.message);
        })
        .finally(() => {
            setLoading(false);
        });

    return { data, loading, error };
}


