import { useEffect, useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import {
  Students,
  AddStudent,
  AddTeacher,
  FeeData,
  AddFee,
  Dashboard,
  Teachers,
  Login,
  CalenderPage,
  AddLesson,
  AddExam,
  Exam,
} from "./pages";
import Header from "./components/Header";
import { Footer } from "./components";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});

  useEffect(() => {
    
    const saved = JSON?.parse(localStorage?.getItem("saved"));
     const user = saved &&JSON?.parse(localStorage?.getItem("user"));
    user && setUser(user);
  }, []);

  return (
    <div className="App bg-[#FEFEFF] min-h-[110vh]">
      {user ? <Header user={ user} /> : ""}
      {user ? (
        <div className="flex ml-60">
          <div className="grow">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/addstudent" element={<AddStudent />} />
              <Route path="/addteacher" element={<AddTeacher />} />
              <Route path="/fee" element={<FeeData />} />
              <Route path="/addfee" element={<AddFee />} />
              <Route path="/calender" element={<CalenderPage />} />
              <Route path="/addlesson" element={<AddLesson />} />
              <Route path="/exams" element={<Exam />} />
              <Route path="/addExam" element={<AddExam />} />
            </Routes>
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
