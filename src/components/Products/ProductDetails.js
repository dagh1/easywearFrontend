import React, { Component } from "react";
import * as productsActions from "../../redux/actions/ProductsActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadProducts } from "./../../redux/actions/ProductsActions";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { products, actions } = props;
    actions.loadProducts();
    const prodDetail = props["products"].products.find(
      (p) => p.id === props.match.params.id
    );
    this.state = { prodDetail: prodDetail };
    console.log(props);
  }

  render() {
    return (
      <>
        <div className='breadcrumb-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='page-title'>
                  <h2>product Detail</h2>
                </div>
              </div>
              <div className='col-sm-6'>
                <nav aria-label='breadcrumb' className='theme-breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <a href='index.html'>Home</a>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      product
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section classname='section-b-space'>
          <div classname='collection-wrapper'>
            <div classname='container'>
              <div classname='row'>
                <div className='col-lg-9 col-sm-12 col-xs-12'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-xl-12'>
                        <div className='filter-main-btn mb-2'>
                          <span className='filter-btn'>
                            <i className='fa fa-filter' aria-hidden='true' />
                            filter
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='product-slick slick-initialized slick-slider'>
                          <button
                            className='slick-prev slick-arrow'
                            aria-label='Previous'
                            type='button'
                            style={{}}
                          >
                            Previous
                          </button>
                          <div className='slick-list draggable'>
                            <div
                              className='slick-track'
                              style={{ opacity: 1, width: 1532 }}
                            >
                              <div
                                className='slick-slide slick-current slick-active'
                                data-slick-index={0}
                                aria-hidden='false'
                                style={{
                                  width: 383,
                                  position: "relative",
                                  left: 0,
                                  top: 0,
                                  zIndex: 999,
                                  opacity: 1,
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "inline-block",
                                      marginLeft: "30%",
                                    }}
                                  >
                                    <img
                                      src={this.state.prodDetail.image_url}
                                      alt
                                      className='img-fluid blur-up image_zoom_cls-0 lazyloaded'
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className='slick-slide'
                                data-slick-index={1}
                                aria-hidden='true'
                                tabIndex={-1}
                                style={{
                                  width: 383,
                                  position: "relative",
                                  left: "-383px",
                                  top: 0,
                                  zIndex: 998,
                                  opacity: 0,
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "inline-block",
                                    }}
                                  >
                                    <img
                                      src='../assets/images/pro3/2.jpg'
                                      alt
                                      className='img-fluid blur-up image_zoom_cls-1 lazyloaded'
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className='slick-slide'
                                data-slick-index={2}
                                aria-hidden='true'
                                tabIndex={-1}
                                style={{
                                  width: 383,
                                  position: "relative",
                                  left: "-766px",
                                  top: 0,
                                  zIndex: 998,
                                  opacity: 0,
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "inline-block",
                                    }}
                                  >
                                    <img
                                      src='../assets/images/pro3/27.jpg'
                                      alt
                                      className='img-fluid blur-up image_zoom_cls-2 lazyloaded'
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className='slick-slide'
                                data-slick-index={3}
                                aria-hidden='true'
                                tabIndex={-1}
                                style={{
                                  width: 383,
                                  position: "relative",
                                  left: "-1149px",
                                  top: 0,
                                  zIndex: 998,
                                  opacity: 0,
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "inline-block",
                                    }}
                                  >
                                    <img
                                      src='../assets/images/pro3/27.jpg'
                                      alt
                                      className='img-fluid blur-up image_zoom_cls-3 lazyloaded'
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className='slick-next slick-arrow'
                            aria-label='Next'
                            type='button'
                            style={{}}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                      <div className='col-lg-6 rtl-text'>
                        <div className='product-right'>
                          <h2>{this.state.prodDetail.productName}</h2>

                          <h3>{this.state.prodDetail.productPrice}</h3>

                          <div className='product-description border-product'>
                            <h6 className='product-title size-text'>
                              select size
                              <span>
                                <a
                                  href='#'
                                  data-toggle='modal'
                                  data-target='#sizemodal'
                                >
                                  size chart
                                </a>
                              </span>
                            </h6>
                            <div
                              className='modal fade'
                              id='sizemodal'
                              tabIndex={-1}
                              role='dialog'
                              aria-labelledby='exampleModalLabel'
                              aria-hidden='true'
                            >
                              <div
                                className='modal-dialog modal-dialog-centered'
                                role='document'
                              >
                                <div className='modal-content'>
                                  <div className='modal-header'>
                                    <h5
                                      className='modal-title'
                                      id='exampleModalLabel'
                                    >
                                      Sheer Straight Kurta
                                    </h5>
                                    <button
                                      type='button'
                                      className='close'
                                      data-dismiss='modal'
                                      aria-label='Close'
                                    >
                                      <span aria-hidden='true'>×</span>
                                    </button>
                                  </div>
                                  <div className='modal-body'>
                                    <img
                                      src='../assets/images/size-chart.jpg'
                                      alt
                                      className='img-fluid blur-up lazyload'
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='size-box'>
                              <ul>
                                <li className='active'>
                                  <a href='#'>s</a>
                                </li>
                                <li>
                                  <a href='#'>m</a>
                                </li>
                                <li>
                                  <a href='#'>l</a>
                                </li>
                                <li>
                                  <a href='#'>xl</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='product-buttons'>
                            <a
                              href='#'
                              data-toggle='modal'
                              data-target='#addtocart'
                              className='btn btn-solid'
                            >
                              <i class='fa fa-thumbs-up' aria-hidden='true'></i>
                            </a>
                            <a href='#' className='btn btn-solid'>
                              <i
                                class='fa fa-thumbs-down'
                                aria-hidden='true'
                              ></i>
                            </a>
                          </div>
                          <div className='border-product'>
                            <h6 className='product-title'>product details</h6>
                            <p>
                              You can Purchase this product from{" "}
                              <a href={this.state.prodDetail.url}>
                                <strong>here</strong>
                              </a>
                            </p>
                          </div>
                          <div className='border-product'>
                            <div className='product-icon'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className='tab-product m-0'>
                    <div className='row'>
                      <div className='col-sm-12 col-lg-12'>
                        <ul
                          className='nav nav-tabs nav-material'
                          id='top-tab'
                          role='tablist'
                        >
                          <li className='nav-item'>
                            <a
                              className='nav-link active'
                              id='top-home-tab'
                              data-toggle='tab'
                              href='#top-home'
                              role='tab'
                              aria-selected='true'
                            >
                              <i className='icofont icofont-ui-home' />
                              Description
                            </a>
                            <div className='material-border' />
                          </li>
                          <li className='nav-item'>
                            <a
                              className='nav-link'
                              id='profile-top-tab'
                              data-toggle='tab'
                              href='#top-profile'
                              role='tab'
                              aria-selected='false'
                            >
                              <i className='icofont icofont-man-in-glasses' />
                              Details
                            </a>
                            <div className='material-border' />
                          </li>
                          <li className='nav-item'>
                            <a
                              className='nav-link'
                              id='contact-top-tab'
                              data-toggle='tab'
                              href='#top-contact'
                              role='tab'
                              aria-selected='false'
                            >
                              <i className='icofont icofont-contacts' />
                              Video
                            </a>
                            <div className='material-border' />
                          </li>
                          <li className='nav-item'>
                            <a
                              className='nav-link'
                              id='review-top-tab'
                              data-toggle='tab'
                              href='#top-review'
                              role='tab'
                              aria-selected='false'
                            >
                              <i className='icofont icofont-contacts' />
                              Write Review
                            </a>
                            <div className='material-border' />
                          </li>
                        </ul>
                        <div
                          className='tab-content nav-material'
                          id='top-tabContent'
                        >
                          <div
                            className='tab-pane fade show active'
                            id='top-home'
                            role='tabpanel'
                            aria-labelledby='top-home-tab'
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum. Lorem Ipsum is simply dummy text of the
                              printing and typesetting industry. Lorem Ipsum has
                              been the industry's standard dummy text ever since
                              the 1500s, when an unknown printer took a galley
                              of type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                          <div
                            className='tab-pane fade'
                            id='top-profile'
                            role='tabpanel'
                            aria-labelledby='profile-top-tab'
                          >
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                            <div className='single-product-tables'>
                              <table>
                                <tbody>
                                  <tr>
                                    <td>Febric</td>
                                    <td>Chiffon</td>
                                  </tr>
                                  <tr>
                                    <td>Color</td>
                                    <td>Red</td>
                                  </tr>
                                  <tr>
                                    <td>Material</td>
                                    <td>Crepe printed</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table>
                                <tbody>
                                  <tr>
                                    <td>Length</td>
                                    <td>50 Inches</td>
                                  </tr>
                                  <tr>
                                    <td>Size</td>
                                    <td>S, M, L .XXL</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className='tab-pane fade'
                            id='top-contact'
                            role='tabpanel'
                            aria-labelledby='contact-top-tab'
                          >
                            <div className='mt-3 text-center'>
                              <iframe
                                width={560}
                                height={315}
                                src='https://www.youtube.com/embed/BUWzX78Ye_8'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                              />
                            </div>
                          </div>
                          <div
                            className='tab-pane fade'
                            id='top-review'
                            role='tabpanel'
                            aria-labelledby='review-top-tab'
                          >
                            <form className='theme-form'>
                              <div className='form-row'>
                                <div className='col-md-12'>
                                  <div className='media'>
                                    <label>Rating</label>
                                    <div className='media-body ml-3'>
                                      <div className='rating three-star'>
                                        <i className='fa fa-star' />
                                        <i className='fa fa-star' />
                                        <i className='fa fa-star' />
                                        <i className='fa fa-star' />
                                        <i className='fa fa-star' />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-md-6'>
                                  <label htmlFor='name'>Name</label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='name'
                                    placeholder='Enter Your name'
                                    required
                                  />
                                </div>
                                <div className='col-md-6'>
                                  <label htmlFor='email'>Email</label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='email'
                                    placeholder='Email'
                                    required
                                  />
                                </div>
                                <div className='col-md-12'>
                                  <label htmlFor='review'>Review Title</label>
                                  <input
                                    type='text'
                                    className='form-control'
                                    id='review'
                                    placeholder='Enter your Review Subjects'
                                    required
                                  />
                                </div>
                                <div className='col-md-12'>
                                  <label htmlFor='review'>Review Title</label>
                                  <textarea
                                    className='form-control'
                                    placeholder='Wrire Your Testimonial Here'
                                    id='exampleFormControlTextarea1'
                                    rows={6}
                                    defaultValue={""}
                                  />
                                </div>
                                <div className='col-md-12'>
                                  <button
                                    className='btn btn-solid'
                                    type='submit'
                                  >
                                    Submit YOur Review
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
