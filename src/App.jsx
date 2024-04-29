import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
