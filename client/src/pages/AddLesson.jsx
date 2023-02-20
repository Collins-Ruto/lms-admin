import axios from "axios";
import React, { useState } from "react";
import { Button } from "../components";

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

function AddLesson() {
  const [lesson, setLesson] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleInput = (event) => {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value =
      target.type === "number" ? parseInt(target.value) : target.value;
    const name = target.name;

    setLesson({ ...lesson, [name]: value });
  };

  const handleSubmit = () => {
    setSubmit(true);
    // axios
    //   .post("https://lmsadmin.onrender.com/lessons", lesson)
    //   .then((res) => console.log(res.message));
    axios.post("https://lmsadmin.onrender.com/lessons", lesson).then((res) => {
      console.log(res);
      setSubmit(false);
    });
  };

  console.log(lesson);
  return (
    <div>
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Add lessons</h3>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="m-4 bg-[#F7F6FB] rounded-xl p-6">
            <div className="card-body">
              <form>
                <div className="col-12">
                  <h5 className="text-xl pb-4">
                    lesson Information{" "}
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
                        Subject ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={lesson.sid}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter subject ID"
                        name="sid"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <label>Stream ID </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={lesson.stid}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Stream ID"
                        name="stid"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <label>
                        Teacher Username <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={lesson.tid}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Teacher Username"
                        name="tid"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className=" calendar-icon">
                      <label>
                        Day of Week<span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={lesson.day}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline datetimepicker"
                        type="text"
                        placeholder="eg, Fri"
                        name="day"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className=" calendar-icon">
                      <label>
                        Start Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={lesson.start}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline datetimepicker"
                        type="time"
                        placeholder="eg: 14:00"
                        name="start"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className=" calendar-icon">
                      <label>
                        End Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={lesson.end}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline datetimepicker"
                        type="time"
                        placeholder="eg: 15:20"
                        name="end"
                      />
                    </div>
                  </div>

                  <div className="">
                    <div className="">
                      <label>Attendance List</label>
                      <textarea
                        onChange={(e) => {
                          handleInput(e);
                        }}
                        value={lesson.attnd}
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter Attendance list"
                        name="attnd"
                      />
                    </div>
                  </div>
                </div>
                <div className=" mt-4">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLesson;
