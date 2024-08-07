import React,{useState} from 'react';
import {CiUser} from 'react-icons/ci'
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import InputContent from '../Components/InputContent/InputContent';
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "../Components/Button/Button.jsx";
import {config} from "../Services.jsx";
import {signin} from "../Apicalls.jsx"
export default function LoginSignup() {
  const [action, setAction] = useState("signup");
let changeAction= async (actionname) =>{
  try{
            console.log(action);
            setAction(actionname); 
            if(action == "login"){
            var loginresponse = await signin("habeebmuftau05@gmail.com","Iamhabeeb1234");
            }
          
  } catch(error){
    console.log(error)
  }

  }

  let signup = () =>{
    return(
      <>
        <InputContent type="text" placeholder="Enter your Username" icon={  <CiUser className='icon'/>}/>
             <InputContent type="email" placeholder="Enter Email Address" icon={  <MdEmail className='icon'/>}/>
             <InputContent type="text" placeholder="Enter your Full Name" icon={  <MdOutlineDriveFileRenameOutline className='icon'/>}/>
             <InputContent type="password" placeholder="Enter your Password" icon={  <RiLockPasswordFill className='icon'/>}/>

      </>
    )
  }
  let login = ()=>{
    return (
      <>
      <InputContent type="text" placeholder="Enter your Username" icon={  <CiUser className='icon'/>}/>         
    <InputContent type="password" placeholder="Enter your Password" icon={  <RiLockPasswordFill className='icon'/>}/>
      </>

    )
  }
  return (
    <div className='logincontainer'>
        <div className='overlay'>
            <div className='logininputcontainer'>
               <div className='signup'>
                <h1>{action == "signup"?"Signup":"Login"}</h1>
                <div className='line'></div>
                </div>

           {action == "signup"?signup():login()}
           <div className='buttoncontainer'>
            
            <Button changeAction={()=>changeAction("signup")}  buttonlabel="Signup" />
            <Button changeAction={()=>changeAction("login")} buttonlabel="Login"/>

           </div>


            </div>

        </div>
       </div>
  )
}
