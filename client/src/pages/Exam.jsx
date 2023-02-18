import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "../components";

function Exam() {
  const [exam, setExam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/exams").then((res) => {
      setExam(res.data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("exam", exam);
  return (
    <div>
      <div className="">
        <div className="p-4 text-2xl font-semibold">
          <h3 className="">exam</h3>
        </div>
        {loading && <Loader />}
        <div className="">
          <div className="">
            <div className="flex justify-between p-4">
              <div className="">
                <div className="">
                  <input
                    type="text"
                    className="shadow bg-[#F7F6FB] appearance-none border-[1px] rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Search by ID ..."
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  <input
                    type="text"
                    className="shadow appearance-none border bg-[#F7F6FB] rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Search by Name ..."
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  <input
                    type="text"
                    className="shadow appearance-none border bg-[#F7F6FB] rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
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
                  to="/addexam"
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
            <div className="m-4 bg-[#F7F6FB] rounded-xl">
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
                  {/* {exam?.map((exam, index) => (
                    <tr className="border-3 border-red-700" key={index}>
                      <td className="p-4">{exam.node.slug}</td>
                      <td className="p-4">
                        <h2 className="table-avatar">
                          <a href="student-details.html">{exam.node.name}</a>
                        </h2>
                      </td>
                      <td className="p-4">{exam?.node.stream?.name}</td>
                      <td className="p-4">{exam.node.dateOfBirth}</td>
                      <td className="p-4">{exam.node.parent}</td>
                      <td className="p-4">{exam.node.phone}</td>
                      <td className="p-4">{exam.node.gender}</td>
                      <td className="p-4 flex gap-2">
                        <Link to="/addexam">
                          <img
                            src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-edit-interface-kiranshastry-solid-kiranshastry.png"
                            alt=""
                            className="w-6 cursor-pointer"
                          />
                        </Link>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
