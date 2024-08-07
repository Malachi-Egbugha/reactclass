import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";

function Layoutone({children}) {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <div className="main">
       {children}
        </div>
    </div>
  );
}

export default Layoutone;
