import React from "react";

function Login() {
  return (
    <div className="flex align-middle">
            <div class="flex border items-center mt-[5%] rounded-lg bg-slate-800 mx-auto w-[50rem] ">
              <div class="login-left">
                <img
                  class="w-96 cover mx-4"
                  src="https://preschool.dreamguystech.com/template/assets/img/login.png"
                  alt="Logo"
                />
              </div>
              <div class="mx-0">
                <h1 className="text-2xl font-semibold mb-2">
                  Welcome to 
                </h1>
                <h2 className="text-xl">Sign in</h2>

                <form action="index.html" className="mt-4">
                  <div class="mb-4">
                    <label>
                      Username <span class="text-red-500">*</span>
                    </label>
                    <div className="flex relative items-center cursor-pointer">
                      <input
                        class="block shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      />
                      <div class="cursor-pointer right-0 absolute px-2 text-gray-700">
                        <img
                          src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-interface-kiranshastry-lineal-kiranshastry.png"
                          alt="user"
                          className="fill-current w-8"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label>
                      Password <span class="text-red-500">*</span>
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pass-input"
                      type="password"
                    />
                  </div>
                  <div class="forgotpass">
                    <div class="remember-me">
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
                  <div class="my-4">
                    <button
                      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
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
