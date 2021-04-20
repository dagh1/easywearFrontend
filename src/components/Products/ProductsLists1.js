import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as productsActions from "../../redux/actions/ProductsActions"
import { bindActionCreators } from "redux";
import ListPagination from './ListPagination';
import { event } from "jquery";
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.css";
import './price-range.css';


class Productcard extends React.Component {
  render() {
    const product = this.props;
  
    return (
      <div className={this.props.layout}>
        
            <div className=" product-box">
          <div className="img-wrapper" style={{ height:'320px'}}>
                <div className="lable-block"></div>
                <div className="front">
                  <img
                    className="img-fluid blur-up bg-img lazyloaded"
                    src={product.image_url}
                  />
                  <div className="product-hover">
                    <ul>
                      <li>
                        <Link to={`/3D/${product.image_url}`}>
                          <button className="btn" type="button"></button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="product-detail">
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <a>
                  {" "}
                  <h6>
                    {product.productName}
                    <small>{product.productBrand}</small>
                  </h6>
                </a>
                <h4>{product.productPrice} </h4>
                <a type="button" href={product.url} target="_blank">
                  visit website
                </a>
              </div>
            </div>
          </div>
       
    );
  }
}

const SidebarProduct = props => {
 var Brands = [];
 const onlyUnique = (value, index, self) => {
   return self.indexOf(value) === index;
 };
 
 if (typeof props.product !== "undefined" && props.product.length !== 0)
   Brands = props.product.map((cat) => cat.productBrand).filter(onlyUnique);
  const handleSubmit = (event) => {
    console.log(props);
    console.log(event.target);
      props.brandload(event.target.value, 1);
    };

  return (
    <>
      <div className="collection-filter-block">
        <div className="collection-mobile-back">
          <span className="filter-back">
            <i className="fa fa-angle-left" aria-hidden="true"></i> back
          </span>
        </div>
        <div className="collection-collapse-block open">
          <h3 className="collapse-block-title">brand</h3>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              {Brands ? (
                Brands.map((b) => (
                  <div
                    key={b}
                    className="custom-control custom-checkbox collection-filter-checkbox"
                  >
                    <input
                      key={b}
                      checked={props.brandfilter.includes(b)}
                      type="checkbox"
                      className="custom-control-input"
                    />
                    <label
                      onClick={handleSubmit}
                      key={b}
                      className="custom-control-label"
                    >
                      {b}
                    </label>
                  </div>
                ))
              ) : (
                <div> nono</div>
              )}
            </div>
          </div>
        </div>

        <div className="collection-collapse-block">
          <h3 className="collapse-block-title">colors</h3>
          <div
            className="collection-collapse-block-content"
            style={{ display: "none" }}
          >
            <div className="color-selector">
              <ul>
                <li className="color-1 active"></li>
                <li className="color-2"></li>
                <li className="color-3"></li>
                <li className="color-4"></li>
                <li className="color-5"></li>
                <li className="color-6"></li>
                <li className="color-7"></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="collection-collapse-block border-0">
          <h3 className="collapse-block-title">size</h3>
          <div
            className="collection-collapse-block-content"
            style={{ display: "none" }}
          >
            <div className="collection-brand-filter">
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="hundred"
                />
                <label className="custom-control-label">s</label>
              </div>
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="twohundred"
                />
                <label className="custom-control-label">m</label>
              </div>
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="threehundred"
                />
                <label className="custom-control-label">l</label>
              </div>
              <div className="custom-control custom-checkbox collection-filter-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="fourhundred"
                />
                <label className="custom-control-label">xl</label>
              </div>
            </div>
          </div>
        </div>

        <div className="collection-collapse-block border-0">
          <h3 className="collapse-block-title">price</h3>
          <div className="collection-collapse-block-content">
            <div className="wrapper mt-3">
              <div className="range-slider">
                <input
                  type="text"
                  className="js-range-slider irs-hidden-input"
                  value=""
                  readonly=""
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
 }
 
                

class Form extends React.Component {

	handleSubmit = (event) => {
  	
    this.props.onSubmit(event.target.value);
    
  };

	render() {
  	return (
      <div className="container">
        <section className="search-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <form className="form-header">
                  <div className="input-group">
                    <input
                      onChange={this.handleSubmit}
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      placeholder="Search Products......"
                    />
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    );
  }
}





class ProductLists extends React.Component {
  state = {
    layout: "col-lg-2",
    brandfilter: [],
  };
  componentDidMount() {
    const { products, actions } = this.props;

    if (products.length === 0) {
      actions.loadProducts(0, -1).catch((error) => {});
    }
  }

  loadSelectedPage = (page) => {
    if (this.props) {
      const { products, actions } = this.props;

      if (products.currentPage !== page) {
        actions.loadProducts(page).catch((error) => {});
      }
    }
  };

  loadbyName = (name) => {
    if (this.props) {
      const { actions } = this.props;

      if (name) {
        actions.loadProductsbyName(name).catch((error) => {
          alert("Loading products failed" + error);
        });
      } else {
        actions.loadProducts(0).catch((error) => {
          alert("Loading products failed" + error);
        });
      }
    }
  };

  loadbybrandsfilter = (brand,op) => {
    if (op==1) 
    this.setState({
      brandfilter: this.state.brandfilter.push(brand),
    });
   else if ((op == 2))
      this.setState({
        brandfilter: this.state.brandfilter.delete(brand),
      });
    if (this.props) {
      const { actions } = this.props;

      if (this.state.brandfilter) {
        actions.loadProductsbybrands(this.state.brandfilter).catch((error) => {
          alert("Loading products failed" + error);
        });
      } else {
        actions.loadProducts(0).catch((error) => {
          alert("Loading products failed" + error);
        });
      }
    }
  };

  render() {
    return (
      <>
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="page-title">
                  <h2>collection</h2>
                </div>
              </div>
              <div className="col-sm-6">
                <nav aria-label="breadcrumb" className="theme-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      collection
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section
          className="section-b-space ratio_asos"
          style={{ backgroundColor: "white" }}
        >
          <div className="collection-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-sm-3 collection-filter">
                  <SidebarProduct
                    brandfilter={this.state.brandfilter}
                    brandload={this.loadbybrandsfilter}
                    product={this.props.products.products}
                  />
                </div>
                <div className="collection-content col">
                  <div className="page-main-content">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="collection-product-wrapper">
                          <div className="product-top-filter">
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="filter-main-btn">
                                  <span className="filter-btn btn btn-theme">
                                    <i
                                      className="fa fa-filter"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Filter
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <div className="product-filter-content">
                                  <div className="search-count">
                                    <h5>
                                      Showing Products 1-20 of{" "}
                                      {this.props.products.totalItems} Result
                                    </h5>
                                  </div>
                                  <div className="collection-view">
                                    <ul>
                                      <li>
                                        <i className="fa fa-th grid-layout-view"></i>
                                      </li>
                                      <li>
                                        <i className="fa fa-list-ul list-layout-view"></i>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="collection-grid-view"
                                    style={{ opacity: "1" }}
                                  >
                                    <ul>
                                      <li
                                        onClick={() =>
                                          this.setState({ layout: "col-lg-6" })
                                        }
                                      >
                                        <img
                                          src="../assets/images/icon/2.png"
                                          alt=""
                                          className="product-2-layout-view"
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src="../assets/images/icon/3.png"
                                          alt=""
                                          className="product-3-layout-view"
                                          onClick={() =>
                                            this.setState({
                                              layout: "col-lg-4",
                                            })
                                          }
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src="../assets/images/icon/4.png"
                                          alt=""
                                          className="product-4-layout-view"
                                          onClick={() =>
                                            this.setState({
                                              layout: "col-lg-3",
                                            })
                                          }
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src="../assets/images/icon/6.png"
                                          alt=""
                                          className="product-6-layout-view"
                                          onClick={() =>
                                            this.setState({
                                              layout: "col-lg-2",
                                            })
                                          }
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="product-page-per-view">
                                    <select>
                                      <option value="High to low">
                                        24 Products Par Page
                                      </option>
                                      <option value="Low to High">
                                        50 Products Par Page
                                      </option>
                                      <option value="Low to High">
                                        100 Products Par Page
                                      </option>
                                    </select>
                                  </div>
                                  <div className="product-page-filter">
                                    <select>
                                      <option value="High to low">
                                        Sorting items
                                      </option>
                                      <option value="Low to High">
                                        50 Products
                                      </option>
                                      <option value="Low to High">
                                        100 Products
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="product-wrapper-grid"
                            style={{ opacity: "1" }}
                          >
                            <div className="row margin-res">
                              {this.props.products.products ? (
                                this.props.products.products.map((Prods) => (
                                  <Productcard
                                    layout={this.state.layout}
                                    key={Prods.id}
                                    {...Prods}
                                  />
                                ))
                              ) : (
                                <div>Loading...</div>
                              )}
                            </div>
                          </div>
                          <div className="product-pagination">
                            <div className="theme-paggination-block">
                              <div className="row">
                                <div className="col-xl-6 col-md-6 col-sm-12">
                                  <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Previous"
                                        >
                                          <span aria-hidden="true">
                                            <i
                                              className="fa fa-chevron-left"
                                              aria-hidden="true"
                                            ></i>
                                          </span>{" "}
                                          <span className="sr-only">
                                            Previous
                                          </span>
                                        </a>
                                      </li>
                                      <li className="page-item active">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          3
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a
                                          className="page-link"
                                          href="#"
                                          aria-label="Next"
                                        >
                                          <span aria-hidden="true">
                                            <i
                                              className="fa fa-chevron-right"
                                              aria-hidden="true"
                                            ></i>
                                          </span>{" "}
                                          <span className="sr-only">Next</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                                <div className="col-xl-6 col-md-6 col-sm-12">
                                  <div className="product-search-count-bottom">
                                    <h5>Showing 1-24 of 10 Result</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}



ProductLists.propTypes = {
   products: PropTypes.array.isRequired,
 
};

function mapDispatchToProps(dispatch) {
 
  return {
    actions:bindActionCreators(productsActions, dispatch)
     
  };
}

function mapStateToProps(state) {
 
  return {
          
    products: state.products
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductLists);
