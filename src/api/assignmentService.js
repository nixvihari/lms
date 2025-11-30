import api from './api'

const getAssignmentsByCourseEndpoint = '/api/assignments/by-course/'
const getAssignmentByIdEndpoint = '/api/assignments/'

export const getAssignmentsByCourse = (courseId) => {
    console.log(courseId);
    return api.get(getAssignmentsByCourseEndpoint + courseId);
}

export const getAssignmentById = (assignmentId) => {
    return api.get(getAssignmentByIdEndpoint + assignmentId);
}

