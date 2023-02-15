import React from "react";
import { Link } from "react-router-dom";

function FeeData() {
  return (
    <div>
      <div class="p-4 text-2xl font-semibold">
        <h3 class="">Fee Details</h3>
      </div>
      <div class="flex justify-between p-4">
        <div class="">
          <div class="">
            <input
              type="text"
              class="shadow appearance-none border bg-[#121212] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            to="/addfee"
            type="btn"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
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
      <div class="m-4 bg-[#121212] rounded-xl p-6">
        <table class="">
          <thead class="">
            <tr>
              <th className="p-6">ID</th>
              <th className="p-6">Name</th>
              <th className="p-6">Class</th>
              <th className="p-6">Invoice</th>
              <th className="p-6">Amount Paid</th>
              <th className="p-6">Balance</th>
              <th className="p-6">Paid Date</th>
              <th class="text-end">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-6">PRE2209</td>
              <td className="p-6">
                <h2
                  class="
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
              <td class="text-end">
                <span class="">Arrears</span>
              </td>
            </tr>
            <tr>
              <td className="p-6">PRE2209</td>
              <td className="p-6">
                <h2
                  class="
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
              <td class="text-end">
                <span class="">Paid</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeeData;
