import api from "./api";

const registerEndpoint = process.env.REACT_APP_API_USERS_REGISTER;

const loginEndpoint = process.env.REACT_APP_API_USERS_LOGIN;

export default { registerEndpoint, loginEndpoint };