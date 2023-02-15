import React from "react";

function Login() {
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
        <div className="mx-0">
          <h1 className="text-2xl font-semibold mb-2">Welcome to</h1>
          <h2 className="text-xl">Sign in</h2>

          <form action="index.html" className="mt-4">
            <div className="mb-4">
              <label>
                Username <span className="text-red-500">*</span>
              </label>
              <div className="flex relative items-center cursor-pointer">
                <input
                  className="block shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
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
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pass-input"
                type="password"
              />
            </div>
            <div className="forgotpass">
              <div className="remember-me">
                <label>
                  {" "}
                  <input
                    className="mr-2 w-4 h-4"
                    type="checkbox"
                    name="radio"
                  />
                  Remember me
                </label>
              </div>
            </div>
            <div className="my-4">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
