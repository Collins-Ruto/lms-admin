import axios from "axios";
import React, { useState } from "react";
import { Button } from "../components";

function Login({ setLogin }) {
  const [user, setUser] = useState({});
  const [submit, setSubmit] = useState(false);
   const [isChecked, setIsChecked] = useState(false);

  const handleInput = (event) => {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value =
      target.type === "number" ? parseInt(target.value) : target.value;
    const name = target.name;

    target.type === "checkbox" && setIsChecked(!isChecked);

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    setSubmit(true);

    axios
      .get(`http://localhost:8000/user/${user.group}?userName=${user.userName}`)
      .then((res) => {
        setLogin(res.data);
        console.log("user", res.data);
        setSubmit(false);
      });
  };

  console.log(user);
  console.log(isChecked);

  return (
    <div className="h-screen flex justify-center w-full">
      <div className="flex border m-auto items-center rounded-lg bg-slate-800 w-[50rem] ">
        <div className="login-left">
          <img
            className="w-96 cover mx-4"
            src="https://preschool.dreamguystech.com/template/assets/img/login.png"
            alt="Logo"
          />
        </div>
        <div className="mx-0 p-4">
          <h1 className="text-2xl font-semibold mb-4">Welcome to Ace Accademy</h1>

          <form action="index.html" className="mt-4">
            <div className="relative items-center">
              <label>
                Log in as <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center cursor-pointer">
                <select
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  name="group"
                  value={user.group}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select group</option>
                  <option value="students">student</option>
                  <option value="teachers">teacher</option>
                  <option value="admins">adminstrator</option>
                </select>
                <div className="pointer-events-none absolute right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label>
                userName <span className="text-red-500">*</span>
              </label>
              <div className="flex relative items-center cursor-pointer">
                <input
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  name="userName"
                  value={user.userName}
                  className="block shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="eg: 01john"
                />
                <div className="cursor-pointer right-0 absolute px-2 text-gray-700">
                  <img
                    src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry.png"
                    alt="user"
                    className="fill-current w-8"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label>
                Password <span className="text-red-500">*</span>
              </label>
              <input
                onChange={(e) => {
                  handleInput(e);
                }}
                checked={isChecked}
                name="password"
                value={user.password}
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pass-input"
                type="password"
              />
            </div>
            <div className="forgotpass">
              <div className="remember-me">
                <label>
                  {" "}
                  <input
                    onChange={(e) => {
                      handleInput(e);
                    }}
                    value={user.radio}
                    className="mr-2 w-4 h-4"
                    type="checkbox"
                    name="radio"
                  />
                  Remember me
                </label>
              </div>
            </div>
            <div className="my-4">
              {submit ? (
                <Button />
              ) : (
                <button
                  onClick={() => handleSubmit()}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                  type="submit"
                >
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
