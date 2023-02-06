import axios from "axios";
import React, { useState } from "react";

// eslint-disable-next-line no-unused-vars
const dum2 = {
  name: "Cynthia Graham",
  email: "cynthia@gmail.com",
  gender: "Female",
  parent: "George Graham",
  admid: "19",
  phone: 7122342729,
  dob: "2-6-2002",
  slug: "19cynthia",
  stream_slug: "1e",
};

function AddStudent() {
  const [student, setStudent] = useState({});

  const handleInput = (event) => {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value =
      target.type === "number" ? parseInt(target.value) : target.value;
    const name = target.name;

    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post("https://lmsadmin.onrender.com/students", student)
      .then((res) => console.log(res));
    // axios
    //   .post("http://localhost:8000/students", student)
    //   .then((res) => console.log(res));
  };

  console.log(student);
  return (
    <div>
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Add Students</h3>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="m-4 bg-[#F7F6FB] rounded-xl p-6">
            <div className="card-body">
              <form>
                <div className="col-12">
                  <h5 className="text-xl pb-4">
                    Student Information{" "}
                    <span>
                      <a href="javascript">
                        <i className="feather-more-vertical"></i>
                      </a>
                    </span>
                  </h5>
                </div>
                <div className="grid grid-cols-3 gap-4 gap-y-8">
                  <div className="">
                    <div className="">
                      <label>
                        Full Names <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={student.name}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Full Names"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <label>Admission ID </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={student.admid}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Admission ID"
                        name="admid"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <label>
                        Parent Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={student.parent}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Parent Name"
                        name="parent"
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
                        value={student.gender}
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
                        value={student.dob}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline datetimepicker"
                        type="text"
                        placeholder="DD-MM-YYYY"
                        name="dob"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <label>Username </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={student.slug}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Username"
                        name="slug"
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
                        value={student.email}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Email Address"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="inline-block relative items-center">
                    <label>
                      Stream ID<span className="text-red-500">*</span>
                    </label>
                    <input
                      onChange={(e) => {
                        handleInput(e);
                      }}
                      value={student.stream_slug}
                      className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Enter Sream ID"
                      name="stream_slug"
                    />
                  </div>

                  <div className="">
                    <div className="">
                      <label>Phone </label>
                      <input
                        onInput={(e) => {
                          handleInput(e);
                        }}
                        value={student.phone}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Enter Phone Number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="form-group students-up-files">
                      <label>Upload Student Photo (150px X 150px)</label>
                      <div className="mt-2">
                        <label className="border px-6 py-2 mx-auto cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded inline-flex items-center">
                          Choose File
                          <input className="hidden" type="file" />
                        </label>
                      </div>
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

export default AddStudent;
