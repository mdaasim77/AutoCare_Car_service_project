import React from "react";

export default function Customer() {
  return (
    <>
      <div className="customerpage">
        <div>
          <h6 className="hc">
            Home {">"} <b>Customers</b>
          </h6>
        </div>
        <div className=" row">
          <div className=" col-md-6 col-sm-6">
            <h6 className="mt-3">Customer Details</h6>
          </div>
          <div className="d-flex justify-content-end p-2 flex-wrape col-md-6 col-sm-6">
            <button className="me-2" id="exportbtn">
              Export
            </button>
            <button className="me-2 filter">Filter</button>
            <button className="me-2 filter">+ Add Customer</button>
          </div>
        </div>
      </div>
    </>
  );
}
