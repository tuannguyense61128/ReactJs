import React from "react";
import Header from "../Header";

MainLayout.propTypes = {};

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: "80px" }}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
