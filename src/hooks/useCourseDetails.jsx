import { useQuery } from "@tanstack/react-query";
import { getCourseDetails } from "../api/courseService";

export default function useCourseDetails(courseId) {
    return useQuery(['course', courseId], () => getCourseDetails(courseId));
}