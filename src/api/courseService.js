import api from "./api";

const getCoursesEndpoint = process.env.REACT_APP_API_GET_COURSES;

export const getCourses = () => { 
    return api.get(getCoursesEndpoint);
}