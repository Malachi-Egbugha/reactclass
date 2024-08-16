import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import Layoutone from "../Layout/Layoutone";
import {user} from "../Apicalls";

function Dashboard() {
  var [value, setvalue] = useState(1);
  var [secondvalue, setvaluesecond] = useState([]);
  var usercall =async () => {
    try{
    
    var res = await user();
    await setvaluesecond(res);
    console.log("secondvalue", secondvalue);
    }
    catch(e){

    }
    
  }
  
   useEffect(() => {
   usercall();
    
  },[value]);
  

  return (
    <Layoutone>
      <h1>Welcome to Dashboard</h1>
      <h2>{value}</h2>
      <table>
        <th>ID</th>
        <th>NAME</th>
        <th>USERNAME</th>
        <th>EMAIL</th>
        <th>PHONE</th>
        <th>WEBSITE</th>
        <th>ADDRESS</th>
        
      {
        secondvalue.map((param)=>(
          <tr>
            <td>{param.id}</td>
            <td>{param.name}</td>
            <td>{param.username}</td>
            <td>{param.email}</td>
            <td>{param.phone}</td>
            <td>{param.website}</td>
            <td>{param.address.city}</td>
          </tr>
        )

        )
      
      }
      </table>
    </Layoutone>
  );
}

export default Dashboard;
