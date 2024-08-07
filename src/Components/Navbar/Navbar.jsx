import "./Navbar.css"
function Navbar(props){
    const {navtitle}= props;
    return <div className="navbar">
<h1 className="title">{navtitle}</h1>
    </div>
}
export default Navbar