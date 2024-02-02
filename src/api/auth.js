import instance from ".";
import { saveToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("/api/user/signin", userInfo);
  const token = data.token;
  if (token) {
    saveToken(token);
  }
  console.log(data);
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post("/api/user/signup", userInfo);
  const token = data.token;
  if (token) {
    saveToken(token);
  }
  console.log(data);
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("api/user");
  return data;
};

export { login, register, getAllUsers };
