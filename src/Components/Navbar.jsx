import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  return (
    <>
      <nav className="navbar p-3">
        <i className="bi bi-list text-white"></i>

        <i className="bi bi-search text-white"></i>
      </nav>
    </>
  );
}
