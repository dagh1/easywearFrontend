import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { addPost } from "../../redux/slices/postSlice";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { queryApi } from "../../utils/queryApi";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState({ visible: false, message: "" });
  const yupObject = Yup.object().shape({
    title: Yup.string().required().max(30),
    description: Yup.string().required().max(255),
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image_url: "",
      user_id: "",
      event_id: "",
    },
    validationSchema: yupObject,
    onSubmit: async (values) => {
      values.image_url = "https://picsum.photos/200";
      values.user_id = "6041f2fe9dbc16c1758d7a9a";
      values.event_id = "6041f2fe9dbc16c1758d7a9b";
      const [res, err] = await queryApi("post", values, "POST");
      if (err) {
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else {
        dispatch(addPost(res));
        history.push("/user/profile");
      }
    },
  });
  return (
    <>
      <div className='AddPostForm login-page section-b-space mt-5'>
        <div className='col-lg-6'>
          <h3>Share a new Post to (event)</h3>
          <div className='theme-card'>
            <form className='theme-form' onSubmit={formik.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input
                  type='text'
                  className='form-control'
                  name='title'
                  id='title'
                  placeholder='Title'
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
                {formik.errors.title && formik.touched.title && (
                  <span>{formik.errors.title}</span>
                )}
              </div>

              <div className='form-group'>
                <label htmlFor='description'>description</label>
                <textarea
                  type='text'
                  className='form-control'
                  id='description'
                  name='description'
                  placeholder='description'
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
                {formik.errors.description && formik.touched.description && (
                  <span>{formik.errors.description}</span>
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='image'>image</label>
                <input
                  type='file'
                  className='form-control'
                  name='image_url'
                  id='image_url'
                  placeholder='Image'
                />
              </div>

              <button
                disabled={formik.isSubmitting}
                type='submit'
                className='btn btn-solid'
              >
                Share Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPostForm;
