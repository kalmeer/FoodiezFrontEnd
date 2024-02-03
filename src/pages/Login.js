import React, { useContext, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="bg-orange-100 min-h-screen flex items-center justify-center font-sans ">
      <div className="max-w-md w-full px-6 py-8 bg-orange-500 rounded-md shadow-md font-sans login-container ">
        <h2 className="text-3xl text-orange-100 font-semibold mb-6 font-sans">
          Login
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4 font-sans">
            <input
              type="username"
              name="username"
              id="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 font-sans"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-6">
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
          >
            Login
          </button>
          <br />
          <button className="transparent-button text-orange-50">
            <Link to={"/register"}>Not enrolled? Sign up now. {">"}</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
