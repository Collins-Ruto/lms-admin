import React, {useState} from 'react'
import user from '../res/user3.png'
import home from '../res/home.png'
import finance from '../res/finance.png'
import calender from '../res/calender.png'
import exam from '../res/exam.png'

function Header() {

  const [opened, setOpened] = useState(true);

  return (
    <div className="mx-auto sticky top-0 z-40 bg-blend-darken bg-white">
      <div className="p-4">
        <nav className="flex items-center justify-between">
          <div
            className="space-y-2"
            onClick={() => {
              setOpened(!opened);
            }}
          >
            <div className="w-8 h-1 bg-blue-600"></div>
            <div className="w-8 h-1 bg-blue-600"></div>
            <div className="w-8 h-1 bg-blue-600"></div>
          </div>
          <div>
            <img src={user} alt="" className="text-xl w-10" />
          </div>
        </nav>
      </div>
      <div>
        {opened && (
          <div className="">
            {/* <div
              className="absolute right-0 w-[100%] lg:w-screen md:w-80 p-4 h-screen opacity-40 bg-blend-darken bg-black"
              onClick={() => {
                setOpened(!opened);
              }}
            ></div> */}
            <div className="flex flex-col absolute left-0 w-[60%] md:w-60 p-4 h-screen opacity-100 bg-blend-darken bg-white">
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={home} alt="" className="w-7 mr-2" />
                <span className="text-xl">Dashboard</span>
              </div>
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Students</span>
              </div>
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Teachers</span>
              </div>
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Timetables</span>
              </div>
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={exam} alt="" className="w-7 mr-2" />
                <span className="text-xl">Exam Results</span>
              </div>
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={calender} alt="" className="w-7 mr-2" />
                <span className="text-xl">calender</span>
              </div>
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Finance</span>
              </div>
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Assignments</span>
              </div>
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={finance} alt="" className="w-7 mr-2" />
                <span className="text-xl">Finance</span>
              </div>
              <div className="mt-8 align-middle ml-2 flex items-center font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
                <img src={user} alt="" className="w-8 mr-2" />
                <span className="text-xl">Account</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header