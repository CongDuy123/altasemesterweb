import React, { useState } from "react";
import "./style.css";
type LoginProps = {
  handleLogin: (index: number) => void;
};

const Login = (props: LoginProps) => {
  const [useName, setUseName] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleLogin = () => {
    if (useName == "admin" && passWord == "admin") {
      localStorage.setItem("useName", "admin");
      props.handleLogin(2);
    } else {
      alert("Incrrect usename or password");
      //   props.handleLogin(1);
    }
  };
  const [status, setStatus] = useState(false);
  return (
    <div className="contener">
      <div className="LoginTemplate">
        <table>
          <tr>
            <td>Use name:</td>
            <td>
              <input
                type="text"
                onChange={(e) => setUseName(e.currentTarget.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input
                type="password"
                onChange={(e) => setPassWord(e.currentTarget.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={handleLogin}>Login</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Login;
