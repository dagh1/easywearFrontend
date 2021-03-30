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
import LoginForm from "./components/auth/loginForm";

function App() {
  const [connectedUser, setConnectedUser] = useState(null);
  function handleLoggedIn(user) {
    console.log("handlelogin");
    console.log(user);
    setConnectedUser(user);
  }
  return (
    <>
      {(() => {
        if (connectedUser && connectedUser.role === "admin") {
          return (
            <>
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
        } else {
          return (
            <>
              <UserContext.Provider
                value={
                  ([connectedUser, setConnectedUser],
                  {
                    connectedUser: connectedUser,
                    onLoggedIn: handleLoggedIn,
                  })
                }
              >
                <Navbar></Navbar>
                <Switch>
                  <Route path="/auth/login" component={LoginForm} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/user/profile" component={Profile} />
                  <Route path="/event/addPost" component={AddPostForm} />
                  <Route path="/event/post/:id" component={PostDetails} />
                  <Route
                    path="/event/updatePost/:id"
                    component={UpdatePostForm}
                  />

                  <Route exact to="/" component={Home} />
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
