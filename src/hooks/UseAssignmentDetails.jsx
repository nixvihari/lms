import { useEffect, useState } from "react";
import { getAssignmentById } from "../api/assignmentService";

export default function UseAssignmentDetails(assignmentId) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log ('Assignment id: ', assignmentId)
        setError('');
        setLoading(true);
        getAssignmentById(assignmentId)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                setError('Error! Failed to fetch assignment details. ' + error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return { data, loading, error };
}
