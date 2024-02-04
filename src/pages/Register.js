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
              placeholder="Username"
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
              placeholder="Password"
              required
            />
          </div>
          {/*  */}
          <div className="mb-4">
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Confirm Password"
              required
            />
          </div>
          {/* jsinhtml */}
          {/* <script>
            {`${if(userInfo.password!=confirmpassword){<></>}else{}}`}
          </script> */}
          {/* jsinhtml */}
          <div className="flex justify-center ">
            {/*  */}
            {userInfo.password != userInfo.confirmpassword ? (
              <button
                type="submit"
                className="cursor-not-allowed text-orange-500 hover:text-orange-500 hover:bg-orange-200"
              >
                {/*  */}
                {/*  */}
                Register
              </button>
            ) : (
              <button
                type="submit"
                className=" text-orange-500 hover:text-orange-500 hover:bg-orange-200 "
              >
                {/*  */}
                {/*  */}
                Register
              </button>
            )}

            {/*  */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
