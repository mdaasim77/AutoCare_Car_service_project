import React from "react";

export default function DB_Card() {
  return (
    <>
      <div className="row">
        <div className="col-3 border border-primary">
          <div className="d-flex">
            <div>
              <h5>Job Card</h5>
              <p>20</p>
            </div>
            <div>
              <img src="\assets\Menu-btn.svg" alt="" />
            </div>
          </div>
          <hr className="border border-danger"></hr>
          <div className="row align-items-center">
            <h6 className="p-2 firstroecard border border-danger rounded-4 text-center col-3">
              3 Intake
            </h6>
            <h6 className="p-2 firstroecard border border-danger rounded-4 text-center col-5">
              5 In-progress
            </h6>
            <h6 className="p-2 firstroecard border border-danger rounded-4 text-center col-4">
              4 Delivered
            </h6>
          </div>
        </div>
        <div className="col-3 border border-primary">
          <div className="d-flex">
            <div>
              <h5>Job Card</h5>
              <p>20</p>
            </div>
            <div>
              <img src="\assets\Menu-btn.svg" alt="" />
            </div>
          </div>
          <hr className="border border-danger"></hr>
        </div>
        <div className="col-3 border border-primary">
          <div className="d-flex">
            <div>
              <h5>Job Card</h5>
              <p>20</p>
            </div>
            <div>
              <img src="\assets\Menu-btn.svg" alt="" />
            </div>
          </div>
          <hr className="border border-danger"></hr>
        </div>
        <div className="col-3 border border-primary">
          <div className="d-flex">
            <div>
              <h5>Job Card</h5>
              <p>20</p>
            </div>
            <div>
              <img src="\assets\Menu-btn.svg" alt="" />
            </div>
          </div>
          <hr className="border border-danger"></hr>
        </div>
      </div>
    </>
  );
}
