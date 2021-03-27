/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { formatDate } from "../../helpers/dateConvert";
import {
  deletePost,
  setErrors,
  selectPosts,
  selectPost,
} from "../../redux/slices/postSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { queryApi } from "../../utils/queryApi";

const Posts = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const updatePost = (post) => {
    dispatch(selectPost(post));
    history.replace("/event/updatePost/" + post._id);
  };

  const deletePostEvent = async (id) => {
    const [res, err] = await queryApi("post/" + id, {}, "DELETE");
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deletePost(id));
      history.push("/user/profile/posts");
    }
  };

  const getPostEvent = (post) => {
    dispatch(selectPost(post));
    history.replace("/event/post/" + post._id);
  };
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
              <a title='See more info' onClick={() => getPostEvent(props.post)}>
                <i className='fa fa-info' aria-hidden='true' />
              </a>
              <a
                title='Delete Post From event'
                onClick={() => deletePostEvent(props.post._id)}
              >
                <i className='fa fa-trash' aria-hidden='true' />
              </a>
              <a
                title='Update Post From event'
                onClick={() => updatePost(props.post)}
              >
                <i className='fa fa-edit' aria-hidden='true' />
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
