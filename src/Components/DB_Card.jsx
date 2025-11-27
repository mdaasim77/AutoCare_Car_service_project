import React from "react";

export default function DB_Card() {
  return (
    <>
      <div className="row g-4 m-3">
        <div className="container col-12 col-md-6 col-xl-3 ">
          <div className=" border card_1 p-3 rounded-4 h-100 ">
            <div className="d-flex justify-content-between ">
              <div className="d-flex flex-column align-items-start mt-2">
                <h5 className="fs-6">Today's Job Card</h5>
                <p className="mt-1 fs-4 mb-0 fw-medium">20</p>
              </div>
              <div className="my-3 mx-5">
                <div className="imageedit1">
                  <img src="\assets\card_1.svg" alt="" />
                </div>
              </div>
            </div>
            <hr className="border border-secondary"></hr>
            <div className="d-flex gap jsutify-content-around">
              <p className=" firstroecard fw-400 bg-white  px-2 mx-auto">
                3 Intake
              </p>
              <p className=" firstroecard fw-400 bg-white  px-2 mx-auto">
                5 In-progress
              </p>
              <p className=" firstroecard fw-400 bg-white  px-2 mx-auto">
                4 Delivered
              </p>
            </div>
          </div>
        </div>
        <div className="container col-12 col-md-6 col-xl-3 ">
          <div className="border card_2 p-3 rounded-4 h-100">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column align-items-start mt-2">
                <h5 className="fs-6">Sales Today </h5>
                <p className="mt-1 fs-4 mb-0 fw-medium">₹ 78500</p>
              </div>
              <div className="my-3 me-3">
                <div className="imageedit2">
                  <img src="\assets\card_2.svg" alt="" />
                </div>
              </div>
            </div>
            <hr className="border border-secondary mt-4"></hr>
            <div className="d-flex gap jsutify-content-around">
              <p className="invoice">Invoice Generated</p>
            </div>
          </div>
        </div>
        <div className="container col-md-6 col-xl-3 col-12">
          <div className=" border card_3 p-3 rounded-4 h-100">
            <div className="d-flex justify-content-between ">
              <div className="d-flex flex-column align-items-start mt-2">
                <h5 className="fs-6">Pending Approvals</h5>
                <p className="mt-1 fs-4 mb-0">06</p>
              </div>
              <div className="my-3 me-2">
                <div className="imageedit3">
                  <img src="\assets\card_3.svg" alt="" />
                </div>
              </div>
            </div>
            <hr className="border border-secondary mt-4"></hr>
            <div className="d-flex  justify-content-around">
              <p className="delivery">Vehicles to deliver today</p>
              <button className="bg-white viewall">View All</button>
            </div>
          </div>
        </div>
        <div className="container col-md-6 col-xl-3 col-12">
          <div className=" border card_4 p-3 rounded-4 h-100  ">
            <div className="d-flex justify-content-between ">
              <div className="d-flex flex-column align-items-start mt-2">
                <h5 className="fs-6">Vehical Deliver Today</h5>
                <p className="mt-1 fs-4 mb-0">04</p>
              </div>
              <div className="my-3 ms-3">
                <div className="imageedit4">
                  <img src="\assets\card_4.svg" alt="" />
                </div>
              </div>
            </div>
            <hr className="border border-secondary mt-4"></hr>
            <div className="d-flex gap jsutify-content-around">
              <p className="delivery">Vehical Deliver Today</p>
              <button className="bg-white viewall">Show List</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
