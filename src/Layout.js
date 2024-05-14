// Layout.js
import React, { useState } from "react";

const Layout = ({ children }) => {
  return (
    <div className="">
        <div>
          {children}
        </div>
    </div>
  );
};

export default Layout;
