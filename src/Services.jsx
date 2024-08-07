export function isActive(myroute){
   
    return window.location.pathname == myroute? true: false;
    /*
    if(pathparams == myroute){
        return true
    }
    else{
        return false
    }*/

}
export var config={
    routeconfig:{
        dashboard:"/dashboard",
        question: "/question",
        usermanagement: "/usermanagement" ,
        subjectmanagement: "/subjectmanagement",
        assigment: "/assigment" 
    },
    loginstate:["signup", "login"]
}
