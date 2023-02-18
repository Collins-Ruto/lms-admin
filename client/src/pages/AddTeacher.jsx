import axios from "axios";
import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
const dum2 = {
  name: "Isaac Mayers",
  tid: "4564",
  gender: "Male",
  dob: "23-05-2002",
  email: "isaac@gmail.com",
  phone: 213124124,
  jod: "12-04-2023",
  quali: "Physics & Geography",
  slug: "123isaac",
  password: "123isaac",
};

function AddTeacher() {
  const [teacher, setTeacher] = useState(dum2);
  const [confPass, setConfPass] = useState("");

  const handleInput = (event) => {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value =
      target.type === "number" ? parseInt(target.value) : target.value;
    const name = target.name;

    setTeacher({ ...teacher, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("https://lmsadmin.onrender.com/teachers", teacher)
      .then((res) => console.log(res));
    // axios
    //   .post("http://localhost:8000/teachers", teacher)
    //   .then((res) => console.log(res));
  };

  const handleVerify = (e) => {
    setConfPass(e.target.value);
  };

  console.log(teacher);

  return (
    <div>
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Add Teachers</h3>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="m-4 bg-[#F7F6FB] rounded-xl p-6">
            <div className="card-body">
              <form>
                <div className="col-12">
                  <h5 className="text-xl pb-4">
                    Teacher Information{" "}
                    <span>
                      <a href="javascript">
                        <i className="feather-more-vertical"></i>
                      </a>
                    </span>
                  </h5>
                </div>
                <div className="grid grid-cols-3 gap-4 gap-y-8 pb-4">
                  <div className="">
                    <div className="">
                      <label>
                        Full Names <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={teacher.name}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Full Names"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <label>Teacher ID </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={teacher.tid}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Teacher ID"
                        name="tid"
                      />
                    </div>
                  </div>
                  <div className="inline-block relative items-center">
                    <label>
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center cursor-pointer">
                      <select
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        name="gender"
                        value={teacher.gender}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option>Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Others">Others</option>
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
                  <div className="">
                    <div className=" calendar-icon">
                      <label>
                        Date Of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={teacher.dob}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline datetimepicker"
                        type="text"
                        placeholder="DD-MM-YYYY"
                        name="dob"
                      />
                    </div>
                  </div>

                  <div className="">
                    <div className="">
                      <label>
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={teacher.email}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Email Address"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <label>Phone </label>
                      <input
                        onInput={(e) => {
                          handleInput(e);
                        }}
                        value={teacher.phone}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Enter Phone Number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className=" calendar-icon">
                      <label>
                        Joining Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={teacher.jod}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline datetimepicker"
                        type="text"
                        placeholder="DD-MM-YYYY"
                        name="jod"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <label>Qualification </label>
                      <textarea
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={teacher.quali}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Qualifications"
                        name="quali"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <h5 className="text-xl py-4">
                    <span>Login Details</span>
                  </h5>
                </div>
                <div className="grid grid-cols-3 gap-4 gap-y-8 pb-4">
                  <div className="">
                    <div className="">
                      <label>Username </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={teacher.slug?.toLowerCase()}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Username"
                        name="slug"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="form-group local-forms">
                      <label>
                        Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={teacher.password}
                        name="password"
                        type="password"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter Password"
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
                      {confPass && confPass !== teacher.password && (
                        <div className="text-xs text-red-500">
                          passwords do not match
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className=" mt-4">
                  <div className="">
                    <button
                      onClick={() => handleSubmit()}
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeacher;
