import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DashBoard from "../Pages/DashBoard";
import Customer from "../Pages/Customer";
import DashboardLayout from "../Layouts/DashBoardLayout";

export default function Navigation() {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/customer" element={<Customer />} />
        </Route>
      </Routes>
    </>
  );
}
