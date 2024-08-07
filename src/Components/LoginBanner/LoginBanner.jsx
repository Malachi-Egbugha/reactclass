import React from "react";
import "./LoginBanner.css";
import pic from "../../assets/images/myimg.jpg";
function LoginBanner() {
  return (
    <div className="LBmain">
      <h1>
        <span>Welcome to</span>
        <br />
        student portal{" "}
      </h1>
      <p>Login to access your account</p>
      <img src={pic} />
    </div>
  );
}
export default LoginBanner;
