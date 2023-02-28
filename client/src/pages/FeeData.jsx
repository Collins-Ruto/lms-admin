import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Loader } from "../components";

function FeeData() {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState("");
  const [submit, setSubmit] = useState(false);
  const [search, setSearch] = useState({ });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserType(user.type);

    axios.get("https://lmsadmin.onrender.com/fees").then((res) => {
      setFees(res.data);
      setLoading(false);
      
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = (event) => {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value =
      target.type === "number" ? parseInt(target.value) : target.value;
    const name = target.name;

    setSearch({ ...search, [name]: value });
  };

  const searchSubmit = async () => {
    const data = await axios.get(
      `https://lmsadmin.onrender.com/fees/search?name=${search.name}&id=${search.id}`
    );
    const neData = data.data.feeSearch.concat(
      data.data.studentSearch.length ? data.data.studentSearch[0].node.fees : []
    );
    setFees(neData);
    setSubmit(false);
    setSearch({name:'', id:''})
  };

  return (
    <div className="w-screen md:w-full">
      <div className="p-4 text-2xl font-semibold">
        <h3>Fee Details</h3>
      </div>
      {loading && <Loader />}
      <div className="flex flex-col md:flex-row gap-4 justify-between p-4">
        <div>
          <div>
            <input
              onChange={(e) => {
                handleInput(e);
              }}
              name="id"
              value={search.id}
              type="text"
              className="shadow appearance-none border bg-[#F7F6FB] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Search by ID ..."
            />
          </div>
        </div>
        <div>
          <div>
            <input
              onChange={(e) => {
                handleInput(e);
              }}
              name="name"
              value={search.name}
              type="text"
              className="shadow appearance-none border bg-[#F7F6FB] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Search by student Name ..."
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
                to="/addfee"
                type="btn"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                {" "}
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png"
                  className="w-5 mr-1"
                  alt=""
                />
                Add Fee
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="m-4 bg-[#F7F6FB] rounded-xl p-6 overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Student</th>
              <th className="p-4">Stream</th>
              <th className="p-4">Invoiced</th>
              <th className="p-4">Credited</th>
              <th className="p-4">Balance</th>
              <th className="p-4">Paid Date</th>
              <th className="text-end">Status</th>
            </tr>
          </thead>
          <tbody>
            {fees?.map((fees, index) => {
              const fee = fees && (fees?.node || fees);

              return (
                <tr key={index}>
                  <td className="p-4">{fee.slug}</td>
                  <td className="p-4">
                    <h2 className=" ">
                      <span>{fee.student?.name}</span>
                    </h2>
                  </td>
                  <td className="p-4">{fee.student?.stream?.name}</td>
                  <td className="p-4">
                    {fee.type === "invoice" ? fee.amount : "0.00"}
                  </td>
                  <td className="p-4">
                    {fee.type === "credit" ? fee.amount : "0.00"}
                  </td>
                  <td className="p-4">{fee.student?.balance}</td>
                  <td className="p-4">{fee.payday}</td>
                  <td className="text-end">
                    <span>
                      {parseFloat(fee.student?.balance) > 0
                        ? "Paid"
                        : "Arrears"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeeData;
