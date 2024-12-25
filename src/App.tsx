// import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// import Topic1 from "./components/Topic1";
// import Topic2b from "./components/Topic2b";
// import Login from "./components/Login";
import MyComponents from "./MyComponents";

function App() {
  // const [index, setIndex] = useState(1);
  // const receiveLoginIndex = (index: number) => {
  //   setIndex(index);
  // };

  // const receiveLogoutIndex = (index: number) => {
  //   setIndex(index);
  // };
  return (
    <div>
      {/* {localStorage.getItem("useName") == null ? (
        index == 1 ? (
          <Login handleLogin={receiveLoginIndex} />
        ) : index == 2 ? (
          <Topic2b handleLogout={receiveLogoutIndex} />
        ) : (
          <Topic1 />
        )
      ) : index == 1 ? (
        <Login handleLogin={receiveLoginIndex} />
      ) : index == 2 ? (
        <Topic2b handleLogout={receiveLogoutIndex} />
      ) : (
        <Topic1 />
      )} */}
      <MyComponents />
    </div>
  );
}

export default App;
