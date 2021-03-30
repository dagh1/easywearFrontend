import "./App.css";
import { React, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

import Profile from "./components/User/profile";

import NavbarBack from "./components/BackOffice/NavBarBack";
import FooterBack from "./components/BackOffice/FooterBack";
import DashBoard from "./components/BackOffice/DashBoard";
import SideBar from "./components/BackOffice/SideBar";
import ClaimBack from "./components/BackOffice/ClaimsBack";
import Products from "./components/BackOffice/Products";
import Events from "./components/BackOffice/Events";
import AddPostForm from "./components/Posts/addPostForm";
import UpdatePostForm from "./components/Posts/updatePostForm";
import PostDetails from "./components/Posts/postDetails";
import { UserContext } from "./contexts/userContext";

function App() {
  const [connectedUser, setConnectedUser] = useState({
    _id: "6041f2fe9dbc16c1758d7a9a",
    username: "Rana",
    password: "yayaya",
    role: "aa",
  });
  return (
    <>
      {(() => {
        if (connectedUser.role === "admin") {
          return (
            <>

              <UserContext.Provider value={[connectedUser, setConnectedUser]}>
                <NavbarBack></NavbarBack>
                <SideBar></SideBar>
                <Switch>
                  <Route path="/ClaimsBack" component={ClaimBack} />
                  <Route path="/Products" component={Products} />
                  <Route path="/Events" component={Events} />
                  <Route exact to="/" component={DashBoard} />
                </Switch>
                <FooterBack></FooterBack>
              </UserContext.Provider>
            </>
          );
        } else {
          return (
            <>
              <UserContext.Provider value={[connectedUser, setConnectedUser]}>
                <Navbar></Navbar>
                <Switch>
                  <Route path='/about' component={About} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/user/profile' component={Profile} />
                  <Route path='/event/addPost' component={AddPostForm} />
                  <Route path='/event/post/:id' component={PostDetails} />
                  <Route
                    path='/event/updatePost/:id'
                    component={UpdatePostForm}
                  />

                  <Route exact to='/' component={Home} />

                </Switch>
                <Footer />
              </UserContext.Provider>
            </>
          );
        }
      })()}
    </>
  );
}

export default App;
