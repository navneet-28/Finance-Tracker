import { styled } from "styled-components";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { useGlobalContext } from "./context/globalContext";
import Login from "./Components/Login/Login";
import DashboardLayout from "./styles/DashboardLayout";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Components/Register/Register";

function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();

  console.log(global);

  return (
    <Router>
    <Routes>
    <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
       <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={
        <DashboardLayout active={active} setActive={setActive} />
      } />
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
    </Router>
  );
}

export default App;
