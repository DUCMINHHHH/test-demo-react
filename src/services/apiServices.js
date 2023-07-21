import axios from "../utils/axiosCustomize";

const postCreateNewUser = (Email, Password, Username, Role, image) => {
  const data = new FormData();
  data.append("email", Email);
  data.append("password", Password);
  data.append("username", Username);
  data.append("role", Role);
  data.append("userimage", image);
  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, Username, Role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", Username);
  data.append("role", Role);
  data.append("userimage", image);
  return axios.put("api/v1/participant", data);
};

const DeleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
  return axios.post("api/v1/login", {
    email: email,
    password: password,
    delay: 2000,
  });
};

const postSignup = (email, password, username) => {
  return axios.post("api/v1/register", { email, password, username });
};

const getQuizByUser = () => {
  return axios.get("/api/v1/quiz-by-participant");
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  DeleteUser,
  getUserWithPaginate,
  postLogin,
  postSignup,
  getQuizByUser,
};
