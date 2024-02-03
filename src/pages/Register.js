import { useMutation } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      alert("success");
      setUser(true);
    },
    onError: () => {
      alert("error");
    },
  });

  const handleChange = (e) => {
    console.log(userInfo);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="bg-orange-100 min-h-screen flex items-center justify-center font-sans login-container">
      <div className="max-w-md w-full px-6 py-8 bg-orange-500 rounded-md shadow-md">
        <h2 className="text-3xl text-orange-100 font-semibold mb-6">
          Register
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div
            className={`${
              userInfo.email ? "text-orange-500 " : "text-orange-700"
            } text-end`}
          >
            *
          </div>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Email"
            required
          />

          <div
            className={`${
              userInfo.username ? "text-orange-500 " : "text-orange-700"
            } text-end`}
          >
            *
          </div>
          <input
            type="username"
            id="username"
            name="username"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Username"
            required
          />

          <div
            className={`${
              userInfo.password ? "text-orange-500 " : "text-orange-700"
            } text-end`}
          >
            *
          </div>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Password"
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-orange-100 rounded-md  hover:bg-orange-600 transition-colors w-full"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
