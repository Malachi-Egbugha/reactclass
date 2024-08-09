import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import InputContent from "../Components/InputContent/InputContent";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "../Components/Button/Button.jsx";
import { config } from "../Services.jsx";
import { signin } from "../Apicalls.jsx";
import { Navigate } from "react-router-dom";

export default function LoginSignup() {
  const [action, setAction] = useState("signup");
  const [value, setValue] = useState({
    username: "",
    password: "",
    error: "",
  });
  const { username, password, error } = value;

  const handlechange = (name, namevalue) => {
    setValue((previous) => {
      return { ...previous, error: "", [name]: namevalue };
    });

    //setValue(((previi)));
    console.log(value);
  };

  let changeAction = async (actionname) => {
    try {
      console.log(action);
      setAction(actionname);
      if (action == "login") {
        var loginresponse = await signin(username, password);
        if (loginresponse.error) {
          setValue((previous) => {
            return { ...previous, error: loginresponse.message };
          });
        } else {
        
          localStorage.setItem("userid", loginresponse.user_id);
          console.log("got here");
          window.location.replace(config.routeconfig.dashboard);
        
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  let signup = () => {
    return (
      <>
        <InputContent
          type="text"
          placeholder="Enter your Username"
          icon={<CiUser className="icon" />}
        />
        <InputContent
          type="email"
          placeholder="Enter Email Address"
          icon={<MdEmail className="icon" />}
        />
        <InputContent
          type="text"
          placeholder="Enter your Full Name"
          icon={<MdOutlineDriveFileRenameOutline className="icon" />}
        />
        <InputContent
          type="password"
          placeholder="Enter your Password"
          icon={<RiLockPasswordFill className="icon" />}
        />
      </>
    );
  };
  let login = () => {
    return (
      <>
        <InputContent
          changetext={(event) => {
            handlechange("username", event.target.value);
          }}
          value={username}
          type="text"
          placeholder="Enter your Username"
          icon={<CiUser className="icon" />}
        />
        <InputContent
          changetext={(event) => {
            handlechange("password", event.target.value);
          }}
          value={password}
          type="password"
          placeholder="Enter your Password"
          icon={<RiLockPasswordFill className="icon" />}
        />
      </>
    );
  };
  return (
    <div className="logincontainer">
      <div className="overlay">
        <div className="logininputcontainer">
          <div className="signup">
            <h1>{action == "signup" ? "Signup" : "Login"}</h1>
            <div className="line"></div>
          </div>

          {action == "signup" ? signup() : login()}
          <div className="buttoncontainer">
            <Button
              changeAction={() => changeAction("signup")}
              buttonlabel="Signup"
            />
            <Button
              changeAction={() => changeAction("login")}
              buttonlabel="Login"
            />
          </div>
          <div style={{ color: "#ff0000" }} className="error">
            {error}
          </div>
        </div>
      </div>
    </div>
  );
}
