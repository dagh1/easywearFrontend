import "./App.css";
import { React, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/User/profile";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/user/profile' component={Profile}></Route>
        <Route exact to='/' component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
