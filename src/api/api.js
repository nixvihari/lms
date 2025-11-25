import axios from "axios";
import { Navigate } from "react-router-dom";


const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            console.log('Unauthorized Redirecting...');
            <Navigate to="/login" replace/>
        }
        return Promise.reject(error);
    }
);

export default api;