import  axios from "axios";
export var signin = async (username, password) => {
  try {
    
    var response = await axios.post("https://radar2.pythonanywhere.com/login/",  {
      username_or_email: username,
      password: password,
    })
    
    console.log("check",response.data);


    
  } catch (error) {
    console.log(error)
  }
};
