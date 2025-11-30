import api from "./api";

const getCoursesEndpoint = process.env.REACT_APP_API_GET_COURSES;
const getCourseDetailsEndpoint = process.env.REACT_APP_API_GET_COURSE_DETAILS;

console.log("getCoursesEndpoint:", getCoursesEndpoint);
console.log("getCourseDetailsEndpoint:", getCourseDetailsEndpoint);


export const getCourses = () => {
    return api.get(getCoursesEndpoint);
}

export const getCourseDetails = (courseId) => {
    const res = api.get(getCourseDetailsEndpoint + '/' + courseId);
    return res;
};