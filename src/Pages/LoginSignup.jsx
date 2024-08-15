import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import InputContent from "../Components/InputContent/InputContent";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "../Components/Button/Button.jsx";
import { config } from "../Services.jsx";
import { signin, signups } from "../Apicalls.jsx";
import { Navigate } from "react-router-dom";
import ReactModal from "react-modal";

export default function LoginSignup() {
  const [action, setAction] = useState("signup");
  const [value, setValue] = useState({
    email: "",
    password: "",
    
token: "",
full_name: "",
username: "",

    error: "",
  });
  const [controlmodal, setControlmodal] = useState(false)
  const { email, password, error,token, full_name,username } = value;
  const customStyles = {
    content: {
    top: '5%',
    left: '20%',
    right: '20%',
    bottom: 'auto',
    boxShadow: '0 0 10px 0 rgba(0,0,97,0.5)',
    overflow: 'auto',
    borderRadius:'4px',
    outline: 'none',
    },
    innerHeight:"50%",

    overlay: {
      backgroundColor: "rgba(0,0,0,0.75)",
     
    }
  };

  const handlechange = (name, namevalue) => {
    setValue((previous) => {
      return { ...previous, error: "", [name]: namevalue };
    });

    //setValue(((previi)));
    console.log(value);
  };

  let changeAction = async (actionname) => {
    try {
     
      setValue({
        email: "",
        password: "",
        error: "",
      })
      setAction(actionname);
      if (action == "login") {
        var loginresponse = await signin(email, password);
        if (loginresponse.error) {
          setValue((previous) => {
            return { ...previous, error: loginresponse.message };
          });
        } else {
        
          localStorage.setItem("userid", loginresponse.user_id);
          window.location.replace(config.routeconfig.dashboard);
        
        }
       
      }
      else if(actionname == "signup"){
        //call the signup endpoint
        var siguploginresponse = await signups(email);
        //check if signup was successful
        if ( siguploginresponse.error) {
          setValue((previous) => {
            return { ...previous, error: loginresponse.message };
          });
        } else {
        
          
          setControlmodal(true);
        }

      }
    } catch (error) {
      console.log(error);
      setValue({
        email: "",
        password: "",
        error: "",
      })
    }
  };

  let signup = () => {
    return (
      <>
      
        <InputContent
          changetext={(event) => {
            handlechange("email", event.target.value);
          }}
          value={email}
          type="email"
          placeholder="Enter Email Address"
          icon={<MdEmail className="icon" />}
        />
        {

          /*
            <InputContent
          type="text"
          placeholder="Enter your Username"
          icon={<CiUser className="icon" />}
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
        */
  }
      </>
    );
  };
  let login = () => {
    return (
      <>
        <InputContent
          changetext={(event) => {
            handlechange("email", event.target.value);
          }}
          value={email}
          type="text"
          placeholder="Enter your Email"
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
        <ReactModal 
        isOpen={controlmodal}
        style={customStyles}
        >
          <h1>When you pay, I will remove the modal</h1>
          <InputContent
          changetext={(event) => {
            handlechange("email", event.target.value);
          }}
          value={email}
          type="text"
          placeholder="Enter your Email"
          icon={<RiLockPasswordFill className="icon" />}
        />
         <InputContent
          changetext={(event) => {
            handlechange("token", event.target.value);
          }}
          value={token}
          type="text"
          placeholder="Enter your Token here"
          icon={<RiLockPasswordFill className="icon" />}
        />
          <InputContent
          changetext={(event) => {
            handlechange("full_name", event.target.value);
          }}
          value={full_name}
          type="text"
          placeholder="Enter your Fullname here"
          icon={<RiLockPasswordFill className="icon" />}
        />
        <InputContent
          changetext={(event) => {
            handlechange("username", event.target.value);
          }}
          value={username}
          type="text"
          placeholder="Enter your Username here"
          icon={<RiLockPasswordFill className="icon" />}
        />
         <InputContent
          changetext={(event) => {
            handlechange("password", event.target.value);
          }}
          value={password}
          type="password"
          placeholder="Enter your Password here"
          icon={<RiLockPasswordFill className="icon" />}
        />
          {
            /*
            {
"email": "malachi.egbugha@gmail.com",
"token": "968300",
"full_name": "malachi",
"username": "halimah",
"password": "richard",

}
            */
          }

        </ReactModal>
      </div>
      
      
    </div>
  );
}
