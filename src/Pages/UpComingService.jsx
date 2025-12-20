import React from "react";

export default function UpComingService() {
  return (
    <>
      <div className="row  container-fluid">
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

        <div className=" col-lg-6 col-sm-12  d-flex flex-column">
          <div>
            <h6 className="qas mt-4 mb-4 fw-medium ms-2">
              Quick Action & Shortcuts
            </h6>
          </div>
          <div className="d-flex flex-wrap border rounded-2 p-2">
            <button className="p-1 m-2 P-1 rounded-2 border-0 px-2" id="btn1">
              + New Card Job
            </button>
            <button className="p-1 m-2 P-1 rounded-2 border-0 px-2" id="btn2">
              + New Customer
            </button>
            <button className="p-1 m-2 P-1 rounded-2 border-0 px-2" id="btn3">
              + New Vehical
            </button>
            <button className="p-1 m-2 P-1 rounded-2 border-0 px-2" id="btn4">
              Send Reminder Now
            </button>
            <button className="p-1 m-2 P-1 rounded-2 border-0 px-2" id="btn5">
              Import Part CSV
            </button>
            <button className="p-1 m-2 P-1 rounded-2 border-0 px-2" id="btn6">
              View Today's Report
            </button>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 mt-3">
              <h6 className="recentac">Recent Activity</h6>
            </div>
            <div className="col-lg-6 col-sm-12 mt-3 ">
              <button className="rightbox2 rounded-2 border">View All</button>
            </div>
          </div>
          <div className="border rounded-2 container-fluid mt-3">
            <div className="row rounded-2 hoverpart py-2">
              <div className="col-lg-6 col-sm-12   ">
                <h6 className="datera rounded-5 text-center">
                  18 Nov 2025, 10:30 AM
                </h6>
              </div>
              <div className="col-lg-6 col-sm-12">
                <h6 className=" inv">Invoice INV created ($78)</h6>
              </div>
            </div>
            <div className="row rounded-2 hoverpart py-2">
              <div className="col-lg-6 col-sm-12   ">
                <h6 className="datera rounded-5 text-center">
                  18 Nov 2025, 10:30 AM
                </h6>
              </div>
              <div className="col-lg-6 col-sm-12">
                <h6 className=" inv">Invoice INV created ($78)</h6>
              </div>
            </div>
            <div className="row rounded-2 hoverpart py-2">
              <div className="col-lg-6 col-sm-12   ">
                <h6 className="datera rounded-5 text-center">
                  18 Nov 2025, 10:30 AM
                </h6>
              </div>
              <div className="col-lg-6 col-sm-12">
                <h6 className=" inv">Invoice INV created ($78)</h6>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================================= */}
        {/* box 2 code end here */}
        {/* ================================================================================= */}
      </div>
    </>
  );
}
