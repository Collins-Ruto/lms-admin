import { useState } from "react";
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
} from "./pages";
import Header from "./components/Header";
import { Footer } from "./components";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({});
  return (
    <div className="App bg-[#FEFEFF] min-h-[110vh]">
      {user ? <Header /> : ""}
      <div className="flex ml-60">
        <div className="grow">
          <Routes>
            <Route exact path="/" element={user ? <Dashboard /> : <Login />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/addteacher" element={<AddTeacher />} />
            <Route path="/fee" element={<FeeData />} />
            <Route path="/addfee" element={<AddFee />} />
            <Route path="/calender" element={<CalenderPage />} />
          </Routes>
        </div>
      </div>
      <div className="sticky top-[100vh">{user ? <Footer /> : ""}</div>
    </div>
  );
}

export default App;
