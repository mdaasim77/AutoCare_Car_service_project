import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="border imageicon ">
          <img src="assets\logo.svg" alt="" />
        </div>
        <div className="sidebarlower p-2">
          {/* ============================================== */}
          {/* code start */}
          {/* ============================================== */}
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <div className="orange  container my-3 g-0 row">
              <div className=" col-lg-3 col-sm-2 ">
                <img
                  src="assets\dashboard.svg"
                  className="orgimg mt-3 ms-2 "
                  alt=""
                />
              </div>
              <div className="col-lg-9 col-sm-10 mt-1">
                <h6 className="txtor mb-2 p-2 my-0">Dashboard</h6>
              </div>
            </div>
          </Link>
          {/* ============================================== */}
          {/* code complete */}
          {/* ============================================== */}
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <div className="orange  container my-3 g-0 row">
              <div className=" col-lg-3 col-sm-2 ">
                <img
                  src="assets\customer.svg"
                  className="orgimg mt-3 ms-2 "
                  alt=""
                />
              </div>
              <div className="col-lg-9 col-sm-10 mt-1">
                <h6 className="txtor mb-2 p-2 my-0">Customers</h6>
              </div>
            </div>
          </Link>
          {/* ============================================== */}
          {/* code complete */}
          {/* ============================================== */}
          <div className="orange  container my-3 g-0 row">
            <div className=" col-lg-3 col-sm-2 ">
              <img
                src="assets\jobcard.svg"
                className="orgimg mt-3 ms-2 "
                alt=""
              />
            </div>
            <div className="col-lg-9 col-sm-10 mt-1">
              <h6 className="txtor mb-2 p-2 my-0">Job cards</h6>
            </div>
          </div>
          {/* ============================================== */}
          {/* code complete */}
          {/* ============================================== */}
          <div className="orange  container my-3 g-0 row">
            <div className=" col-lg-3 col-sm-2 ">
              <img
                src="assets\card_2.svg"
                className="orgimg mt-3 ms-2 "
                alt=""
              />
            </div>
            <div className="col-lg-9 col-sm-10 mt-1">
              <h6 className="txtor mb-2 p-2 my-0">Invoices</h6>
            </div>
          </div>
          {/* ============================================== */}
          {/* code complete */}
          {/* ============================================== */}
          <div className="orange  container my-3 g-0 row">
            <div className=" col-lg-3 col-sm-2 ">
              <img
                src="assets\catalog.svg"
                className="orgimg mt-3 ms-2 "
                alt=""
              />
            </div>
            <div className="col-lg-9 col-sm-10 mt-1">
              <h6 className="txtor mb-2 p-2 my-0">Catalog</h6>
            </div>
          </div>
          {/* ============================================== */}
          {/* code complete */}
          {/* ============================================== */}
          <div className="orange  container my-3 g-0 row">
            <div className=" col-lg-3 col-sm-2 ">
              <img
                src="assets\reminder.svg"
                className="orgimg mt-3 ms-2 "
                alt=""
              />
            </div>
            <div className="col-lg-9 col-sm-10 mt-1">
              <h6 className="txtor mb-2 p-2 my-0">Reminders</h6>
            </div>
          </div>
          {/* ============================================== */}
          {/* code complete */}
          {/* ============================================== */}
          <div className="orange  container my-3 g-0 row">
            <div className=" col-lg-3 col-sm-2 ">
              <img
                src="assets\report.svg"
                className="orgimg mt-3 ms-2 "
                alt=""
              />
            </div>
            <div className="col-lg-9 col-sm-10 mt-1">
              <h6 className="txtor mb-2 p-2 my-0">Reports</h6>
            </div>
          </div>
          {/* ============================================== */}
          {/* code complete */}
          {/* ============================================== */}
          <div className="orange  container my-3 g-0 row">
            <div className=" col-lg-3 col-sm-2 ">
              <img
                src="assets\setting.svg"
                className="orgimg mt-3 ms-2 "
                alt=""
              />
            </div>
            <div className="col-lg-9 col-sm-10 mt-1">
              <h6 className="txtor mb-2 p-2 my-0">Settings</h6>
            </div>
          </div>
          {/* ============================================== */}
          {/* code complete */}
          {/* ============================================== */}
        </div>
      </div>
    </>
  );
}
