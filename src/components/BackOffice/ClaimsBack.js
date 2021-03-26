import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Icon from "react-feather";
import {
  selectClaims,
  addClaim,
  deleteClaim,
  setErrors,
  selectClaim,
  fetchClaims,
  selectSelectedClaim,
  updateStateClaim,
  unselectClaim,
} from "../../redux/slices/claimSlice";
import { useHistory, useParams } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const ClaimBack = () => {
  const { id } = useParams();
  const history = useHistory();
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const selectedClaim = useSelector(selectSelectedClaim);

  const yupSchema = Yup.object({
    description: Yup.string()
      .min(3, "Minimum 3 caractéres")
      .max(80, "Maximum 80 caractéres"),
  });
  const [posts, err] = useSelector(selectClaims);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      type: "",
      description: "",
      date_claim: "2021-02-01T23:00:00.000+00:00",
      image_url: "",
      state: 1,
      user_id: "6042082f471163107c3ca589",
    },
    validationSchema: yupSchema,
  });
  const deleteClaimEvent = async (id) => {
    const [res, err] = await queryApi("claim/delete/" + id, {}, "DELETE");
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deleteClaim(id));
      dispatch(fetchClaims());
    }
  };

  const FindOneClaimEvent = async (prod) => {
    dispatch(selectClaim(prod));
  };
  const [claimState, setclaimState] = useState(selectedClaim);

  const handleSubmit1 = async (evt) => {
    evt.preventDefault();
    console.log(selectedClaim._id);
    const [res, err] = await queryApi(
      "claim/validateClaim/" + selectedClaim._id,
      { state: Number(claimState) },
      "PUT"
    );
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(updateStateClaim(res));
      dispatch(unselectClaim());
      dispatch(fetchClaims());
    }
  };

  return (
    <>
      <div className="btn-popup pull-right">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title f-w-600" id="exampleModalLabel">
                  Treat Claims
                </h5>
                <button
                  id="closeurself"
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form className="needs-validation" onSubmit={handleSubmit1}>
                <div className="modal-body">
                  <div className="form">
                    <div className="form-group">
                      <label htmlFor="validationCustom01" className="mb-1">
                        Claim Image :
                      </label>
                      <div className="form-control">
                        {selectedClaim?.image_url}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="validationCustom01" className="mb-1">
                        Claim Type :
                      </label>
                      <div className="form-control">{selectedClaim?.type}</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="validationCustom01" className="mb-1">
                        Claim Details :
                      </label>
                      <div className="form-control">
                        {selectedClaim?.description}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="validationCustom01" className="mb-1">
                        Claim State :
                      </label>

                      {(() => {
                        if (selectedClaim?.state === 1) {
                          return (
                            <>
                              <div className="form-control">
                                Not Treated Yet
                              </div>
                            </>
                          );
                        } else if (selectedClaim?.state === 2) {
                          return (
                            <>
                              <div className="form-control">Processing</div>
                            </>
                          );
                        } else {
                          return (
                            <>
                              <div className="form-control">Closed Claim</div>
                            </>
                          );
                        }
                      })()}
                    </div>

                    {(() => {
                      if (selectedClaim?.state === 1) {
                        return (
                          <>
                            <select
                              onChange={(e) => setclaimState(e.target.value)}
                            >
                              <option value={selectedClaim?.state}>
                                Not Treated Yet
                              </option>
                              <option value="2">Processing</option>
                              <option value="3">Close Claim</option>
                            </select>
                          </>
                        );
                      } else if (selectedClaim?.state === 2) {
                        return (
                          <>
                            <select
                              onChange={(e) => setclaimState(e.target.value)}
                            >
                              <option value={selectedClaim?.state}>
                                Processing
                              </option>
                              <option value="2">Processing</option>
                              <option value="3">Close Claim</option>
                            </select>
                          </>
                        );
                      } else {
                        return <></>;
                      }
                    })()}
                  </div>
                </div>
                <div data-bs-target="#closeurself" className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: 250 }} className="page-wrapper">
        <div className="page-body-wrapper">
          <div className="page-body">
            {/* Container-fluid starts*/}
            <div className="container-fluid">
              <div className="page-header">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="page-header-left">
                      <h3>
                        Claims
                        <small>Multikart Admin panel</small>
                      </h3>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <ol className="breadcrumb pull-right">
                      <li className="breadcrumb-item">
                        <a href="index.html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                        </a>
                      </li>
                      <li className="breadcrumb-item">DashBoard</li>
                      <li className="breadcrumb-item active">Claims</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="nav nav-tabs tab-coupon" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link show active"
                    id="account-tab"
                    data-bs-toggle="tab"
                    href="#account"
                    role="tab"
                    aria-controls="account"
                    aria-selected="true"
                    data-original-title
                    title
                  >
                    Account
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <h4>Account Details</h4>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group row">
                    <label
                      htmlFor="validationCustom0"
                      className="col-xl-3 col-md-4"
                    >
                      <span>*</span> Type Claim
                    </label>
                    <div className="col-xl-8 col-md-7">
                      <input
                        className="form-control"
                        name="type"
                        id="type"
                        type="text"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="validationCustom1"
                      className="col-xl-3 col-md-4"
                    >
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
                      {formik.errors.description &&
                        formik.touched.description && (
                          <FormError>{formik.errors.description}</FormError>
                        )}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="validationCustom2"
                      className="col-xl-3 col-md-4"
                    >
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
                  <div className="form-group row">
                    <label
                      htmlFor="validationCustom3"
                      className="col-xl-3 col-md-4"
                    >
                      <span>*</span> State
                    </label>
                    <div className="col-xl-8 col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        required
                        name="state"
                        id="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="validationCustom4"
                      className="col-xl-3 col-md-4"
                    >
                      <span>*</span> User
                    </label>
                    <div className="col-xl-8 col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        required
                        name="user_id"
                        id="user_id"
                        value={formik.values.user_id}
                        onChange={formik.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="validationCustom4"
                      className="col-xl-3 col-md-4"
                    >
                      <span>*</span> Date
                    </label>
                    <div className="col-xl-8 col-md-7">
                      <input
                        className="form-control"
                        name="date_claim"
                        id="date_claim"
                        required
                        value={formik.values.date_claim}
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
            {/* Container-fluid Ends*/}
            {/* Container-fluid starts*/}
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h5>Manage Claims</h5>
                    </div>

                    <div className="card-body order-datatable">
                      <div
                        id="basic-1_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          className="display dataTable no-footer"
                          id="basic-1"
                          role="grid"
                          aria-describedby="basic-1_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc"
                                tabIndex={0}
                                aria-controls="basic-1"
                                rowSpan={1}
                                colSpan={1}
                                aria-sort="ascending"
                                aria-label="Order Id: activate to sort column descending"
                                style={{ width: 93 }}
                              >
                                Claim Id
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="basic-1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Product: activate to sort column ascending"
                                style={{ width: 160 }}
                              >
                                Picture
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="basic-1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Payment Status: activate to sort column ascending"
                                style={{ width: 215 }}
                              >
                                Claim Status
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="basic-1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Payment Method: activate to sort column ascending"
                                style={{ width: 178 }}
                              >
                                Claimer Name
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="basic-1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Order Status: activate to sort column ascending"
                                style={{ width: 138 }}
                              >
                                Claim type
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="basic-1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Date: activate to sort column ascending"
                                style={{ width: 109 }}
                              >
                                Date
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="basic-1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Total: activate to sort column ascending"
                                style={{ width: 87 }}
                              >
                                Details
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="basic-1"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Total: activate to sort column ascending"
                                style={{ width: 107 }}
                              >
                                treat
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {posts?.map((prod, index) => (
                              <tr key={index} role="row" className="odd">
                                <td className="sorting_1">{prod._id}</td>
                                <td>
                                  <div className="d-flex">
                                    <img
                                      src={prod.image_url}
                                      alt="img"
                                      className="img-fluid img-30 me-2 blur-up lazyloaded"
                                    />
                                  </div>
                                </td>
                                <td>
                                  {(() => {
                                    if (prod.state === 1) {
                                      return (
                                        <span className="badge badge-primary">
                                          Not Treated Yet
                                        </span>
                                      );
                                    } else if (prod.state === 2) {
                                      return (
                                        <span className="badge badge-warning">
                                          Processing
                                        </span>
                                      );
                                    } else {
                                      return (
                                        <span className="badge badge-success">
                                          Treated
                                        </span>
                                      );
                                    }
                                  })()}
                                </td>
                                <td>{prod.user_id}</td>
                                <td>
                                  {(() => {
                                    if (prod.type === "Post") {
                                      return (
                                        <span className="badge badge-primary">
                                          Post Claim
                                        </span>
                                      );
                                    } else if (prod.type === "Event") {
                                      return (
                                        <span className="badge badge-danger">
                                          Event claim
                                        </span>
                                      );
                                    } else {
                                      return (
                                        <span className="badge badge-secondary">
                                          Product Claim
                                        </span>
                                      );
                                    }
                                  })()}
                                </td>
                                <td>{prod.date_claim}</td>
                                <td>{prod.description}</td>
                                <td
                                  className="jsgrid-cell jsgrid-align-center"
                                  style={{ width: 50 }}
                                >
                                  <a
                                    className="btn btn-secondary"
                                    onClick={() => deleteClaimEvent(prod._id)}
                                  >
                                    <Icon.Delete />
                                  </a>
                                  <br></br>

                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-original-title="test"
                                    data-bs-target="#exampleModal"
                                    onClick={() => FindOneClaimEvent(prod)}
                                  >
                                    <Icon.Edit3 />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="basic-1_paginate"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Container-fluid Ends*/}
          </div>
        </div>
      </div>
    </>
  );
};
export default ClaimBack;
const FormError = styled.p`
  color: #f74b1b;
`;
