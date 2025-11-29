import api from "./api"

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const getUserProfileUrl = process.env.REACT_APP_API_BASE_URL + process.env.REACT_APP_API_GET_USER_PROFILE;

export const getUserProfile = () => {
    return api.get(getUserProfileUrl);
};