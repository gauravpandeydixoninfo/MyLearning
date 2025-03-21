import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
