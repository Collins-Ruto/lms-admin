import React from "react";
import { Calender } from "../components";
import { Link } from "react-router-dom";

function Dashboard() {
  const termVvalue = "II";

  const datas = [
    {
      title: "Current Term",
      value: termVvalue,
      url: "https://preschool.dreamguystech.com/template/assets/img/icons/teacher-icon-03.svg",
    },
    {
      title: "Fee Arreas",
      value: "200,000",
      url: "https://preschool.dreamguystech.com/template/assets/img/icons/dash-icon-01.svg",
    },
    {
      title: "Students",
      value: "890",
      url: "https://preschool.dreamguystech.com/template/assets/img/icons/dash-icon-01.svg",
    },
    {
      title: "Teachers",
      value: "42",
      url: "https://preschool.dreamguystech.com/template/assets/img/icons/dash-icon-01.svg",
    },
  ];

  const editInfo = [
    {
      title: "Students",
      path: "/addstudent",
    },
    {
      title: "Teachers",
      path: "/addteacher",
    },
    {
      title: "Fees",
      path: "/addfee",
    },
  ];

  return (
    <div className="p-6">
      <div class=" text-2xl font-semibold text-gray-300">
        <h3 class="">Admin Dashboard</h3>
      </div>
      <div className="flex justify-between py-6">
        {datas.map((data) => (
          <div
            className="flex  py-4 px-6 gap- w-60 justify-between rounded-lg bg-[#121212]"
            key={data.title}
          >
            <div className="flex flex-col rounded-lg">
              <span className="text-gray-500 font-light ">{data?.title}</span>
              <span className="mx-auto text-2xl font-semibold">
                {data?.value}
              </span>
            </div>
            <img src={data?.url} alt={data?.title} className="" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3">
        <div className="bg-[#121212] p-4">
          <span className="text-xl">Manage Data</span>
          {editInfo.map((data) => (
            <div className="flex justify-between mt-4 p-1" key={data.title}>
              <span className="text-lg">{data.title}</span>
              <Link
                to={data.path}
                type="btn"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
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
          ))}
        </div>
        <div className="col-start-2 col-span-2">
          <Calender full={false} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
