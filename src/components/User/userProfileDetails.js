import React from "react";
import jwtDecode from "jwt-decode";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { formatDate } from "../../helpers/dateConvert";
const UserFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const UserImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const UserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;

const userProfileDetails = () => {
  let user;
  const jwtToken = localStorage.getItem("jwt");
  if (jwtToken) {
    // Set auth token header auth
    user = jwtDecode(jwtToken); // Decode token and get user info and exp
  }

  return (
    <>
      <div className="col-lg-9">
        <Helmet>
          <meta charSet="utf-8" />
          <title>User Profile</title>
        </Helmet>
        <div className="dashboard-right">
          <div className="dashboard">
            <UserImageWrapper>
              <UserImage src={user.image_url}></UserImage>
            </UserImageWrapper>
            <div className="page-title">
              <h2>My Dashboard</h2>
            </div>
            <div className="welcome-msg">
              <p>
                Hello, {user.first_name} {user.last_name} !
              </p>
              <p>
                From your My Account Dashboard you have the ability to view a
                snapshot of your recent account activity and update your account
                information. Select a link below to view or edit information.
              </p>
            </div>
            <div className="box-account box-info">
              <div className="box-head">
                <h2>Account Information</h2>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="box">
                    <div className="box-title">
                      <h3>Contact Information</h3>
                      {/*  <a href="#">Edit</a> */}
                    </div>
                    <div className="box-content">
                      <h6>
                        {user.first_name} {user.last_name}
                      </h6>
                      <h6>{user.email}</h6>
                      <h6>{/* <a href="#">Change Password</a> */}</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="box">
                    <div className="box-title">
                      <h3>Allergies</h3>
                      <Link to={`/user/editprofile/${user._id}`}>Edit</Link>
                    </div>
                    <div className="box-content">
                      <p>{user.alergie}.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="box">
                  <div className="box-title">
                    <h3>User information</h3>
                    {/*  <a href="#">Manage Addresses</a> */}
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>Height: {user.height}</h6>
                      <h6>
                        Favorite Color: {user.fav_color}
                        <br />
                        {/* <a href="#">Edit Address</a> */}
                      </h6>
                      <h6>Gender: {user.gender}</h6>
                    </div>
                    <div className="col-sm-6">
                      <h6>Weight: {user.weight}</h6>
                      <h6>
                        Phone Number: {user.numero_tel}
                        <br />
                        {/* <a href="#">Edit Address</a> */}
                      </h6>
                      <h6>Birthday: {formatDate(user.date_naissance)}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default userProfileDetails;
