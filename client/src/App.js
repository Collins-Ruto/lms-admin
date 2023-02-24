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
import { AddFee, AddStudent, AddTeacher, Dashboard, Teachers } from "./pages/admin";
import { Student } from "./pages/student";
import { Teacher } from "./pages/teacher";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState();

  useEffect(() => {
    
    const saved = JSON?.parse(localStorage?.getItem("saved"));
     const user = saved &&JSON?.parse(localStorage?.getItem("user"));
    user && setUser(user);
  }, []);

  console.log(user)

  return (
    <div className="App bg-[#FEFEFF] min-h-[110vh]">
      {user ? <Header user={user} /> : ""}
      {user ? (
        <div className="flex ml-60">
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
                <Route path="/addfee" element={<AddFee />} />
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
                <Route path="/fee" element={<FeeData />} />
                <Route path="/exams" element={<Exam />} />
                <Route path="*" element={<Student />} />
              </Routes>
            )}
          </div>
        </div>
      ) : (
        <Login setLogin={setUser} />
      )}
      <div className="sticky top-[100vh z-10">{user ? <Footer /> : ""}</div>
    </div>
  );
}

export default App;
