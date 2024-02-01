import instance from ".";

const login = async (userInfo) => {
  const { data } = await instance.post("/api/user/signin", userInfo);
  return data;
};

const register = async (userInfo) => {
  const { data } = await instance.post("/api/user/signup", userInfo);
  console.log(data);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

export { login, register, me, getAllUsers };
