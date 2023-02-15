import { useState } from "react";
import "./styles/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Students, AddStudent, AddTeacher, FeeData, AddFee, Dashboard, Teachers, Login, CalenderPage } from "./pages";
import Header from "./components/Header";

function App() {

  const [user, setUser] = useState({})
  return (
    <div className="App">
      {user ? <Header /> : ""}
      <div className="ml-60">
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Login />} />
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
  );
}

export default App;
