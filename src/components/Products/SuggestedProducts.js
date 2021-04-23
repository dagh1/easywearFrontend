import React, { Component } from "react";
import * as productsActions from "../../redux/actions/ProductsActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadProducts } from "./../../redux/actions/ProductsActions";
import { queryApi } from "../../utils/queryApi";
import jwtDecode from "jwt-decode";

class SuggestedProduct extends Component {
  jwtToken = localStorage.getItem("jwt");

  componentDidMount() {
    /*queryApi(
      "recommendation/getSuggestions/" + this.state.connectedUser._id,
      {},
      "GET"
    ).then((res) => {
      //console.log(res[0].suggestion);
      const { products, actions } = this.props;

      actions.loadProducts();
      let test = [];
      // console.log(this.props["products"].products[0].id);
      res[0].suggestion.forEach((element) => {
        test.push(
          this.props["products"].products.find(
            (prod) => prod?.id === element?.product_id
          )
        );
      });
    });*/
  }

  constructor(props) {
    super(props);
    const user = jwtDecode(this.jwtToken);

    this.state = {
      suggestedproducts: [],
      connectedUser: user,
    };
  }

  render() {
    return (
      <>
        <section className="section-b-space p-t-0 ratio_asos">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="product-4 product-m no-arrow slick-initialized slick-slider">
                  <button
                    className="slick-prev "
                    aria-label="Previous"
                    type="button"
                    style={{ display: "inline-block" }}
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-4}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 350 }}
                    >
                      <div>
                        <div
                          className="product-box"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className="img-wrapper">
                            <div className="lable-block">
                              <span className="lable3">new</span>
                              <span className="lable4">on sale</span>
                            </div>
                            <div className="front">
                              <a
                                href="product-page(no-sidebar).html"
                                className="bg-size blur-up lazyload"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/pro3/1.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                                tabIndex={-1}
                              >
                                <img
                                  src="/assets/images/pro3/1.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </a>
                            </div>

                            <div className="cart-info cart-wrap">
                              <button
                                data-toggle="modal"
                                data-target="#addtocart"
                                title="Add to cart"
                                tabIndex={-1}
                              >
                                <i className="ti-shopping-cart" />
                              </button>
                              <a
                                href="fake"
                                title="Add to Wishlist"
                                tabIndex={-1}
                              >
                                <i className="ti-heart" aria-hidden="true" />
                              </a>
                              <a
                                href="fake"
                                data-toggle="modal"
                                data-target="#quick-view"
                                title="Quick View"
                                tabIndex={-1}
                              >
                                <i className="ti-search" aria-hidden="true" />
                              </a>
                              <a
                                href="compare.html"
                                title="Compare"
                                tabIndex={-1}
                              >
                                <i className="ti-reload" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                          <div className="product-detail">
                            <div className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                            <a
                              href="product-page(no-sidebar).html"
                              tabIndex={-1}
                            >
                              <h6>Slim Fit Cotton Shirt</h6>
                            </a>
                            <h4>
                              $500.00 <del>$600.00</del>
                            </h4>
                            <ul className="color-variant">
                              <li className="bg-light0" />
                              <li className="bg-light1" />
                              <li className="bg-light2" />
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="slick-next "
                    aria-label="Next"
                    type="button"
                    style={{ display: "inline-block" }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedProduct);
