import { useEffect, useState } from 'react'
import { getUserProfile } from '../api/userService';

export default function useUserProfile() {
    const [student, setStudent] = useState({ id: '', name: '', email: '', about: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        setLoading(true);
        getUserProfile()
            .then((response) => {
                setStudent({
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    about: '',
                });
            })
            .catch((error) => {
                setError('Failed to fetch profile info');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { student, loading, error };
}
