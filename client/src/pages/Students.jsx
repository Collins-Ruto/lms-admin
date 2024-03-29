import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Loader } from "../components";

 const testUser = {                                      name: "John Doe",                                 slug: "johndoe",                                  type: "admin",
       email: "johndoe@gmail.com",
       phone: "0711339134"
    }

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDelete, setisDelete] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [delStudent, setDelStudent] = useState("");
  const [userType, setUserType] = useState("");
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState({
    hasNextPage: false,
    hasPreviousPage: false,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    setUserType(testUser.type);

    axios.get("https://lmsadmin.onrender.com/students").then((res) => {
      setStudents(res.data.edges);
      setPages(res.data.pageInfo);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changePage = (direction) => {
    const data = {
      ...pages,
      direction: direction,
      cursor: direction === "after" ? pages.endCursor : pages.startCursor,
    };
    axios
      .post("https://lmsadmin.onrender.com/students/page", data)
      .then((res) => {
        setPages(res.data.pageInfo);
        setStudents(res.data.edges);
      });
  };

  const searchSubmit = async () => {
    const data = await axios.get(
      `https://lmsadmin.onrender.com/students/search?name=${search}`
    );
    setStudents(data.data);
    setSubmit(false);
  };

  const deleteStudent = () => {
    axios
      .delete("https://lmsadmin.onrender.com/students", {
        data: { slug: delStudent },
      })
      .then((res) => {
        setisDelete(false);
      });
    const newStudent = students.filter(
      (student) => student.node.slug !== delStudent
    );
    setStudents(newStudent);
  };

  console.log("students", students);
  console.log("pages", pages);

  const ConfirmDel = () => {
    return (
      <div className="absolute w-full">
        <div
          className="fixed right-0 w-[100%] lg:w-screen p-4 h-full opacity-40 bg-blend-darken bg-[#979799]"
          onClick={() => {
            setisDelete(!isDelete);
          }}
        ></div>
        <div
          className="
                flex flex-col fixed left-[45%] pt-[10%] h-screen opacity-100 bg-blend-darken "
        >
          <div className="text-center bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <img
              onClick={() => {
                setisDelete(false);
              }}
              className="w-8 cursor-pointer hover:bg-gray-200 p-1 rounded absolute right-2 top-2"
              src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"
              alt=""
            />
            <div className="md:flex md:flex-col items-center">
              <div className="mt-4 md:mt-0 md:ml-6 text-center ">
                <p className="font-bold text-xl">Confirm student deletion</p>
                <p className="text-base text-gray-600 my-2">
                  Are you sure you want to delete this student from the school
                  platform?
                </p>
              </div>
              <div className="text-orange-500 text-start rounded-xl bg-[#F7F6FB] p-2">
                <div className="flex text-orange-600">
                  <img
                    className="w-6 mr-1"
                    src="https://img.icons8.com/ios-glyphs/30/EE640C/error--v2.png"
                    alt=""
                  />
                  Warning
                </div>
                By deleting this student all associated data will also be
                permanently deleted.
              </div>
            </div>
            <div className="text-center text-white flex justify-around mt-4 md:flex md:px-8">
              <button
                onClick={() => {
                  setisDelete(false);
                }}
                className="block hover:bg-gray-400 w-full md:w-auto px-4 py-2 bg-gray-500 rounded-lg font-semibold text-sm mt-4 md:mt-0"
              >
                Cancel
              </button>
              {submit ? (
                <Button />
              ) : (
                <button
                  onClick={() => {
                    deleteStudent();
                    setSubmit(true);
                  }}
                  className="hover:bg-red-400 hover:text-white w-full md:w-auto px-4 py-3 md:py-2 bg-red-600 text-white rounded-lg font-semibold text-sm "
                >
                  Yes, confirm delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  console.log("students", students);
  return (
    <div>
      <div className="w-screen md:w-full">
        {isDelete && <ConfirmDel />}
        <div className="p-4 text-2xl font-semibold">
          <h3>Students</h3>
        </div>
        {loading && <Loader />}
        <div>
          <div>
            <div className="flex flex-col md:flex-row gap-4 justify-between p-4">
              <div>
                <div>
                  <input
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    value={search}
                    name="name"
                    type="text"
                    className="shadow bg-[#F7F6FB] appearance-none border-[1px] rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Search by ID ..."
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div>
                  {submit ? (
                    <Button />
                  ) : (
                    <button
                      onClick={() => {
                        searchSubmit();
                        setSubmit(true);
                      }}
                      type="btn"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Search
                    </button>
                  )}
                </div>
                {userType === "admin" && (
                  <div>
                    <Link
                      to="/addstudent"
                      type="btn"
                      className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
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
                )}
              </div>
            </div>
            <div className="m-4 bg-[#F7F6FB] rounded-xl p-4 overflow-auto">
              <table className=" w-full overflow-scroll text-justify">
                <thead>
                  <tr>
                    <th className="p-4">ID</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Stream</th>
                    <th className="p-4">DOB</th>
                    <th className="p-4">Guardian Name</th>
                    <th className="p-4">Mobile Number</th>
                    <th className="p-4">Gender</th>
                    {userType === "admin" && <th className="p-4">Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {students?.map((student, index) => (
                    <tr
                      className={` p-4 ${index % 2 === 0 && "bg-white"}`}
                      key={index}
                    >
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
                      {userType === "admin" && (
                        <td className="p-4 flex gap-2">
                          <Link to="/addstudent">
                            <img
                              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-edit-interface-kiranshastry-solid-kiranshastry.png"
                              alt=""
                              className="w-6 cursor-pointer"
                            />
                          </Link>
                          <div
                            onClick={() => {
                              setisDelete(true);
                              setDelStudent(student.node.slug);
                            }}
                          >
                            <img
                              src="https://img.icons8.com/ios-filled/50/000000/waste.png"
                              alt=""
                              className="w-6 cursor-pointer"
                            />
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex align-middle justify-center pb-10 md:pb-8">
              <div
                onClick={() => {
                  pages.hasPreviousPage && changePage("before");
                }}
                className={` ${
                  pages.hasPreviousPage
                    ? "bg-slate-700 cursor-pointer text-gray-100 hover:bg-gray-600 hover:text-white"
                    : "bg-gray-300 text-gray-800"
                }  inline-flex items-center px-4 py-2 mr-3 text-sm font-medium border border-gray-300 rounded-lg `}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Previous
              </div>
              <div
                onClick={() => {
                  pages.hasNextPage && changePage("after");
                }}
                className={` ${
                  pages.hasNextPage
                    ? "bg-slate-700 cursor-pointer text-gray-100 hover:bg-gray-600 hover:text-white"
                    : "bg-gray-300 text-gray-800"
                }  inline-flex items-center px-4 py-2 mr-3 text-sm font-medium border border-gray-300 rounded-lg `}
              >
                Next
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
