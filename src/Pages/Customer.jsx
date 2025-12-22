import React from "react";

export default function Customer() {
  return (
    <>
      <div className="customerpage">
        <div>
          <h6>Home {">"} Customers</h6>
        </div>
        <div className="bg-danger d-flex flex-wrape justify-content-between ">
          <h6>Customer Details</h6>
          <div>
            <button>Export</button>
            <button>Filter</button>
            <button>+ Add Customer</button>
          </div>
        </div>
      </div>
    </>
  );
}
