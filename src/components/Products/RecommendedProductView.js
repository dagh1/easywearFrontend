import React from "react";

const RecommendedProductView = (props) => {
  return (
    <>
      <div
        className='slick-slide slick-cloned'
        data-slick-index={8}
        aria-hidden='true'
        tabIndex={-1}
        style={{ width: 285 }}
      >
        <div>
          <div
            className='product-box'
            style={{ width: "100%", display: "inline-block" }}
          >
            <div className='img-wrapper'>
              <div className='front'>
                <a
                  href='product-page(no-sidebar).html'
                  className='bg-size blur-up lazyloaded'
                  style={{
                    backgroundImage: `url(${props.product.image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    display: "block",
                  }}
                  tabIndex={-1}
                >
                  <img
                    src={props.product.image_url}
                    className='img-fluid blur-up lazyload bg-img'
                    alt
                    style={{ display: "none" }}
                  />
                </a>
              </div>
              <div className='back'>
                <a
                  href='product-page(no-sidebar).html'
                  className='bg-size blur-up lazyloaded'
                  style={{
                    backgroundImage: `url(${props.product.image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    display: "block",
                  }}
                  tabIndex={-1}
                >
                  <img
                    src='../assets/images/pro3/36.jpg'
                    className='img-fluid blur-up lazyload bg-img'
                    alt
                    style={{ display: "none" }}
                  />
                </a>
              </div>
              <div className='cart-info cart-wrap'>
                <button
                  data-toggle='modal'
                  data-target='#addtocart'
                  title='Add to cart'
                  tabIndex={-1}
                >
                  <i className='ti-shopping-cart' />
                </button>{" "}
                <a
                  href='javascript:void(0)'
                  title='Add to Wishlist'
                  tabIndex={-1}
                >
                  <i className='ti-heart' aria-hidden='true' />
                </a>{" "}
                <a
                  href='#'
                  data-toggle='modal'
                  data-target='#quick-view'
                  title='Quick View'
                  tabIndex={-1}
                >
                  <i className='ti-search' aria-hidden='true' />
                </a>{" "}
                <a href='compare.html' title='Compare' tabIndex={-1}>
                  <i className='ti-reload' aria-hidden='true' />
                </a>
              </div>
            </div>
            <div className='product-detail'>
              <div className='rating'>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' />
              </div>
              <a href='product-page(no-sidebar).html' tabIndex={-1}>
                <h6>{props.product.productName}</h6>
              </a>
              <h4>{props.product.productPrice}</h4>
              <ul className='color-variant'>
                <li className='bg-light0' />
                <li className='bg-light1' />
                <li className='bg-light2' />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedProductView;
