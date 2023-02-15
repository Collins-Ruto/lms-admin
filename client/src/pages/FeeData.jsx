import React from "react";
import { Link } from "react-router-dom";

function FeeData() {
  return (
    <div>
      <div className="p-4 text-2xl font-semibold">
        <h3 className="">Fee Details</h3>
      </div>
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
      <div className="m-4 bg-[#121212] rounded-xl p-6">
        <table className="w-full">
          <thead className="">
            <tr>
              <th className="p-6">ID</th>
              <th className="p-6">Name</th>
              <th className="p-6">Class</th>
              <th className="p-6">Invoice</th>
              <th className="p-6">Amount Paid</th>
              <th className="p-6">Balance</th>
              <th className="p-6">Paid Date</th>
              <th className="text-end">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-6">PRE2209</td>
              <td className="p-6">
                <h2
                  className="
                "
                >
                  <span>Aaliyah prince</span>
                </h2>
              </td>
              <td className="p-6">4 North</td>
              <td className="p-6">34,000</td>
              <td className="p-6">24,000</td>
              <td className="p-6">10,000</td>
              <td className="p-6">17 Aug 2020</td>
              <td className="text-end">
                <span className="">Arrears</span>
              </td>
            </tr>
            <tr>
              <td className="p-6">PRE2209</td>
              <td className="p-6">
                <h2
                  className="
                "
                >
                  <span>James furgerson</span>
                </h2>
              </td>
              <td className="p-6">4 east</td>
              <td className="p-6">34,000</td>
              <td className="p-6">40,000</td>
              <td className="p-6"> -4,000</td>
              <td className="p-6">20 Sep 2020</td>
              <td className="text-end">
                <span className="">Paid</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeeData;
