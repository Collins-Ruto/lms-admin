import { useEffect, useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import {
  Students,
  FeeData,
  Login,
  CalenderPage,
  AddLesson,
  AddExam,
  Exam,
  Account,
} from "./pages";
import Header from "./components/Header";
import { Footer } from "./components";
import {
  AddAdmin,
  AddFee,
  AddStudent,
  AddSubject,
  AddTeacher,
  Dashboard,
  Teachers,
} from "./pages/admin";
import { Student, StudentExam, StudentFee } from "./pages/student";
import { Teacher } from "./pages/teacher";
import axios from "axios";
import AddStream from "./pages/admin/AddStream";

const testUser = {
  name: "John Doe",
  slug: "johndoe",
  type: "admin",
  email: "johndoe@gmail.com",
  phone: "0711339134"
}

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(testUser);

  useEffect(() => {
    const saved = JSON?.parse(localStorage?.getItem("saved"));
    const user = saved && JSON?.parse(localStorage?.getItem("user"));
    user && setUser(user);
    axios.defaults.headers.common["Authorization"] = `${
      user?.token
    }`;
  }, []);

  console.log(user);

  return (
    <div className="App bg-[#FEFEFF] relative min-h-[110vh] w-screen">
      {user ? <Header user={user} /> : ""}
      {user ? (
        <div className="flex md:ml-60 pb-10">
          <div className="grow">
            {/* Admin Routes */}
            {user.type === "admin" && (
              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/calender" element={<CalenderPage />} />
                <Route path="/fee" element={<FeeData />} />
                <Route path="/exams" element={<Exam />} />
                <Route path="/students" element={<Students />} />
                <Route path="/addlesson" element={<AddLesson />} />
                <Route path="/addExam" element={<AddExam />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/addstudent" element={<AddStudent />} />
                <Route path="/addteacher" element={<AddTeacher />} />
                <Route path="/addadmin" element={<AddAdmin />} />
                <Route path="/addfee" element={<AddFee />} />
                <Route path="/addstream" element={<AddStream />} />
                <Route path="/addsubject" element={<AddSubject />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Dashboard />} />
              </Routes>
            )}
            {/* Teacher Routes */}
            {user.type === "teacher" && (
              <Routes>
                <Route exact path="/" element={<Teacher />} />
                <Route path="/calender" element={<CalenderPage />} />
                <Route path="/fee" element={<FeeData />} />
                <Route path="/exams" element={<Exam />} />
                <Route path="/students" element={<Students />} />
                <Route path="/addlesson" element={<AddLesson />} />
                <Route path="/addExam" element={<AddExam />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Teacher />} />
              </Routes>
            )}
            {/* Student Routes */}
            {user.type === "student" && (
              <Routes>
                <Route exact path="/" element={<Student />} />
                <Route path="/calender" element={<CalenderPage />} />
                <Route path="/fee" element={<StudentFee />} />
                <Route path="/exams" element={<StudentExam />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Student />} />
              </Routes>
            )}
          </div>
        </div>
      ) : (
        <Login setLogin={setUser} />
      )}
      <div className="absolute left-[33%] md:left-[50%] bottom-10 z-10">
        {user ? <Footer /> : ""}
      </div>
    </div>
  );
}

export default App;
