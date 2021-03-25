import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import userProfileDetails from "./userProfileDetails";
import { NavLink } from "react-router-dom";
import UserPosts from "./userPosts";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/slices/postSlice";
const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <div className='vendor-cover'>
        <div
          className='bg-size blur-up lazyloaded'
          style={{
            backgroundImage: 'url("../assets/images/vendor/profile.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            display: "block",
          }}
        >
          <img
            src='../assets/images/vendor/profile.jpg'
            className='bg-img lazyload blur-up'
            style={{ display: "none" }}
          />
        </div>
      </div>
      <section className='vendor-profile pt-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='profile-left'>
                <div className='profile-image'>
                  <div>
                    <img
                      src='../assets/images/logos/17.png'
                      className='img-fluid'
                    />
                    <h3>Fashion Store</h3>
                    <div className='rating'>
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                      <i className='fa fa-star' />
                    </div>
                    <h6>750 followers | 10 review</h6>
                  </div>
                </div>
                <div className='profile-detail'>
                  <div>
                    <p>
                      Based in United States, Fashion store has been an
                      Multikart member since May 15, 2017. Fashion Store are
                      engaged in all kinds of western clothing. In garment field
                      we have maintained 3 years exporting experience. company
                      insist in the principle of "Customer first, Quality
                      uppermost".Based in United States, Fashion store has been
                      an{" "}
                    </p>
                    <p>
                      Based in United States, Fashion store has been an
                      Multikart member since May 15, 2017. Fashion Store are
                      engaged in all kinds of western clothing. In garment field
                      we have maintained 3 years exporting experience. company
                      insist in the principle of "Customer first, Quality
                      uppermost"
                    </p>
                  </div>
                </div>
                <div className='vendor-contact'>
                  <div>
                    <h6>follow us:</h6>
                    <div className='footer-social'>
                      <ul>
                        <li>
                          <a href='#'>
                            <i className='fa fa-facebook' aria-hidden='true' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i
                              className='fa fa-google-plus'
                              aria-hidden='true'
                            />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-twitter' aria-hidden='true' />
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='fa fa-instagram' aria-hidden='true' />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h6>if you have any query:</h6>
                    <a href='#' className='btn btn-solid btn-sm'>
                      contact seller
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-b-space'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3 collection-filter'>
              {/* side-bar colleps block stat */}
              <div className='dashboard-left'>
                <div className='collection-mobile-back'>
                  <span className='filter-back'>
                    <i className='fa fa-angle-left' aria-hidden='true' /> back
                  </span>
                </div>
                <div className='block-content'>
                  <ul>
                    <li>
                      <NavLink
                        className='active'
                        activeStyle={{ color: "#ff4c3b" }}
                        to='/user/profile/ProfileDetails'
                      >
                        My Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className='active'
                        activeStyle={{ color: "#ff4c3b" }}
                        to='/user/profile/posts'
                      >
                        My Posts
                      </NavLink>
                    </li>
                    <li>
                      <a href='#'>My Events</a>
                    </li>
                    <li>
                      <a href='#'>My Settings</a>
                    </li>
                    <li className='last'>
                      <a href='#'>Log Out</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='collection-sidebar-banner'>
                <a href='#'>
                  <img
                    src='../assets/images/side-banner.png'
                    className='img-fluid blur-up lazyloaded'
                  />
                </a>
              </div>
              {/* silde-bar colleps block end here */}
            </div>
            <div className='col'>
              <Switch>
                <Route
                  exact
                  path='/user/profile/ProfileDetails'
                  component={userProfileDetails}
                />
                <Route
                  path='/user/profile/posts'
                  render={(props) => <UserPosts {...props} />}
                />
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;