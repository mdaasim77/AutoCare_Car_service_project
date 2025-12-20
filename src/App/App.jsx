import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes, Navigate } from "react-router-dom";
import DashBoard from "../Pages/DashBoard";
import Customer from "../Pages/Customer";
import DashboardLayout from "../Layouts/DashBoardLayout";

export default function App() {
  const [responsiveSideBar, setResponsiveSideBar] = useState(false);
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/customer" element={<Customer />} />
      </Route>
    </Routes>
  );
}
