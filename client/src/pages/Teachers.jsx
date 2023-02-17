import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "../components";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("data");
  useEffect(() => {
    // axios.get("http://localhost:8000/teachers").then((res) => {
    //   setTeachers(res.data);
    //   setLoading(false);
    // });
    axios.get("https://lmsadmin.onrender.com/teachers").then((res) => {
      setTeachers(res.data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deleteTeacher = (slug, index) => {
    axios
      .delete("https://lmsadmin.onrender.com/teachers", {
        data: { slug: slug },
      })
      .then((res) => {
        console.log("res", res.data);
      });
    const newTeachers = teachers.splice(index, 1);
    setTeachers(newTeachers);
  };

  console.log(teachers);

  return (
    <div className="">
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Teachers</h3>
      </div>
      {loading && <Loader />}
      <div className="">
        <div className="">
          <div className="flex justify-between p-4">
            <div className="">
              <div className="">
                <input
                  type="text"
                  className="shadow appearance-none border bg-[#F7F6FB] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search by ID ..."
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <input
                  type="text"
                  className="shadow appearance-none border bg-[#F7F6FB] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search by Name ..."
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <input
                  type="text"
                  className="shadow appearance-none border bg-[#F7F6FB] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search by Phone ..."
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <button
                  type="btn"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="">
              <Link
                to="/addteacher"
                type="btn"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                {" "}
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png"
                  className="w-5 mr-1"
                  alt=""
                />
                Add
              </Link>
            </div>
          </div>
          <div className="m-4 bg-[#F7F6FB] rounded-xl">
            <table className=" w-full">
              <thead className="">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">DOB</th>
                  <th className="p-4">Streams</th>
                  <th className="p-4">Joining Date</th>
                  <th className="p-4">Mobile Number</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {teachers?.map((teacher, index) => (
                  <tr className="border-3 border-red-700" key={index}>
                    <td className="p-4">{teacher.node.slug}</td>
                    <td className="p-4">
                      <h2 className="table-avatar">
                        <a href="student-details.html">{teacher.node.name}</a>
                      </h2>
                    </td>
                    <td className="p-4">
                      {teacher.node.email?.substring(0, 29)}
                    </td>
                    <td className="p-4">{teacher.node.dateOfBirth}</td>
                    <td className="p-4">
                      {teacher.node.streams?.map((stream) => stream.name)}
                    </td>
                    <td className="p-4">{teacher.node.joiningDate}</td>
                    <td className="p-4">{teacher.node.phone}</td>
                    <td className="p-4 flex gap-2">
                      <Link to="/addteacher">
                      <img
                        src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-edit-interface-kiranshastry-solid-kiranshastry.png"
                        alt=""
                        className="w-6 cursor-pointer"
                      />
                      </Link>
                      <div
                        onClick={() => {
                          deleteTeacher(teacher.node.slug, index);
                        }}
                      >
                        <img
                          src="https://img.icons8.com/ios-filled/50/000000/waste.png"
                          alt=""
                          className="w-6 cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
