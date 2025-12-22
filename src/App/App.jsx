import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

export default function App() {
  const [responsiveSideBar, setResponsiveSideBar] = useState(false);
  return (
    <>
      <Navigation />
    </>
  );
}
