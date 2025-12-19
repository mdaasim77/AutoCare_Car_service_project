import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DB_Card from "../Pages/DB_Card";
import Job_CardPipeline from "../Pages/Job_CardPipeline";
import UpComingSrv from "../Pages/UpComingSrv";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Customer from "../Pages/Customer";

export default function App() {
  const [responsiveSideBar, setResponsiveSideBar] = useState(false);
  return (
    <>
      <div className="d-flex g-0 ">
        <div className={responsiveSideBar ? "sidebarzero" : "sidebar-fixed"}>
          <Sidebar />
        </div>
        <div className={responsiveSideBar ? "main_full" : "main-area"}>
          <Navbar
            toggle={() => setResponsiveSideBar(!responsiveSideBar)}
            navbarClass={responsiveSideBar ? "navbar-full" : "navbar-normal"}
          />
          <Routes>
            <Route
              path="/dashboard"
              element={
                <>
                  <DB_Card />
                  <Job_CardPipeline />
                  <UpComingSrv />
                </>
              }
            />
            <Route path="/customer" element={<Customer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
