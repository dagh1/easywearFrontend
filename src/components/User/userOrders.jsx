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

const UserOrders = () => {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const selectedOrder = useSelector(selectSelectedOrders);

  const [posts, err] = useSelector(selectOrders);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
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
      <input
        style={{ width: 400, height: 40 }}
        type="text"
        placeholder="Search.."
        onChange={(e) => searchSpace(e)}
        className="form-control"
      />
      <div className="collection-wrapper">
        <div className="collection-content ratio_asos">
          <div className="page-main-content">
            <div className="row">
              <div className="col-xl-12">
                <div className="filter-main-btn">
                  <span className="filter-btn btn btn-theme">
                    <i className="fa fa-filter" aria-hidden="true" /> Filter
                  </span>
                </div>
              </div>
            </div>
            <div className="collection-product-wrapper">
              <div className="product-wrapper-grid">
                <div className="row">
                  {/* HERE POSTS*/}
                  hahah
                </div>
                {pageCount > 1 ? (
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
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserOrders;
