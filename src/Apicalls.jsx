import  axios from "axios";
import { config } from "./Services";
var {baseurl} = config

export var user = async () =>{
  try{
    var response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;

  }
  catch(error){
    return {error:true, message:error.response.data.message}

  }
}

export var signin = async (username, password) => {
  try {
    
    var response = await axios.post(`${baseurl}/login/`,  {
      username_or_email: username,
      password: password,
    })
    
   
    return response.data;
  


    
  } catch (error) {
    return {error:true, message:error.response.data.message}

    //console.log("message",error.response.data.message)
    
  }
};
export var signups = async (emailinput) =>{
  console.log("emailinput",emailinput);
  try{
    var response = await axios.post(`${baseurl}/signup/`,  {
      email:emailinput,  
      user_type:"user"
    })
    console.log("response", response);
    
   
    return response.data;
  

  }
  catch(error){
    console.log("error", error);
    return {error:true, message:error.response.data.message}

  }
}
