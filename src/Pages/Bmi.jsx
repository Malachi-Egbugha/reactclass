import Navbar from "../Components/Navbar/Navbar";
import { Bmibody } from "../Components/Bmibody/Bmibody";

function Bmi() {
  return (
    <div className="container">
      <Navbar navtitle="Secure your Health by knowing your BMI" />
      <Bmibody />
      <Navbar navtitle="HTML CLASS" />
    </div>
  );
}
export default Bmi;
