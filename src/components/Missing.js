import React from "react";
import { NavLink } from "react-router-dom";

const Missing = () => {
  return (
    <div className="missing">
      <h1>Page not found</h1>
      <NavLink to="/">
        <button className="btn">Back to home</button>
      </NavLink>
    </div>
  );
};

export default Missing;
