import React, { useEffect, useState } from "react";
import "./style.css";
type Topic2bProps = {
  handleLogout: (index: number) => void;
};

const Topic2b = (props: Topic2bProps) => {
  const [status, setStatus] = useState(true);

  return (
    <div className="Container">
      <div
        className="item"
        style={{ backgroundColor: status ? "#0000ff" : "#ff0000" }}
      ></div>
      <div className="change">
        <button className="myButton" onClick={() => setStatus(!status)}>
          Change Color
        </button>
        <button
          className="btnLogout"
          onClick={() => {
            localStorage.clear();
            window.location.reload();
            props.handleLogout(1);
          }}
        >
          Log out
        </button>
        <button
          className="btnChange"
          onClick={() => {
            props.handleLogout(3);
          }}
        >
          Change
        </button>
      </div>
      {/* <div className="Logout"></div> */}
      <div
        className="item"
        style={{ backgroundColor: status ? "#ff0000" : "#0000ff" }}
      ></div>
    </div>
  );
};

export default Topic2b;
