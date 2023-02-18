import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components";

function FeeData() {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://lmsadmin.onrender.com/fees").then((res) => {
      setFees(res.data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("fees", fees)

  return (
    <div>
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Fee Details</h3>
      </div>
      {loading && <Loader />}
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
      </div>
      <div className="m-4 bg-[#F7F6FB] rounded-xl p-6">
        <table className="w-full">
          <thead className="">
            <tr>
              <th className="p-6">ID</th>
              <th className="p-6">Name</th>
              <th className="p-6">Stream</th>
              <th className="p-6">Invoiced</th>
              <th className="p-6">Credited</th>
              <th className="p-6">Balance</th>
              <th className="p-6">Paid Date</th>
              <th className="text-end">Status</th>
            </tr>
          </thead>
          <tbody>
            {fees?.map((fees, index) => {
              const fee = fees.node
              
              return (
              <tr>
                <td className="p-6">{fee.slug}</td>
                <td className="p-6">
                  <h2 className=" ">
                    <span>{fee.name}</span>
                  </h2>
                </td>
                <td className="p-6">{fee.student.stream.name}</td>
                <td className="p-6">
                  {fee.type === "invoice" ?  fee.amount: "0.00"}
                </td>
                <td className="p-6">
                  {fee.type === "credit" ? fee.amount: "0.00"}
                </td>
                <td className="p-6">10,000</td>
                <td className="p-6">{fee.payday}</td>
                <td className="text-end">
                  <span className="">Arrears</span>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeeData;
