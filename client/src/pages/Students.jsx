import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/students").then((res) => {
      setStudents((res.data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(students[0]);

  return (
    <div className="">
      <div class="p-4 text-2xl font-semibold">
        <h3 class="">Students</h3>
      </div>
      <div className="">
        <div class="">
          <div class="flex justify-between p-4">
            <div class="">
              <div class="">
                <input
                  type="text"
                  class="shadow bg-[#121212] appearance-none border-[1px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search by ID ..."
                />
              </div>
            </div>
            <div class="">
              <div class="">
                <input
                  type="text"
                  class="shadow appearance-none border bg-[#121212] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search by Name ..."
                />
              </div>
            </div>
            <div class="">
              <div class="">
                <input
                  type="text"
                  class="shadow appearance-none border bg-[#121212] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search by Phone ..."
                />
              </div>
            </div>
            <div class="">
              <div class="">
                <button
                  type="btn"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Search
                </button>
              </div>
            </div>
            <div class="">
              <Link
                to="/addstudent"
                type="btn"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
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
            <thead class="">
              <tr>
                <th className="p-6">ID</th>
                <th className="p-6">Name</th>
                <th className="p-6">Stream</th>
                <th className="p-6">DOB</th>
                <th className="p-6">Parent Name</th>
                <th className="p-6">Mobile Number</th>
                <th className="p-6">Address</th>
                <th className="p-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {students?.map((student) => (
                <tr className="border-3 border-red-700">
                  <td className="p-6">{student.node.slug}</td>
                  <td className="p-6">
                    <h2 class="table-avatar">
                      <a href="student-details.html">{student.node.name}</a>
                    </h2>
                  </td>
                  <td className="p-6">{student?.node.stream?.name}</td>
                  <td className="p-6">{student.node.dateOfBith}</td>
                  <td className="p-6">{student.node.parent}</td>
                  <td className="p-6">{student.node.phone}</td>
                  <td className="p-6">{student.node.address}</td>
                  <td className="p-6">
                    <img
                      src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/00B8FF/external-edit-interface-kiranshastry-solid-kiranshastry.png"
                      alt=""
                      className="w-8 cursor-pointer"
                    />
                  </td>
                </tr>
              ))} */}
              <tr>
                <td className="p-6">PRE2209</td>
                <td className="p-6">
                  <h2 class="table-avatar">
                    <a href="student-details.html">chuck norris</a>
                  </h2>
                </td>
                <td className="p-6">10 A</td>
                <td className="p-6">2 Feb 2002</td>
                <td className="p-6">Jeffrey Wong</td>
                <td className="p-6">097 3584 5870</td>
                <td className="p-6">911 Deer Ridge Drive,USA</td>
                <td className="p-6">
                  <img
                    src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/00B8FF/external-edit-interface-kiranshastry-solid-kiranshastry.png"
                    alt=""
                    className="w-8 cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
