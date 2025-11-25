import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  return (
    <>
      <nav className="navbar container">
        <div className="nav-box1 d-flex text-white">
          <img src="\assets\Menu-btn.svg" alt="" className="p-2 nav-menu" />
          <div className="search-div">
            <input
              type="search"
              name="search"
              placeholder="Search..."
              id="search"
              className="search-input"
            />
            <img
              src="\assets\search-icon.svg"
              alt="search-icon"
              className="nav-search"
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

        <div className="nav-box2 d-flex bg-danger">
          <img src="\assets\Notification.svg" alt="" />
          <img src="\assets\nav-profile.svg" alt="" />
          <div className="profile_card d-flex">
            <div>
              <h4>Aasim</h4>
              <h6>khanaasim9910@gmail.com</h6>
            </div>
            <img src="\assets\iconamoon_arrow.svg" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}
