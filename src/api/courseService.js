import api from "./api";

const getCoursesEndpoint = process.env.REACT_APP_API_GET_COURSES;
const getCourseDetailsEndpoint = process.env.REACT_APP_API_GET_COURSE_DETAILS;
const addCourseEndpoint = '/api/courses/addCourse';
const enrollForCourseEndpoint = '/api/courses/enroll';

console.log("getCoursesEndpoint:", getCoursesEndpoint);
console.log("getCourseDetailsEndpoint:", getCourseDetailsEndpoint);


export const getCourses = () => {
    return api.get(getCoursesEndpoint);
}

export const getCourseDetails = (courseId) => {
    const res = api.get(getCourseDetailsEndpoint + '/' + courseId);
    return res;
};

export const addCourse = (courseDetails) => {
    return api.post(addCourseEndpoint, courseDetails);
}

export const enrollForCourse = (courseId) => {
    return api.post(enrollForCourseEndpoint + '/' + courseId);
}