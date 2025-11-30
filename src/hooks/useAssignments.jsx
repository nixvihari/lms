import React, { useEffect, useState } from 'react'
import { getAssignmentsByCourse } from '../api/assignmentService';

export default function useAssignments(courseId) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    console.log("courseid in hook", courseId);
    
    useEffect(() => {
        console.log("courseid in useEffect", courseId);

        setError('');
        setLoading(true);
        getAssignmentsByCourse(courseId)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            setError("Error! Failed to fetch Course Assignments" + error.message);
        })
        .finally(() => {
            setLoading(false);
        });
    },[])

    return {data, loading, error};
}
