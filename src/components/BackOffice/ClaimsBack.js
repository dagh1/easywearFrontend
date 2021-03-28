import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Icon from "react-feather";
import { formatDate } from "../../helpers/dateConvert";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
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
  const [show, setShow] = useState(false);

  const selectedClaim = useSelector(selectSelectedClaim);

  const [posts, err] = useSelector(selectClaims);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    handleShow();
    dispatch(selectClaim(prod));
  };
  const [claimState, setclaimState] = useState(selectedClaim);

  const handleSubmit1 = async (evt) => {
    evt.preventDefault();

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
      handleClose();
    }
  };
  const openConfirmation = async (claim) => {
    if (window.confirm("are you sure you want to delete?") === true) {
      deleteClaimEvent(claim._id);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Claim..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit1}>
            <Container>
              <Row>
                <Image src="https://picsum.photos/200" fluid />
              </Row>
            </Container>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Claim Type :</Form.Label>
              <Form.Control placeholder={selectedClaim?.type} readOnly />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Claim Date :</Form.Label>
              <Form.Control
                placeholder={formatDate(selectedClaim?.date_claim)}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formGriddescription">
              <Form.Label>Description :</Form.Label>

              <Form.Control
                type="text"
                name="description"
                id="description"
                required
                minLength="5"
                defaultValue={selectedClaim?.description}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formGridstate">
              <Form.Label>Claim State :</Form.Label>
              {(() => {
                if (selectedClaim?.state === 1) {
                  return (
                    <>
                      <div className="form-control">Not Treated Yet</div>
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
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridStateee">
                {(() => {
                  if (selectedClaim?.state === 1) {
                    return (
                      <>
                        <select onChange={(e) => setclaimState(e.target.value)}>
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
                        <select onChange={(e) => setclaimState(e.target.value)}>
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
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {(() => {
              if (selectedClaim?.state === 1 || selectedClaim?.state === 2) {
                return (
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                );
              } else {
                return <></>;
              }
            })()}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

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
                                    if (prod.type === "post") {
                                      return (
                                        <span className="badge badge-primary">
                                          Post Claim
                                        </span>
                                      );
                                    } else if (prod.type === "comment") {
                                      return (
                                        <span className="badge badge-danger">
                                          Comment claim
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
                                <td>{formatDate(prod.date_claim)}</td>
                                <td>{prod.description}</td>
                                <td
                                  className="jsgrid-cell jsgrid-align-center"
                                  style={{ width: 50 }}
                                >
                                  <a
                                    className="btn btn-secondary"
                                    onClick={() => openConfirmation(prod)}
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
