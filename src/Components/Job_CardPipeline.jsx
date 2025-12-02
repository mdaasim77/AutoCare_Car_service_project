import React from "react";

export default function Job_CardPipeline() {
  return (
    <>
      <div className="row ">
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
                <div className="d-flex mt-3">
                  <div className="pipelinecardptag border m-0">
                    <h6>Intake</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Estimate</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Waiting Approval</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Billing</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Delivered</h6>
                  </div>
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
                <div className="d-flex mt-3">
                  <div className="pipelinecardptag border m-0">
                    <h6>Intake</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Estimate</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Waiting Approval</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Billing</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Delivered</h6>
                  </div>
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
                <div className="d-flex mt-3">
                  <div className="pipelinecardptag border m-0">
                    <h6>Intake</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Estimate</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Waiting Approval</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Billing</h6>
                  </div>

                  <div
                    className="horizontalline border rounded-3 border-dark h-25
                      mt-3 "
                  ></div>

                  <div className="pipelinecardptag border m-0">
                    <h6>Delivered</h6>
                  </div>
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

        {/* =============================================== */}
        {/* box 2 code start here */}
        {/* =============================================== */}

        <div className="container-fluid col-lg-6 col-sm-12">
          <div>
            <div className="d-flex justify-content-between ">
              <h2 className="todayjob">Today's Job</h2>
              <button className="viewallbtn me-4">View All</button>
            </div>
            <div className="row ">
              <div className="col-xl-6 col-sm-12">
                <div
                  id="box1cng"
                  className="m-1 border rounded-1 me-xl-1 me-sm-4"
                >
                  <div className="w-50 mx-5 mt-3">
                    <h2 className="inp">In-Progress</h2>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src="assets/profile.svg" className="mx-2" alt="" />
                    <div>
                      <h4>Aasim Gaur</h4>
                      <p className="box2p">Today's, 11:00 AM</p>
                      <p className="box2p">Vehical No. UP 12DC 4388</p>
                    </div>
                  </div>
                  <div className="container p-2 text-center">
                    <button className="viewbtn px-3">View</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12  ">
                <div id="box2cng" className="m-1 border rounded-1 me-4">
                  <div className="w-50 mx-5 mt-3">
                    <h2 className="inp">In</h2>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src="assets/profile.svg" className="mx-2" alt="" />
                    <div>
                      <h4>Aasim Gaur</h4>
                      <p className="box2p">Today's, 11:00 AM</p>
                      <p className="box2p">Vehical No. UP 12DC 4388</p>
                    </div>
                  </div>

                  <div className="container p-2 text-center">
                    <button className="viewbtn px-3">View</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-sm-12 ">
                <div
                  id="box3cng"
                  className="m-1 border rounded-1 me-xl-1 me-sm-4 "
                >
                  <div className="w-50 mx-5 mt-3">
                    <h2 className="inp">In-Progress</h2>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src="assets/profile.svg" className="mx-2" alt="" />
                    <div>
                      <h4>Aasim Gaur</h4>
                      <p className="box2p">Today's, 11:00 AM</p>
                      <p className="box2p">Vehical No. UP 12DC 4388</p>
                    </div>
                  </div>
                  <div className="container p-2 text-center">
                    <button className="viewbtn px-3">View</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12  ">
                <div id="box4cng" className="m-1 border rounded-1 me-4">
                  <div className="w-50 mx-5 mt-3">
                    <h2 className="inp">In-Progress</h2>
                  </div>
                  <div className="d-flex justify-content-center">
                    <img src="assets/profile.svg" className="mx-2" alt="" />
                    <div>
                      <h4>Aasim Gaur</h4>
                      <p className="box2p">Today's, 11:00 AM</p>
                      <p className="box2p">Vehical No. UP 12DC 4388</p>
                    </div>
                  </div>
                  <div className="container p-2 text-center">
                    <button className="viewbtn px-3">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
