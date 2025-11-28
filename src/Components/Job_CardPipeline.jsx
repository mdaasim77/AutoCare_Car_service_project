import React from "react";

export default function Job_CardPipeline() {
  return (
    <>
      <div className="row">
        {/* job pipeline box 1 code start*/}
        <div className=" col-lg-6 col-sm-12">
          <div>
            {/* Job pipeline div code start*/}
            <div className="row mx-3">
              <h4 className="col-md-6 col-sm-12" style={{ color: "#4E5586" }}>
                Job Card Pipeline
              </h4>
              <div className="col-md-6 col-sm-12 row ms-2">
                <div class="dropdown col-md-6 col-sm-12">
                  <button
                    class="dropdwnbtn dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Today
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown col-md-6 col-sm-12">
                  <button
                    class="dropdwnbtn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Technicians
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Job pipeline div code end*/}

            <div className="border purpleclr rounded-4 ms-4">
              {/*card code start */}
              <div className="card m-4">
                <div className="d-flex justify-content-center">
                  <p className="pipelinecardptag border m-3">Intake</p>
                  <hr />
                  <p className="pipelinecardptag border m-3">Estimate</p>
                  <hr />
                  <p className="pipelinecardptag border m-3">
                    Waiting Approval
                  </p>
                  <hr />
                  <p className="pipelinecardptag border m-3">Billing</p>
                  <hr />
                  <p className="pipelinecardptag border m-3">Delivered</p>
                </div>
                <div className="d-flex ms-4">
                  <img src="\assets\profile.svg" alt="" />
                  <div className="mx-5 mt-3">
                    <h2>Mohd Aasim</h2>
                    <p className="cardtxt cardtxt1">Today, 10:30 AM</p>
                    <p className="cardtxt mb-2">Job Card Number: JB000L</p>
                  </div>
                </div>
                <hr className="m-4" />
                <div className="d-flex justify-content-around">
                  <h5>Tata Altroz</h5>
                  <h5>ODO: 23562</h5>
                  <h5>Type: Service</h5>
                </div>
              </div>
              <div className="card m-4">
                <div className="d-flex justify-content-center">
                  <p className="pipelinecardptag border m-3">Intake</p>
                  <hr />
                  <p className="pipelinecardptag border m-3">Estimate</p>
                  <hr />
                  <p className="pipelinecardptag border m-3">
                    Waiting Approval
                  </p>
                  <hr />
                  <p className="pipelinecardptag border m-3">Billing</p>
                  <hr />
                  <p className="pipelinecardptag border m-3">Delivered</p>
                </div>
                <div className="d-flex ms-4">
                  <img src="\assets\profile.svg" alt="" />
                  <div className="mx-5 mt-3">
                    <h2>Mohd Aasim</h2>
                    <p className="cardtxt cardtxt1">Today, 10:30 AM</p>
                    <p className="cardtxt mb-2">Job Card Number: JB000L</p>
                  </div>
                </div>
                <hr className="m-4" />
                <div className="d-flex justify-content-around">
                  <h5>Tata Altroz</h5>
                  <h5>ODO: 23562</h5>
                  <h5>Type: Service</h5>
                </div>
              </div>
              <div className="card m-4">
                <div className="d-flex justify-content-center">
                  <p className="pipelinecardptag border m-3">Intake</p>
                  <hr />
                  <p className="pipelinecardptag border m-3">Estimate</p>
                  <hr />
                  <p className="pipelinecardptag border m-3">
                    Waiting Approval
                  </p>
                  <hr />
                  <p className="pipelinecardptag border m-3">Billing</p>
                  <hr />
                  <p className="pipelinecardptag border m-3">Delivered</p>
                </div>
                <div className="d-flex ms-4">
                  <img src="\assets\profile.svg" alt="" />
                  <div className="mx-5 mt-3">
                    <h2>Mohd Aasim</h2>
                    <p className="cardtxt cardtxt1">Today, 10:30 AM</p>
                    <p className="cardtxt mb-2">Job Card Number: JB000L</p>
                  </div>
                </div>
                <hr className="m-4" />
                <div className="d-flex justify-content-around">
                  <h5>Tata Altroz</h5>
                  <h5>ODO: 23562</h5>
                  <h5>Type: Service</h5>
                </div>
              </div>
              {/*card code start */}
            </div>
          </div>
        </div>
        {/* job pipeline box 1 code end*/}
        <div className="container-fluid col-lg-6 col-sm-12">2</div>
      </div>
    </>
  );
}
