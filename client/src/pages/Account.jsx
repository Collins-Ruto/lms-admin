import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "../components";

function Account() {
  const [user, setUser] = useState();
  const [editUser, setEditUser] = useState({});
  const [passManager, setPassManager] = useState(false);
   const [confPass, setConfPass] = useState("");
   const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const user = JSON?.parse(localStorage?.getItem("user"));
    user && setUser(user);
  }, []);

  const handleInput = (event) => {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value =
      target.type === "number" ? parseInt(target.value) : target.value;
    const name = target.name;

    setEditUser({ ...editUser, [name]: value });
  };

  const handleSubmit = () => {
    setSubmit(true);
    axios
      .post("http://localhost:8000/teachers", editUser)
      .then((res) => {
        setSubmit(false);
      });
    //   axios
    //     .post("https://lmsadmin.onrender.com/teachers", editUser)
    //     .then((res) => {
    // setSubmit(false)});
  };

  const logOut = () => {
    localStorage.setItem("saved", JSON.stringify(false));
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    window.location.reload(true);
  };

  const handleVerify = (e) => {
    setConfPass(e.target.value);
  };


  return (
    <div>
      <div className="grid grid-cols-4 p-4 gap-4 h-[100vh_-_4rem]">
        <div className="col-start-1 p-4 flex flex-col items-center align-middle justify-center">
          <img
            className="w-28 rounded-full bg-gray-300 p-2"
            src="https://img.icons8.com/ios-glyphs/120/000000/user--v1.png"
            alt=""
          />
          <div className="text-blue-600 pb-4 pt-2">{user.type}</div>
          <div className="p-2 text-justify text-xl text-slate-800 flex flex-col gap-2">
            <div className="">Name: {user?.name} </div>
            <div className="">Phone: {user?.phone} </div>
            <div className="">Email: {user?.email} </div>
          </div>
          <div
            onClick={() => {
              logOut();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
          >
            Log Out
          </div>
        </div>
        <div className="col-start-2 col-span-3">
          <div className=" flex justify-around border-b-4 text-lg">
            <div
              className={`${!passManager && "border-b-4 border-blue-600"}`}
              onClick={() => {
                setPassManager(false);
              }}
            >
              Account settings
            </div>
            <div
              className={`${passManager && "border-b-4 border-blue-600"}`}
              onClick={() => {
                setPassManager(true);
              }}
            >
              Password Manager
            </div>
            <div
              className={`${passManager && "border-b-4 border-blue-600"}`}
              onClick={() => {
                setPassManager(true);
              }}
            >
              Edit Details
            </div>
          </div>
          {!passManager ? (
            <div className=""></div>
          ) : (
            <div className="p-4">
              <h1 className="text-xl py-4 text-center mx-auto">Change your Password</h1>
              <div className="">
                <div className="mx-auto flex flex-col w-80 gap-4 gap-y-8 pb-4">
                  <div className="col-12 col-sm-4">
                    <div className="">
                      <label>
                        Old Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={editUser.oldPassword}
                        name="oldPassword"
                        type="oldPassword"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter Old Password"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="">
                      <label>
                        New Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={editUser.password}
                        name="password"
                        type="password"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter New Password"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>
                        Repeat Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleVerify(e);
                        }}
                        value={confPass}
                        name="password"
                        type="password"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Confirm Password"
                      />
                      {confPass && confPass !== editUser.password && (
                        <div className="text-xs text-red-500">
                          passwords do not match
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="">
                    {submit ? (
                      <Button />
                    ) : (
                      <button
                        onClick={() => handleSubmit()}
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
