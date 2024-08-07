import React from "react";
import Button from "../Button/Button";
import Input from "../Inputform/Inputform";
import "./Login.css"

function LoginBody(){
    return <div className="Bmain">
     
             <div className="Lmain">
                 <h1>Login</h1>
                 <h5>Enter your account details</h5>
                 <Input label="Username" />
                 <Input label="Password" />
                 <p>Forgot Password?</p>
                 <Button name="Login"/>
                 <div id="BottomDiv">
                     <p>Don't have an account?</p>
                     <Button style={{color:'#fff'}} name="Sign up"/>
                 </div>
             
             
             </div>
     
    </div>
}
export default LoginBody