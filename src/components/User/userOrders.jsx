import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Icon from "react-feather";
import { formatDate } from "../../helpers/dateConvert";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import {
  selectOrders,
  addOrder,
  deleteOrder,
  setErrors,
  selectOrder,
  fetchOrders,
  selectSelectedOrders,
  updateOrder,
  unselectOrder,
} from "../../redux/slices/orderSlice";
import { Link, useHistory, useParams } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const OrderOrders = () => {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const selectedOrder = useSelector(selectSelectedOrders);

  const [posts, err] = useSelector(selectOrders);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteOrderEvent = async (id) => {
    const [res, err] = await queryApi("order/delete/" + id, {}, "DELETE");
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deleteOrder(id));
      dispatch(fetchOrders());
    }
  };

  const FindOneOrderEvent = async (prod) => {
    handleShow();
    dispatch(selectOrder(prod));
  };
  const [orderState, setorderState] = useState(selectedOrder);

  const handleSubmit1 = async (evt) => {
    evt.preventDefault();

    const [res, err] = await queryApi(
      "order/validateOrder/" + selectedOrder._id,
      { state: Number(orderState) },
      "PUT"
    );
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(updateOrder(res));
      dispatch(unselectOrder());

      dispatch(fetchOrders());
      handleClose();
    }
  };
  const openConfirmation = async (order) => {
    if (window.confirm("are you sure you want to delete?") === true) {
      console.log("delete");
      console.log(order);
      deleteOrderEvent(order._id);
    }
  };
  //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const ordersperPage = 4;
  const pageVisited = pageNumber * ordersperPage;
  const displayedOrders = posts.slice(pageVisited, pageVisited + ordersperPage);
  const pageCount = Math.ceil(posts.length / ordersperPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [search, setsearch] = useState(null);

  const searchSpace = async (event) => {
    let keyword = event.target.value;
    setsearch(keyword);
  };
  const items = displayedOrders.filter((data) => {
    if (search == null) return data;
    else if (
      data.first_name.toLowerCase().includes(search.toLowerCase()) ||
      data.last_name.toLowerCase().includes(search.toLowerCase()) ||
      data.email.toLowerCase().includes(search.toLowerCase()) ||
      data.role.toLowerCase().includes(search.toLowerCase())
    ) {
      return data;
    }
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Manage Orders</title>
      </Helmet>
      <div style={{ marginLeft: 250 }} className="page-wrapper">
        <div className="page-body-wrapper">
          {/* Container-fluid starts*/}
          <div className="container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-lg-6">
                  <div className="page-header-left">
                    <h3>
                      Orders
                      <small>Manage Orders</small>
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
                    <li className="breadcrumb-item active">Orders</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Container-fluid Ends*/}
          {/* Container-fluid starts*/}
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <br></br>
                  <div>
                    <Link
                      to="/addOrderBack"
                      class="btn btn-secondary"
                      style={{ marginLeft: "2%" }}
                    >
                      Create Order
                    </Link>

                    <div className="nav-right col-3 offset-9">
                      <div>
                        <input
                          type="text"
                          placeholder="Search.."
                          className="form-control"
                          onChange={(e) => searchSpace(e)}
                        />
                      </div>
                    </div>
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
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Order Id: activate to sort column descending"
                              style={{ width: 93 }}
                            >
                              Picture
                            </th>
                            <th
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Product: activate to sort column ascending"
                              style={{ width: 160 }}
                            >
                              Name
                            </th>
                            <th
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Payment Status: activate to sort column ascending"
                              style={{ width: 215 }}
                            >
                              Birthday
                            </th>
                            <th
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Payment Method: activate to sort column ascending"
                              style={{ width: 178 }}
                            >
                              Phone Number
                            </th>
                            <th
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Order Status: activate to sort column ascending"
                              style={{ width: 138 }}
                            >
                              Gender
                            </th>
                            <th
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Date: activate to sort column ascending"
                              style={{ width: 109 }}
                            >
                              Creation Date
                            </th>
                            <th
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Total: activate to sort column ascending"
                              style={{ width: 87 }}
                            >
                              Role
                            </th>
                            <th
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Total: activate to sort column ascending"
                              style={{ width: 107 }}
                            ></th>
                          </tr>
                        </thead>
                        {/* jsgrid-alt-row odd */}
                        <tbody>
                          {items.map((data, index) => (
                            <tr
                              key={index}
                              role="row"
                              className={
                                index % 2 === 0
                                  ? "jsgrid-row"
                                  : "jsgrid-alt-row"
                              }
                              style={{
                                backgroundColor:
                                  index % 2 === 0 ? "white" : "none",
                              }}
                            >
                              <td>
                                <div className="d-flex">
                                  <img
                                    src={data.image_url}
                                    alt="img"
                                    className="img-fluid img-30 me-2 blur-up lazyloaded"
                                  />
                                </div>
                              </td>
                              <td className="jsgrid-cell jsgrid-align-center">
                                <Link
                                  to={{
                                    pathname: "/editOrderBack",
                                    id: data._id,
                                  }}
                                >
                                  {data.first_name} {data.last_name}{" "}
                                </Link>
                              </td>
                              <td className="jsgrid-cell jsgrid-align-center">
                                {formatDate(data.date_naissance)}
                              </td>
                              <td className="jsgrid-cell jsgrid-align-center">
                                {data.numero_tel}
                              </td>
                              <td className="jsgrid-cell jsgrid-align-center">
                                {data.gender}
                              </td>

                              <td className="jsgrid-cell jsgrid-align-center">
                                {formatDate(data.date_creation)}
                              </td>
                              <td className="jsgrid-cell jsgrid-align-center">
                                {data.role}
                              </td>
                              <td
                                className="jsgrid-cell jsgrid-align-center"
                                style={{ width: 50 }}
                              >
                                <a
                                  className="btn btn-primary"
                                  onClick={() => openConfirmation(data)}
                                >
                                  Delete
                                </a>
                                <br></br>

                                {/* <button
                                  type="button"
                                  className="btn btn-primary"
                                  data-bs-toggle="modal"
                                  data-original-title="test"
                                  data-bs-target="#exampleModal"
                                  onClick={() => FindOneOrderEvent(data)}
                                ></button> */}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                      ></ReactPaginate>
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
    </>
  );
};
export default OrderOrders;
