import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://lmsadmin.onrender.com/students").then((res) => {
      setStudents(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(students[0]);

  return (
    <div className="">
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Students</h3>
      </div>
      <div className="">
        <div className="">
          <div className="flex justify-between p-4">
            <div className="">
              <div className="">
                <input
                  type="text"
                  className="shadow bg-[#121212] appearance-none border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search by ID ..."
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <input
                  type="text"
                  className="shadow appearance-none border bg-[#121212] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search by Name ..."
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <input
                  type="text"
                  className="shadow appearance-none border bg-[#121212] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                to="/addstudent"
                type="btn"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                {" "}
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png"
                  className="w-5 mr-1 text-white"
                  alt=""
                />
                Add
              </Link>
            </div>
          </div>
          <div className="m-4 bg-[#121212] rounded-xl">
          <table className=" w-full">
            <thead className="">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Stream</th>
                <th className="p-4">DOB</th>
                <th className="p-4">Parent Name</th>
                <th className="p-4">Mobile Number</th>
                <th className="p-4">Gender</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((student, index) => (
                <tr className="border-3 border-red-700" key={index}>
                  <td className="p-4">{student.node.slug}</td>
                  <td className="p-4">
                    <h2 className="table-avatar">
                      <a href="student-details.html">{student.node.name}</a>
                    </h2>
                  </td>
                  <td className="p-4">{student?.node.stream?.name}</td>
                  <td className="p-4">{student.node.dateOfBirth}</td>
                  <td className="p-4">{student.node.parent}</td>
                  <td className="p-4">{student.node.phone}</td>
                  <td className="p-4">{student.node.gender}</td>
                  <td className="p-4">
                    <Link to="/addstudent">
                    <img
                      src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/00B8FF/external-edit-interface-kiranshastry-solid-kiranshastry.png"
                      alt=""
                      className="w-8 cursor-pointer"
                    /></Link>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-4">PRE2209</td>
                <td className="p-4">
                  <h2 className="table-avatar">
                    <a href="student-details.html">ivanka grant</a>
                  </h2>
                </td>
                <td className="p-4">10 A</td>
                <td className="p-4">2 Feb 2002</td>
                <td className="p-4">Jeffrey Wong</td>
                <td className="p-4">097 3584 5870</td>
                <td className="p-4">Female</td>
                <td className="p-4">
                  <img
                    src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/00B8FF/external-edit-interface-kiranshastry-solid-kiranshastry.png"
                    alt=""
                    className="w-8 cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table></div>
        </div>
      </div>
    </div>
  );
}

export default Students;
