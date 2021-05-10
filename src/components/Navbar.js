import React from "react";
import { Link, NavLink } from "react-router-dom";
import Contact from "./Contact";
import jwtDecode from "jwt-decode";

const Navbar = () => {
  let user;
  const jwtToken = localStorage.getItem("jwt");
  if (jwtToken) {
    // Set auth token header auth
    user = jwtDecode(jwtToken); // Decode token and get user info and exp
  }
  return (
    <>
      {/* header start */}
      <header>
        <div className="mobile-fix-option" />
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-contact">
                  <ul>
                    <li>Welcome to Our store Multikart</li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true" />
                      Call Us: 123 - 456 - 7890
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-right">
                <ul className="header-dropdown">
                  <li className="mobile-wishlist">
                    <a href="#">
                      <i className="fa fa-heart" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="onhover-dropdown mobile-account">
                    <i className="fa fa-user" aria-hidden="true" />
                    {/* user */}
                    My Account
                    <ul className="onhover-show-div">
                      {!user && (
                        <li>
                          <Link to="/auth/login">Login</Link>
                        </li>
                      )}{" "}
                      {!user && (
                        <li>
                          <Link to="/auth/register">Register</Link>
                        </li>
                      )}
                      {user && (
                        <li>
                          <Link to="/user/userProfile">Profile</Link>
                        </li>
                      )}
                      {user && (
                        <li>
                          <a
                            href="#"
                            onClick={() => {
                              localStorage.removeItem("jwt");
                              window.location = "/auth/login";
                            }}
                          >
                            Logout
                          </a>
                        </li>
                      )}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <a href="FAKEhREF">
                      <div className="bar-style">
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        />
                      </div>
                    </a>
                    <div id="mySidenav" className="sidenav">
                      <a href="FAKEhREF" className="sidebar-overlay" />
                      <nav>
                        <div>
                          <div className="sidebar-back text-left">
                            <i
                              className="fa fa-angle-left pr-2"
                              aria-hidden="true"
                            />
                            Back
                          </div>
                        </div>
                        <ul id="sub-menu" className="sm pixelstrap sm-vertical">
                          <li>
                            <a href="#">clothing</a>
                            <ul className="mega-menu clothing-menu">
                              <li>
                                <div className="row m-0">
                                  <div className="col-xl-4">
                                    <div className="link-section">
                                      <h5>women's fashion</h5>
                                      <ul>
                                        <li>
                                          <a href="#">dresses</a>
                                        </li>
                                        <li>
                                          <a href="#">skirts</a>
                                        </li>
                                        <li>
                                          <a href="#">westarn wear</a>
                                        </li>
                                        <li>
                                          <a href="#">ethic wear</a>
                                        </li>
                                        <li>
                                          <a href="#">sport wear</a>
                                        </li>
                                      </ul>
                                      <h5>men's fashion</h5>
                                      <ul>
                                        <li>
                                          <a href="#">sports wear</a>
                                        </li>
                                        <li>
                                          <a href="#">western wear</a>
                                        </li>
                                        <li>
                                          <a href="#">ethic wear</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-4">
                                    <div className="link-section">
                                      <h5>accessories</h5>
                                      <ul>
                                        <li>
                                          <a href="#">fashion jewellery</a>
                                        </li>
                                        <li>
                                          <a href="#">caps and hats</a>
                                        </li>
                                        <li>
                                          <a href="#">precious jewellery</a>
                                        </li>
                                        <li>
                                          <a href="#">necklaces</a>
                                        </li>
                                        <li>
                                          <a href="#">earrings</a>
                                        </li>
                                        <li>
                                          <a href="#">wrist wear</a>
                                        </li>
                                        <li>
                                          <a href="#">ties</a>
                                        </li>
                                        <li>
                                          <a href="#">cufflinks</a>
                                        </li>
                                        <li>
                                          <a href="#">pockets squares</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-4">
                                    <a href="#" className="mega-menu-banner">
                                      <img
                                        src="/assets/images/mega-menu/fashion.jpg"
                                        className="img-fluid blur-up lazyload"
                                        alt="Fashion"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">bags</a>
                            <ul>
                              <li>
                                <a href="#">shopper bags</a>
                              </li>
                              <li>
                                <a href="#">laptop bags</a>
                              </li>
                              <li>
                                <a href="#">clutches</a>
                              </li>
                              <li>
                                <a href="#">purses</a>
                                <ul>
                                  <li>
                                    <a href="#">purses</a>
                                  </li>
                                  <li>
                                    <a href="#">wallets</a>
                                  </li>
                                  <li>
                                    <a href="#">leathers</a>
                                  </li>
                                  <li>
                                    <a href="#">satchels</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">footwear</a>
                            <ul>
                              <li>
                                <a href="#">sport shoes</a>
                              </li>
                              <li>
                                <a href="#">formal shoes</a>
                              </li>
                              <li>
                                <a href="#">casual shoes</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">watches</a>
                          </li>
                          <li>
                            <a href="#">Accessories</a>
                            <ul>
                              <li>
                                <a href="#">fashion jewellery</a>
                              </li>
                              <li>
                                <a href="#">caps and hats</a>
                              </li>
                              <li>
                                <a href="#">precious jewellery</a>
                              </li>
                              <li>
                                <a href="#">more..</a>
                                <ul>
                                  <li>
                                    <a href="#">necklaces</a>
                                  </li>
                                  <li>
                                    <a href="#">earrings</a>
                                  </li>
                                  <li>
                                    <a href="#">wrist wear</a>
                                  </li>
                                  <li>
                                    <a href="#">accessories</a>
                                    <ul>
                                      <li>
                                        <a href="#">ties</a>
                                      </li>
                                      <li>
                                        <a href="#">cufflinks</a>
                                      </li>
                                      <li>
                                        <a href="#">pockets squares</a>
                                      </li>
                                      <li>
                                        <a href="#">helmets</a>
                                      </li>
                                      <li>
                                        <a href="#">scarves</a>
                                      </li>
                                      <li>
                                        <a href="#">more...</a>
                                        <ul>
                                          <li>
                                            <a href="#">accessory gift sets</a>
                                          </li>
                                          <li>
                                            <a href="#">travel accessories</a>
                                          </li>
                                          <li>
                                            <a href="#">phone cases</a>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="#">belts &amp; more</a>
                                  </li>
                                  <li>
                                    <a href="#">wearable</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">house of design</a>
                          </li>
                          <li>
                            <a href="#">beauty &amp; personal care</a>
                            <ul>
                              <li>
                                <a href="#">makeup</a>
                              </li>
                              <li>
                                <a href="#">skincare</a>
                              </li>
                              <li>
                                <a href="#">premium beaty</a>
                              </li>
                              <li>
                                <a href="#">more</a>
                                <ul>
                                  <li>
                                    <a href="#">fragrances</a>
                                  </li>
                                  <li>
                                    <a href="#">luxury beauty</a>
                                  </li>
                                  <li>
                                    <a href="#">hair care</a>
                                  </li>
                                  <li>
                                    <a href="#">tools &amp; brushes</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">home &amp; decor</a>
                          </li>
                          <li>
                            <a href="#">kitchen</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="brand-logo">
                    <a href="index.html">
                      <img
                        src="/assets/images/icon/logo.png"
                        className="img-fluid blur-up lazyload"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <nav id="main-nav">
                      <div className="toggle-nav">
                        <i className="fa fa-bars sidebar-bar" />
                      </div>
                      <ul
                        id="main-menu"
                        className="sm pixelstrap sm-horizontal"
                      >
                        <li>
                          <div className="mobile-back text-right">
                            Back
                            <i
                              className="fa fa-angle-right pl-2"
                              aria-hidden="true"
                            />
                          </div>
                        </li>
                        <li>
                          <NavLink to="/">HOME</NavLink>
                        </li>
                        <li>{<Link to="/contact">Contact</Link>}</li>
                        <li>{<Link to="/about">About</Link>}</li>
                        <li>{<Link to="/products">Products</Link>}</li>
                        <li>{<Link to="/3D">3D</Link>}</li>
                        <li>{<Link to="/getSize">Size</Link>}</li>
                        <li>{<Link to="/event">Events</Link>}</li>
                      </ul>
                    </nav>
                  </div>
                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <img
                              src="/assets/images/icon/search.png"
                              className="img-fluid blur-up lazyload"
                              alt="Fashion"
                            />
                            <i className="ti-search" />
                          </div>
                          <div id="search-overlay" className="search-overlay">
                            <div>
                              <span className="closebtn" title="Close Overlay">
                                ×
                              </span>
                              <div className="overlay-content">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-xl-12">
                                      <form>
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Search a Product"
                                          />
                                        </div>
                                        <button
                                          type="submit"
                                          className="btn btn-primary"
                                        >
                                          <i className="fa fa-search" />
                                        </button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="onhover-div mobile-setting">
                          <div>
                            <img
                              src="/assets/images/icon/setting.png"
                              className="img-fluid blur-up lazyload"
                              alt="Fashion"
                            />
                            <i className="ti-settings" />
                          </div>
                          <div className="show-div setting">
                            <h6>User</h6>
                            <ul>
                              <li>
                                <Link to="/user/profile">Profile</Link>
                              </li>
                              <li>
                                <a href="#">Settings</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="onhover-div mobile-cart">
                          <div>
                            <img
                              src="/assets/images/icon/cart.png"
                              className="img-fluid blur-up lazyload"
                              alt="Fashion"
                            />
                            <i className="ti-shopping-cart" />
                          </div>
                          <ul className="show-div shopping-cart">
                            <li>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="/assets/images/fashion/product/1.jpg"
                                    alt="Fashion"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h4>item name</h4>
                                  </a>
                                  <h4>
                                    <span>1 x $ 299.00</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="close-circle">
                                <a href="#">
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="media">
                                <a href="#">
                                  <img
                                    className="mr-3"
                                    src="/assets/images/fashion/product/2.jpg"
                                    alt="Fashion"
                                  />
                                </a>
                                <div className="media-body">
                                  <a href="#">
                                    <h4>item name</h4>
                                  </a>
                                  <h4>
                                    <span>1 x $ 299.00</span>
                                  </h4>
                                </div>
                              </div>
                              <div className="close-circle">
                                <a href="#">
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="total">
                                <h5>
                                  subtotal : <span>$299.00</span>
                                </h5>
                              </div>
                            </li>
                            <li>
                              <div className="buttons">
                                <a href="cart.html" className="view-cart">
                                  view cart
                                </a>
                                <a href="#" className="checkout">
                                  checkout
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
    </>
  );
};

export default Navbar;
