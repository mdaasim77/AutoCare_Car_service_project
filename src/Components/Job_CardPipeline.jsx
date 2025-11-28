import React from "react";

export default function Job_CardPipeline() {
  return (
    <>
      <div className="row">
        <div className=" border col-lg-6 col-sm-12">
          <div>
            <div className="row">
              <h4 className="col-md-6 col-sm-12">Job Card Pipeline</h4>
              <div className="col-md-6 col-sm-12 row">
                <div class="dropdown col-md-6 col-sm-12">
                  <button
                    class="btn btn-secondary dropdown-toggle"
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
                    class="btn btn-secondary dropdown-toggle"
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
            <div className="border border-primary">
              <div className="bg-primary-subtle">
                <div className="card">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid col-lg-6 col-sm-12">2</div>
      </div>
    </>
  );
}
