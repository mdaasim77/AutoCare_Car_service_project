// import React from "react";
// import Sidebar from "../Components/Navbar/Sidebar/Sidebar";
// import Navbar from "../Components/Navbar";

// export default function DashBoardLayout() {
//   return (
//     <>
//       <div className="d-flex g-0 ">
//         <div className={responsiveSideBar ? "sidebarzero" : "sidebar-fixed"}>
//           <Sidebar />
//         </div>
//         <div className={responsiveSideBar ? "main_full" : "main-area"}>
//           <Navbar
//             toggle={() => setResponsiveSideBar(!responsiveSideBar)}
//             navbarClass={responsiveSideBar ? "navbar-full" : "navbar-normal"}
//           />
//           <Routes>
//             <Route
//               path="/dashboard"
//               element={
//                 <>
//                   <DB_Card />
//                   <Job_CardPipeline />
//                   <UpComingSrv />
//                 </>
//               }
//             />
//             <Route path="/customer" element={<Customer />} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// }

import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { useState } from "react";

export default function DashboardLayout() {
  const [responsiveSideBar, setResponsiveSideBar] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={responsiveSideBar ? "sidebarzero" : "sidebar-fixed"}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className={responsiveSideBar ? "main_full" : "main-area"}>
        <Navbar
          toggle={() => setResponsiveSideBar(!responsiveSideBar)}
          navbarClass={responsiveSideBar ? "navbar-full" : "navbar-normal"}
        />

        {/* Pages will render here */}
        <div style={{ marginTop: "30px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
