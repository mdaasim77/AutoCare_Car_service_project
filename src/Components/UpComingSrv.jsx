import React from "react";

export default function UpComingSrv() {
  return (
    <>
      <div className="row  container">
        {/* ================================================================================= */}
        {/* box 1 code start here */}
        {/* ================================================================================= */}

        <div className="col-lg-6 col-sm-12">
          {/* ================================================================================= */}
          {/* upcoming service code start here */}

          <div className="row mt-3 ms-1">
            <div className="col-lg-6 col-sm-12 h5usr">
              <h5>Upcoming Service Reminders</h5>
            </div>

            <div className="col-lg-6 col-sm-12">
              <button style={{ float: "right" }} className="floatbtn">
                View All
              </button>
            </div>
          </div>
          {/* upcoming service code end here */}
          {/* ================================================================================= */}

          <div className="d-flex flex-column">
            {/* ================================================================================= */}
            {/* upcoming service card code start here */}

            <div className="row  usrbox1 border border-secondary rounded-2 p-2 mt-3 ms-3">
              <div className="col-lg-6 col-sm-12">
                <div className="row mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea">Time:</h6>
                  <h6 className="col-lg-6 col-sm-12 inputarea">12:56 PM</h6>
                </div>
                <div className="row mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea">Customer Name</h6>
                  <h6 className="col-lg-6 col-sm-12 inputarea">Aasim Gaur</h6>
                </div>
                <div className="row mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea">Status</h6>
                  <div className="col-lg-6 col-sm-12 rounded-4 border w-auto nosend ms-2">
                    Not Send
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row  mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea ">
                    Vehical Number
                  </h6>
                  <h6 className="col-lg-6 col-sm-12 inputarea ">
                    UP 14DC 4388
                  </h6>
                </div>
                <div className="row mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea">
                    Service Date / KM
                  </h6>
                  <h6 className="col-lg-6 col-sm-12 inputarea">
                    01/Dec/2025 / 43200
                  </h6>
                </div>
                <div className="mt-1 mb-3">
                  <button className="sendwhat rounded-2 text-light ">
                    <img src="assets/whatsapp.svg" className="me-2" alt="" />
                    Send WhatsApp Now
                  </button>
                </div>
              </div>
            </div>

            {/* ================================= */}

            {/* upcoming service card code end here */}
            {/* ================================================================================= */}

            {/* ================================================================================= */}
            {/* upcoming service card2 code start here */}

            <div className="row  usrbox1 border border-secondary rounded-2 p-2 mt-3 ms-3">
              <div className="col-lg-6 col-sm-12">
                <div className="row mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea">Time:</h6>
                  <h6 className="col-lg-6 col-sm-12 inputarea">12:56 PM</h6>
                </div>
                <div className="row mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea">Customer Name</h6>
                  <h6 className="col-lg-6 col-sm-12 inputarea">Aasim Gaur</h6>
                </div>
                <div className="row mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea">Status</h6>
                  <div className="col-lg-6 col-sm-12 rounded-4 border w-auto nosend ms-2">
                    Not Send
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row  mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea ">
                    Vehical Number
                  </h6>
                  <h6 className="col-lg-6 col-sm-12 inputarea ">
                    UP 14DC 4388
                  </h6>
                </div>
                <div className="row mt-2">
                  <h6 className="col-lg-6 col-sm-12 grayarea">
                    Service Date / KM
                  </h6>
                  <h6 className="col-lg-6 col-sm-12 inputarea">
                    01/Dec/2025 / 43200
                  </h6>
                </div>
                <div className="mt-1 mb-3">
                  <button className="sendwhat rounded-2 text-light ">
                    <img src="assets/whatsapp.svg" className="me-2" alt="" />
                    Send WhatsApp Now
                  </button>
                </div>
              </div>
            </div>

            {/* upcoming service card2 code end here */}
            {/* ================================================================================= */}
          </div>
        </div>

        {/* ================================================================================= */}
        {/* box 2 code end here */}
        {/* ================================================================================= */}

        {/* ================================================================================= */}
        {/* box 2 code start here */}
        {/* ================================================================================= */}

        <div className="col-lg-6 col-sm-12"></div>

        {/* ================================================================================= */}
        {/* box 2 code end here */}
        {/* ================================================================================= */}
      </div>
    </>
  );
}
