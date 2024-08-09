import  axios from "axios";
export var signin = async (username, password) => {
  try {
    
    var response = await axios.post("https://radar2.pythonanywhere.com/login/",  {
      username_or_email: username,
      password: password,
    })
    
   
    return response.data;
  


    
  } catch (error) {
    return {error:true, message:error.response.data.message}

    //console.log("message",error.response.data.message)
    
  }
};
