import api from "./api";

const getCoursesEndpoint = process.env.REACT_APP_API_GET_COURSES;
const getCourseDetailsEndpoint = process.env.REACT_APP_API_GET_COURSE_DETAILS;

export const getCourses = () => {
    return api.get(getCoursesEndpoint);
}

//react-query
export const getCourseDetails = async (courseId) => {
    const { data } = await api.get(`${getCourseDetailsEndpoint}/${courseId}`);
    return data;
};