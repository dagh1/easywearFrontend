import "./App.css";
import { React } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NavbarBack from "./components/BackOffice/NavBarBack";
import FooterBack from "./components/BackOffice/FooterBack";
import DashBoard from "./components/BackOffice/DashBoard";
import SideBar from "./components/BackOffice/SideBar";
import ClaimBack from "./components/BackOffice/ClaimsBack";
import Products from "./components/BackOffice/Products";
import Events from "./components/BackOffice/Events";

function App() {
  return (
    <>
      {/*<Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route exact to='/' component={Home} />
      </Switch>
      <Footer />
      */}
      <NavbarBack></NavbarBack>
      <SideBar></SideBar>
      <Switch>
        <Route path="/ClaimsBack" component={ClaimBack} />
        <Route path="/Products" component={Products} />
        <Route path="/Events" component={Events} />
        <Route exact to="/" component={DashBoard} />
      </Switch>
      <FooterBack></FooterBack>
    </>
  );
}

export default App;
