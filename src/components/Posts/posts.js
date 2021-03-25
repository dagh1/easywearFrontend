import React from "react";
import { formatDate } from "../../helpers/dateConvert";

const Posts = (props) => {
  return (
    <>
      <div className='col-xl-3 col-md-6 col-grid-box'>
        <div className='product-box'>
          <div className='img-wrapper'>
            <div className='front'>
              <a
                href='fake'
                className='bg-size blur-up lazyloaded'
                style={{
                  backgroundImage: `url(${props.post.image_url})`,

                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  display: "block",
                }}
              >
                <img
                  src={props.post.image_url}
                  className='img-fluid blur-up lazyload bg-img'
                  alt='imgha'
                  style={{ display: "none" }}
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
              </button>
              <a href title='Add to Wishlist'>
                <i className='ti-heart' aria-hidden='true' />
              </a>
              <a
                href='#'
                data-toggle='modal'
                data-target='#quick-view'
                title='Quick View'
              >
                <i className='ti-search' aria-hidden='true' />
              </a>
              <a href='compare.html' title='Compare'>
                <i className='ti-reload' aria-hidden='true' />
              </a>
            </div>
          </div>
          <div className='product-detail'>
            <div>
              <small>comments (10)</small>

              <a href='product-page(no-sidebar).html'>
                <h6>Posted in {props.post.event_id}</h6>
                <small>{formatDate(props.post.date_creation)}</small>
              </a>
              <p>{props.post.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
