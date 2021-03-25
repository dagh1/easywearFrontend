import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/slices/postSlice";

const UserPosts = () => {
  const [posts, err] = useSelector(selectPosts);

  return (
    <>
      {posts.map((prod) => (
        <p>{prod.description}</p>
      ))}
      <div className='collection-wrapper'>
        <div className='collection-content ratio_asos'>
          <div className='page-main-content'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='filter-main-btn'>
                  <span className='filter-btn btn btn-theme'>
                    <i className='fa fa-filter' aria-hidden='true' /> Filter
                  </span>
                </div>
              </div>
            </div>
            <div className='collection-product-wrapper'>
              <div className='product-wrapper-grid'>
                <div className='row'>
                  <div className='col-xl-3 col-md-6 col-grid-box'>
                    <div className='product-box'>
                      <div className='img-wrapper'>
                        <div className='front'>
                          <a
                            href='fake'
                            className='bg-size blur-up lazyloaded'
                            style={{
                              backgroundImage:
                                'url("../assets/images/fashion/product/2.jpg")',
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              display: "block",
                            }}
                          >
                            <img
                              src='../assets/images/fashion/product/2.jpg'
                              className='img-fluid blur-up lazyload bg-img'
                              style={{ display: "none" }}
                              alt='imgha'
                            />
                          </a>
                        </div>
                        <div className='cart-info cart-wrap'>
                          <button
                            data-toggle='modal'
                            data-target='#addtocart'
                            title='Add to cart'
                          >
                            <i className='ti-shopping-cart' />
                          </button>{" "}
                          <a href='' title='Add to Wishlist'>
                            <i className='ti-heart' aria-hidden='true' />
                          </a>{" "}
                          <a
                            href='#'
                            data-toggle='modal'
                            data-target='#quick-view'
                            title='Quick View'
                          >
                            <i className='ti-search' aria-hidden='true' />
                          </a>{" "}
                          <a href='compare.html' title='Compare'>
                            <i className='ti-reload' aria-hidden='true' />
                          </a>
                        </div>
                      </div>
                      <div className='product-detail'>
                        <div>
                          <div className='rating'>
                            <i className='fa fa-star' />{" "}
                            <i className='fa fa-star' />{" "}
                            <i className='fa fa-star' />{" "}
                            <i className='fa fa-star' />{" "}
                            <i className='fa fa-star' />
                          </div>
                          <a href='product-page(no-sidebar).html'>
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book
                          </p>
                          <h4>$500.00</h4>
                          <ul className='color-variant'>
                            <li className='bg-light0' />
                            <li className='bg-light1' />
                            <li className='bg-light2' />
                          </ul>
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
    </>
  );
};

export default UserPosts;
