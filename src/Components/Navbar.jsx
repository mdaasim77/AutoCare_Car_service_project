import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar-fixed">
        <nav className="navbar d-flex ">
          <div className="nav-box1 d-flex text-white  col-lg-8 col-xs-10  justify-content-evenly">
            <img src="\assets\Menu-btn.svg" alt="" className="p-2 nav-menu" />
            <div className="search-div p-1  border border-white rounded-2 d-flex align-items-center ">
              <input
                type="search"
                name="search"
                placeholder="Search..."
                id="search"
                className=" search-input border-0 border-end"
              />
              <img
                src="\assets\search-icon.svg"
                alt="search-icon"
                className="nav-search "
              />
            </div>

            <div className="d-flex">
              <label>Branch Name</label>
              <div className="dropdown">
                <button
                  className="dropdown-toggle  dropdownbtn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Branch
                </button>
                <ul className="dropdown-menu" id="list">
                  <li>
                    <a className="dropdown-item">Noida</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Delhi</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Ghaziabad</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className=" nav-box2 d-flex justify-content-end  align-items-center col-lg-4 col-xs-2 justify-content-sm-center justify-content-lg-end
"
          >
            <img src="\assets\Notification.svg" className="me-4" alt="" />
            <img src="\assets\nav-profile.svg" className="me-2" alt="" />
            <div className="profile_card d-flex me-2 text-white">
              <div className="align-item-center">
                <h4 className="mb-0 mt-2">Aasim</h4>
                <p className="mt-0 email">khanaasim9910@gmail.com</p>
              </div>
              <img src="\assets\iconamoon_arrow.svg" className="me-2" alt="" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
