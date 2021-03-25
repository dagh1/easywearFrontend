import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/slices/postSlice";
import Posts from "../Posts/posts";

const UserPosts = () => {
  const [posts, err] = useSelector(selectPosts);

  return (
    <>
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
                  {/* HERE POSTS*/}
                  {posts?.map((post, index) => {
                    return <Posts post={post} key={index} />;
                  })}
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
