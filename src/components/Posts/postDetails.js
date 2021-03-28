import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedPosts } from "./../../redux/slices/postSlice";
import { formatDate } from "../../helpers/dateConvert";
import { useHistory } from "react-router";
import { queryApi } from "../../utils/queryApi";

const PostDetails = (props) => {
  const selectedPost = useSelector(selectSelectedPosts);
  const [post, setPost] = useState({});
  const history = useHistory();
  useEffect(() => {
    async function fetchPost() {
      const [res, err] = await queryApi(
        "post/" + props.match.params.id,
        {},
        "GET"
      );
      setPost(res);
    }
    fetchPost();
  });
  return (
    <>
      <div className='breadcrumb-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='page-title'>
                <h2>blog details</h2>
              </div>
            </div>
            <div className='col-sm-6'>
              <nav aria-label='breadcrumb' className='theme-breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home / event / post details</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className='blog-detail-page section-b-space ratio2_3'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 blog-detail'>
              <h3>{post.title}</h3>
              <ul className='post-social'>
                <li>{formatDate(post.date_creation)}</li>
                <li>Posted By : Admin Admin</li>
                <li>
                  <i className='fa fa-heart' /> 5 Hits
                </li>
                <li>
                  <i className='fa fa-comments' /> 10 Comment
                </li>
              </ul>
              <p>{post.description}</p>
            </div>
          </div>
          <div className='row section-b-space blog-advance'>
            <div className='col-lg-6'>
              <div
                className='bg-size blur-up lazyloaded'
                style={{
                  backgroundImage: `url(${post.image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  display: "block",
                }}
              >
                <img
                  src={post.image_url}
                  className='img-fluid blur-up lazyload bg-img'
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          <div className='row section-b-space'>
            <div className='col-sm-12'>
              <ul className='comment-section'>
                <li>
                  <div className='media'>
                    <img src={post.image_url} alt='Generic placeholder image' />
                    <div className='media-body'>
                      <h6>
                        Mark Jecno <span>( 12 Jannuary 2018 at 1:30AM )</span>
                      </h6>
                      <p>
                        Donec rhoncus massa quis nibh imperdiet dictum.
                        Vestibulum id est sit amet felis fringilla bibendum at
                        at leo. Proin molestie ac nisi eu laoreet. Integer
                        faucibus enim nec ullamcorper tempor. Aenean nec felis
                        dui. Integer tristique odio mi, in volutpat metus
                        posuere eu. Aenean suscipit ipsum nunc, id volutpat
                        lorem hendrerit ac. Sed id elit quam. In ac mauris arcu.
                        Praesent eget lectus sit amet diam vestibulum varius.
                        Suspendisse dignissim mattis leo, nec facilisis erat
                        tempor quis. Vestibulum eu vestibulum ex.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='row blog-contact'>
            <div className='col-sm-12'>
              <h2>Leave Your Comment</h2>
              <form className='theme-form'>
                <div className='form-row'>
                  <div className='col-md-12'>
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Enter Your name'
                      required
                    />
                  </div>
                  <div className='col-md-12'>
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
                    <label htmlFor='exampleFormControlTextarea1'>Comment</label>
                    <textarea
                      className='form-control'
                      placeholder='Write Your Comment'
                      id='exampleFormControlTextarea1'
                      rows={6}
                      defaultValue={""}
                    />
                  </div>
                  <div className='col-md-12'>
                    <button className='btn btn-solid' type='submit'>
                      Post Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
