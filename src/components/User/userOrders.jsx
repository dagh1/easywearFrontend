import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/slices/postSlice";
import Posts from "../Posts/posts";
import { formatDate } from "../../helpers/dateConvert";
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
const UserOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  const [posts, err] = useSelector(selectOrders);
  //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 8;
  const pageVisited = pageNumber * postsPerPage;
  const displayedPosts = posts.slice(pageVisited, pageVisited + postsPerPage);
  const pageCount = Math.ceil(posts.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const openConfirmation = async (order) => {
    if (window.confirm("are you sure you want to delete?") === true) {
      console.log("delete");
      console.log(order);
      deleteOrderEvent(order._id);
    }
  };
  const deleteOrderEvent = async (id) => {
    const [res, err] = await queryApi("order/deleteOrder/" + id, {}, "DELETE");
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deleteOrder(id));
      //dispatch(fetchOrders());
    }
  };
  //Search
  const [search, setsearch] = useState(null);

  const searchSpace = async (event) => {
    let keyword = event.target.value;
    setsearch(keyword);
  };
  const items = displayedPosts.filter((data) => {
    if (search === null) return data;
    else if (data.title.toLowerCase().includes(search.toLowerCase())) {
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
                              style={{ width: 215 }}
                            >
                              Reference
                            </th>

                            <th
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Payment Status: activate to sort column ascending"
                              style={{ width: 93 }}
                            >
                              Price
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
                              Description
                            </th>

                            <th
                              className="jsgrid-header-cell"
                              tabIndex={0}
                              aria-controls="basic-1"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Date: activate to sort column ascending"
                              style={{ width: 150 }}
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
                                <div className="d-flex">{data.reference}</div>
                              </td>
                              <td className="jsgrid-cell jsgrid-align-center">
                                {data.total}
                              </td>
                              <td className="jsgrid-cell jsgrid-align-center">
                                <Link
                                  to={{
                                    pathname:
                                      "/productDetails/" + data.products[0]._id,
                                    id: data._id,
                                  }}
                                >
                                  {data.products[0].productName}{" "}
                                </Link>
                              </td>

                              <td className="jsgrid-cell jsgrid-align-center ">
                                {formatDate(data.date_creation)}
                              </td>

                              <td
                                className="jsgrid-cell jsgrid-align-center"
                                style={{ width: 50 }}
                              >
                                <a
                                  className="btn btn-solid btn-sm"
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
                {/* pagination */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrders;
