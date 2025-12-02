import { getCourseDetails } from "../api/courseService";
import { useEffect, useState } from "react";

export default function useCourseDetails(courseId) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {

        setError('');
        setLoading(true);
        getCourseDetails(courseId)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(`Error: ${error.message}. Failed to fetch course Details`)
            })
            .finally(() => {
                setLoading(false)
            });
    }, [courseId]);

    return { data, loading, error, setData };
}