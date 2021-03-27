import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Icon from "react-feather";

import { addClaim, fetchClaims } from "../../redux/slices/claimSlice";
import { useHistory, useParams } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
const AddClaim = () => {
  const yupSchema = Yup.object({
    description: Yup.string()
      .min(3, "Minimum 3 caractéres")
      .max(80, "Maximum 80 caractéres"),
  });
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const [error, setError] = useState({ visible: false, message: "" });
  const formik = useFormik({
    initialValues: {
      type: "",
      description: "",

      image_url: "",
      state: 1,
      user_id: "6042082f471163107c3ca589",
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      setShowLoader(true);
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
      <div className="container">
        <div className="row partition-collection">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="validationCustom0" className="col-xl-3 col-md-4">
                <span>*</span> Type Claim
              </label>
              <div className="col-xl-8 col-md-7">
                <select
                  value={formik.values.type}
                  name="type"
                  id="type"
                  onChange={formik.handleChange}
                >
                  <option value="comment">comment claim</option>
                  <option value="product">Product Claim</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="validationCustom1" className="col-xl-3 col-md-4">
                <span>*</span> Description
              </label>
              <div className="col-xl-8 col-md-7">
                <input
                  className="form-control"
                  name="description"
                  id="description"
                  type="text"
                  required
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
                {formik.errors.description && formik.touched.description && (
                  <FormError>{formik.errors.description}</FormError>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="validationCustom2" className="col-xl-3 col-md-4">
                <span>*</span> image url
              </label>
              <div className="col-xl-8 col-md-7">
                <input
                  className="form-control"
                  type="text"
                  required
                  name="image_url"
                  id="image_url"
                  value={formik.values.image_url}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className="pull-right">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddClaim;
const FormError = styled.p`
  color: #f74b1b;
`;
