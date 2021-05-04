import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/userSlice";
import { Helmet } from "react-helmet";

const LoginGoogle = (props) => {
  const dispatch = useDispatch();

  console.log("hi login google auth");
  console.log(props.match.params.token);
  if (props.match.params.token) {
    localStorage.setItem("jwt", props.match.params.token);
    dispatch(addUser(jwtDecode(props.match.params.token)));
    if (jwtDecode(props.match.params.token).role === "user") {
      window.location = "/user/profile";
    } else {
      window.location = "/UsersBack";
    }
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Logging In</title>
      </Helmet>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-title">
                <h2>Logging In</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Logging In
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="about-page section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-section">
                <img
                  src="/assets/images/about/about%20us.jpg"
                  className="img-fluid blur-up lazyloaded"
                  alt
                />
              </div>
            </div>
            <div className="col-sm-12">
              <br></br>
              <h4 className="text-center">Logging In</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginGoogle;
