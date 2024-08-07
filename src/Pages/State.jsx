import React,{useState} from 'react'

export default function State() {
  let [car, setcar] = useState({
    brand: "golf",
    platenumber:"1234566",
    odometer:"123456",
    speedometer:"1200",
    model:"v5"
  });
  const {brand, platenumber,odometer,model, speedometer} = car;
 // let [brand, setbrand] = useState("");
  //let [platenumber, setplatenumber] = useState("");
  //let [odometer, setodometer] = useState("");
  //let [speedometer, setspeedometer] = useState("");
  //let count = 1;
  function changebrand(){
    setcar((previousstate) =>{
      return {...previousstate,brand:"toyota"}
    })

    
  }
 
  
  return (
    <div>
      <h1>Model: {model}</h1>
      <h1>Brand: {brand}</h1>
      <h1>PlateNumber: {platenumber}</h1>
      <h1>Odometer: {odometer}</h1>
      <h1>Speedomer: {speedometer}</h1>
      <button onClick={changebrand}> Change Brand</button>
      
    </div>
  )
}
