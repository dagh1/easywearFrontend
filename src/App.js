
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
import Contacts from "./components/BackOffice/Messages";
import Events from "./components/BackOffice/Events";
import AddPostForm from "./components/Posts/addPostForm";
import UpdatePostForm from "./components/Posts/updatePostForm";
import PostDetails from "./components/Posts/postDetails";
import { UserContext } from "./contexts/userContext";
import HomeEvent from "./components/Events/homeEvent";
import eventWithId from "./components/Events/eventWithId";
import jwtDecode from "jwt-decode";

import LoginForm from "./components/auth/loginForm";
import RegisterForm from "./components/auth/registerForm";
import EditProfileForm from "./components/User/editProfileForm";
import ProductLists from "./components/Products/ProductsLists1";
import UserBack from "./components/BackOffice/UsersBack";
import EditUserForm from "./components/BackOffice/EditUserForm";
import AddUserForm from "./components/BackOffice/AddUserForm";
import Load from "./components/load";
import BodyDetection from "./components/3D/bodyDetection";
import ProductDetails from "./components/Products/ProductDetails";
import UserProfile from "./components/User/userprofile";
import GetSize from "./components/3D/size";
import ProductsBack from "./components/Products/ProductsBack";
import LoginGoogle from "./components/auth/loginGoogle";
import RegisterGoogle from "./components/auth/registerGoogle";
import PageNotFound from './components/PageNotFound';

function App() {
  const [connectedUser, setConnectedUser] = useState(null);
  //const jwtToken = localStorage.getItem("jwt");
  //console.log(jwtToken);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      // Set auth token header auth
      setConnectedUser(jwtDecode(localStorage.getItem("jwt"))); // Decode token and get user info and exp
    }
  }, []);
  function handleLoggedIn(user) {
    setConnectedUser(user);
  }
  console.log(connectedUser);
  return (
    <>
      {(() => {
        if (connectedUser && connectedUser.role === "admin") {
          return (
            <>
              <UserContext.Provider value={[connectedUser, setConnectedUser]}>
                <NavbarBack></NavbarBack>
                <SideBar></SideBar>
                <Switch>
                  <Route path="/Admin/ClaimsBack" component={ClaimBack} />
                  <Route path="/Admin/UsersBack" component={UserBack} />
                  <Route path="/Admin/editUserBack" component={EditUserForm} />
                  <Route path="/Admin/addUserBack" component={AddUserForm} />
                  <Route path="/Admin/Products" component={ProductsBack} />
                  <Route path="/Admin/Events" component={Events} />
                  <Route path="/Admin/Contacts" component={Contacts} />
                  <Route exact to="/Admin" component={DashBoard} />
                  <Route path="*" component={PageNotFound} />
                </Switch>
                <FooterBack></FooterBack>
              </UserContext.Provider>
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
                  <Route
                    path="/auth/loginGoogle/:token"
                    component={LoginGoogle}
                  />
                  <Route
                    path="/auth/registerGoogle/:token"
                    component={RegisterGoogle}
                  />
                  <Route path="/auth/register" component={RegisterForm} />
                  <Route path="/user/userProfile" component={UserProfile} />
                  <Route
                    path="/user/editprofile/:id"
                    component={EditProfileForm}
                  />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/user/profile" component={Profile} />
                  <Route path="/Products" component={ProductLists} />
                  <Route
                    path="/ProductDetails/:id"
                    component={ProductDetails}
                  />
                  <Route path="/GetSize" component={GetSize} />
                  <Route path="/3D" component={BodyDetection} />
                  <Route path="/event/addPost/:id" component={AddPostForm} />
                  <Route path="/event/post/:id" component={PostDetails} />
                  <Route path="/3D/:imgurl" component={BodyDetection} />

                  <Route
                    path="/event/updatePost/:id"
                    component={UpdatePostForm}
                  />
                  <Route path="/event" component={HomeEvent} />
                  <Route
                    path="/eventDetails/:eventId"
                    component={eventWithId}
                  />
                  <Route exact to="/" component={Home} />
                  <Route path="*" component={PageNotFound} />
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
