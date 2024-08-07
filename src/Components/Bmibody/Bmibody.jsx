import "./Bmibody.css"
import Inputform  from "../Inputform/Inputform"
import Button from "../Button/Button";
export  function Bmibody(){
    return <div className="bmibody">
       <Inputform label="Enter your height here:"/>
       <Inputform label="Enter your Weight here:"/>
       <Button buttonlabel="Submit" />
    </div>
}
