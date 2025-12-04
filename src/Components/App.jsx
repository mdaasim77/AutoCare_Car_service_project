import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DB_Card from "./DB_Card";
import Job_CardPipeline from "./Job_CardPipeline";
import UpComingSrv from "./UpComingSrv";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <div className="row g-0">
        <div className="col-2 sidebar-fixed">
          <Sidebar />
        </div>
        <div className="col-10 main-area">
          <Navbar />
          <DB_Card />
          <Job_CardPipeline />
          <UpComingSrv />
        </div>
      </div>
    </>
  );
}
