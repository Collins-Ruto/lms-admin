import { useState } from "react";
import "./styles/App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Students, AddStudent, AddTeacher, FeeData, AddFee, Dashboard, Teachers, Login } from "./pages";

function App() {

  const [user, setUser] = useState({})
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={user ? <Login /> :<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/addteacher" element={<AddTeacher />} />
          <Route path="/fee" element={<FeeData />} />
          <Route path="/addfee" element={<AddFee />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
