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

export { postCreateNewUser, getAllUsers };
