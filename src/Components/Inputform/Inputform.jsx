import "./Inputform.css"
function Inputform(props){
    const {label} = props;
    return <div id="inputcontainer">
    <label className="label">{label}</label>
    <input style={{paddingTop: "4px"}} type="number" step="0.01" className="inputitem" />
    </div>
    
}
export default Inputform