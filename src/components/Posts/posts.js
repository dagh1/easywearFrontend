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
import { useFormik } from "formik";
import * as Yup from "yup";
import { addClaim } from "../../redux/slices/claimSlice";

const Posts = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loader, setLoader] = useState(false);


  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const updatePost = (post) => {
    dispatch(selectPost(post));
    history.replace("/event/updatePost/" + post._id);
  };

  const deletePostEvent = async (id) => {
    setLoader(true);
    const [res, err] = await queryApi("post/" + id, {}, "DELETE");
    setLoader(false);
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
  const yupSchema = Yup.object({
    description: Yup.string(),
  });
  const openConfirmation = async () => {
    if (window.confirm("Are you sure of Your claim ?") === true) {
      formik.handleSubmit();
      alert("Claim added with success .. wait for adminstrator confirmation");
      history.push("/user/profile/claims");
    }
  };

  const formik = useFormik({
    initialValues: {},
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      setShowLoader(true);
      values.type = "post";
      values.description = "I didn't like the post !!";
      values.image_url = props.post.image_url;
      values.state = 1;
      values.user_id = "6042082f471163107c3ca589";
      const [res, err] = await queryApi("claim/addClaim", values, "POST");
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else {
        dispatch(addClaim(res));
      }
    },
  });

  return (
    <>
      <div className="col-xl-3 col-md-6 col-grid-box">
        <div className="product-box">
          <form onSubmit={formik.handleSubmit}>
            <div className="img-wrapper">
              <div className="front">
                <a
                  href="fake"
                  className="bg-size blur-up lazyloaded"
                  style={{
                    backgroundImage: `url(${props.post.image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    display: "block",
                  }}
                >
                  <img
                    src={props.post.image_url}
                    className="img-fluid blur-up lazyload bg-img"
                    alt="imgha"
                    style={{ display: "none" }}
                  />
                </a>
              </div>
              <div className="cart-info cart-wrap">
                <a
                  title="See more info"
                  onClick={() => getPostEvent(props.post)}
                >
                  <i className="fa fa-info" aria-hidden="true" />
                </a>
                <a
                  title="Delete Post From event"
                  onClick={() => deletePostEvent(props.post._id)}
                >
                  <i className="fa fa-trash" aria-hidden="true" />
                </a>
                <a
                  title="Update Post From event"
                  onClick={() => updatePost(props.post)}
                >
                  <i className="fa fa-edit" aria-hidden="true" />
                </a>

                <a
                  title="Claim about a Post"
                  onClick={() => openConfirmation()}
                >
                  <i className="fa fa-cog fa-fw" aria-hidden="true" />
                </a>
              </div>

            </div>
            <div className="product-detail">
              <div>
                <small>comments (10)</small>

                <a href="product-page(no-sidebar).html">
                  <h6>Posted in {props.post.event_id}</h6>
                  <small>{formatDate(props.post.date_creation)}</small>
                </a>
                <p>{props.post.description}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Posts;
