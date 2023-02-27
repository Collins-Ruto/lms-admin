import React, { useEffect, useState } from "react";
import { Calender, Loader } from "../../components";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  //localhost:8000
  useEffect(() => {
    const user = JSON?.parse(localStorage.getItem("user"));
    axios
      .post("https://lmsadmin.onrender.com/data", { slug: user?.slug })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);
  const termVvalue = "II";

  const datas = [
    {
      title: "Current Term",
      value: termVvalue,
      url: "https://cdn-icons-png.flaticon.com/512/4850/4850682.png",
    },
    {
      title: "Subjects offered",
      value: data.subjects || "...",
      url: "https://cdn-icons-png.flaticon.com/512/3426/3426653.png",
    },
    {
      title: "Students",
      value: data.students || "...",
      url: "https://preschool.dreamguystech.com/template/assets/img/icons/dash-icon-01.svg",
    },
    {
      title: "Teachers",
      value: data.teachers || "...",
      url: "https://cdn-icons-png.flaticon.com/512/194/194936.png",
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
    {
      title: "Lessons",
      path: "/addlesson",
    },
    {
      title: "Exams",
      path: "/addexam",
    },
  ];

  return (
    <div className="p-4 pb-6 sm:p-6 ">
      <div className=" text-2xl font-semibold">
        <h3 className="">Admin Dashboard</h3>
      </div>
      {loading && <Loader />}
      <div className="flex justify-between py-6 gap-4  flex-wrap ">
        {datas.map((data) => (
          <div
            className="flex grow min-w-[16rem] sm:max-w-[20rem] py-4 px-6 min-w- justify-between rounded-lg bg-[#F7F6FB]"
            key={data.title}
          >
            <div className="flex flex-col rounded-lg">
              <span className="text-gray-500 font-light ">{data?.title}</span>
              <span className="md:mx-auto text-2xl font-semibold">
                {data?.value}
              </span>
            </div>
            <img src={data?.url} alt={data?.title} className="w-16 rounded-full bg-slate-700 p-0" />
          </div>
        ))}
      </div>
      <div className="lg:grid lg:grid-cols-3 ">
        <div className="bg-[#F7F6FB] p-4 mb-4 lg:m-0">
          <span className="text-xl">Manage Data</span>
          {editInfo.map((data) => (
            <div className="flex justify-between mt-4 p-1" key={data.title}>
              <span className="text-lg">{data.title}</span>
              <Link
                to={data.path}
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
          ))}
        </div>
        <div className=" lg:col-start-2 lg:col-span-2">
          <Calender full={false} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
