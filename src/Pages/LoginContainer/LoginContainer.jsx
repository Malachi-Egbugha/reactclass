import React from "react";
//import LoginBody from "../Login/LoginBody";
import LoginBody from "../../Components/Login/LoginBody";
//import LoginBanner from "../LoginBanner/LoginBanner";
import LoginBanner from "../../Components/LoginBanner/LoginBanner";
import "./LoginContainer.css";

function LoginContainer() {
  return (
    <div className="mainBody">
      <div className="body1">
        <LoginBody />
      </div>
      <div className="body2">
        <LoginBanner />
      </div>
    </div>
  );
}
export default LoginContainer;
