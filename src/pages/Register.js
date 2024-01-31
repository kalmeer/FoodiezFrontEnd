import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { register } from "../api/auth";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      alert("success");
    },
    onError: () => {
      alert("error");
    },
  });

  const handleChange = (e) => {
    console.log(userInfo);
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    mutate();
  };

  return (
    <div className="bg-orange-100 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-orange-500 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Register</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="username"
              id="username"
              name="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="username"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="password"
              required
            />
          </div>
          {/*  */}
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="confirm password"
              required
            />
          </div>
          {/*  */}
          <div className="flex justify-center bg-orange-600 rounded-3xl">
            <button
              style={{ width: "100%" }}
              type="submit"
              className="text-orange-100 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"

              // className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              // {--tw bg-opacity:1;
              // background-color: rgb(204,94,17/ var (--tw-bg-opacity));
              // }
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
