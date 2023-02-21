import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "../components";

function Exam() {
  const [exam, setExam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios.get("https://lmsadmin.onrender.com/exams").then((res) => {
      setExam(res.data);
    });

    axios.get("https://lmsadmin.onrender.com/subjects").then((res) => {
      setSubjects(res.data.subjects);
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
            <div className="m-4 bg-[#F7F6FB] rounded-xl p-4">
              <table className=" w-full">
                <thead className="">
                  <tr className="text-lg p-4">
                    <th className="p-4">Exam</th>
                    <th className="p-4">Student</th>
                    <th className="p-4">Term</th>
                    <th className="p-4">Date</th>
                    {subjects.map((subject, index) => (
                      <th className="p-4 border-x-2" key={index}>
                        {subject.slug}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {exam.length &&
                    exam.map((data, index) => {
                      const exam = data.node;
                      return (
                        <tr
                          className={` p-4 ${index % 2 === 0 && "bg-white"}`}
                          key={index}
                        >
                          <td className="p-4">{exam.name}</td>
                          <td className="p-4">{exam.student?.name}</td>
                          <td className="p-4">{exam?.term}</td>
                          <td className="p-4">{exam.examDate}</td>
                          {subjects.map((subject) => (
                            <td className="p-4 border-x-2">
                              {exam.results[subject.slug] || "-"}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
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
