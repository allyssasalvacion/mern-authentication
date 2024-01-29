import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* Handle other random routes when there's an active session */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
        {/* Redirect to login for random routes when there's no session */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
