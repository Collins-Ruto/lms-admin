import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  console.log("data");
  useEffect(() => {
    axios.get("https://lmsadmin.onrender.com/teachers").then((res) => {
      setTeachers(JSON.stringify(res.data));
      console.log("data1", teachers);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(teachers);

  return (
    <div className="">
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Teachers</h3>
      </div>
      <div className="">
        <div className="">
          <div className="flex justify-between p-4">
            <div className="">
              <div className="">
                <input
                  type="text"
                  className="shadow appearance-none border bg-[#121212] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <div className="m-4 bg-[#121212] rounded-xl">
          <table className=" w-full">
            <thead className="">
              <tr>
                <th className="p-6">ID</th>
                <th className="p-6">Name</th>
                <th className="p-6">Email</th>
                <th className="p-6">DOB</th>
                <th className="p-6">Joining Date</th>
                <th className="p-6">Mobile Number</th>
                <th className="p-6">Address</th>
                <th className="p-6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-3 border-red-700">
                <td className="p-6">PRE2209</td>
                <td className="p-6">
                  <h2 className="table-avatar">
                    <a href="student-details.html">Aaliyah sameer</a>
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
              <tr>
                <td className="p-6">PRE2209</td>
                <td className="p-6">
                  <h2 className="table-avatar">
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
          </table></div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
