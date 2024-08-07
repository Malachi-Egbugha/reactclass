import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import Bmi from "./Pages/Bmi";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Question from "./Pages/Question";
import Usermanagement from "./Pages/Usermanagement";
import Subjectmanagement from "./Pages/Subjectmanagement";
import Assignment from "./Pages/Assigment";
import { config } from "./Services";
import Logincontainer from "./Pages/LoginContainer/LoginContainer";
import State from "./Pages/State";
import LoginSignup from "./Pages/LoginSignup";
import Auth from "./Auth";

function App() {
  const { dashboard, usermanagement, subjectmanagement, assigment, question } =
    config.routeconfig;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route element={<Auth/>}>
          <Route path={dashboard} element={<Dashboard />} />
          <Route path={question} element={<Question />} />
          <Route path={usermanagement} element={<Usermanagement />} />
          <Route path={subjectmanagement} element={<Subjectmanagement />} />
          <Route path={assigment} element={<Assignment />} />
          <Route path="/functionalstate" element={<State />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
