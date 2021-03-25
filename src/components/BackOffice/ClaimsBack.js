import React from "react";
const ClaimBack = () => {
  return (
    <>
      <div style={{ marginLeft: 250 }} className="page-wrapper">
        <div class="page-body-wrapper">
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
                        <div className="dataTables_length" id="basic-1_length">
                          <label>
                            Show{" "}
                            <select
                              name="basic-1_length"
                              aria-controls="basic-1"
                              className
                            >
                              <option value={10}>10</option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                        <div id="basic-1_filter" className="dataTables_filter">
                          <label>
                            Search:
                            <input
                              type="search"
                              className
                              placeholder
                              aria-controls="basic-1"
                            />
                          </label>
                        </div>
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
                                style={{ width: 87 }}
                                class="jsgrid-header-cell jsgrid-align-center"
                              >
                                <button
                                  type="button"
                                  class="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
                                >
                                  Delete
                                </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                              <td className="sorting_1">#51240</td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="../assetsBack/images/electronics/product/25.jpg"
                                    alt="img"
                                    className="img-fluid img-30 me-2 blur-up lazyloaded"
                                  />
                                  <img
                                    src="../assetsBack/images/electronics/product/13.jpg"
                                    alt="img"
                                    className="img-fluid img-30 me-2 blur-up lazyloaded"
                                  />
                                  <img
                                    src="../assetsBack/images/electronics/product/16.jpg"
                                    alt="img"
                                    className="img-fluid img-30 blur-up lazyloaded"
                                  />
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-secondary">
                                  Cash On Delivery
                                </span>
                              </td>
                              <td>Paypal</td>
                              <td>
                                <span className="badge badge-success">
                                  Delivered
                                </span>
                              </td>
                              <td>Dec 10,18</td>
                              <td>$54671</td>
                              <td
                                class="jsgrid-cell jsgrid-align-center"
                                style={{ width: 50 }}
                              >
                                <input
                                  style={{ width: 90 }}
                                  type="checkbox"
                                ></input>
                              </td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">#51241</td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="../assetsBack/images/electronics/product/12.jpg"
                                    alt="img"
                                    className="img-fluid img-30 me-2 blur-up lazyloaded"
                                  />
                                  <img
                                    src="../assetsBack/images/electronics/product/3.jpg"
                                    alt="img"
                                    className="img-fluid img-30 blur-up lazyloaded"
                                  />
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-success">
                                  Paid
                                </span>
                              </td>
                              <td>Master Card</td>
                              <td>
                                <span className="badge badge-primary">
                                  Shipped
                                </span>
                              </td>
                              <td>Feb 15,18</td>
                              <td>$2136</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">#51242</td>
                              <td>
                                <img
                                  src="../assetsBack/images/electronics/product/14.jpg"
                                  alt="img"
                                  className="img-fluid img-30 blur-up lazyloaded"
                                />
                              </td>
                              <td>
                                <span className="badge badge-warning">
                                  Awaiting Authentication
                                </span>
                              </td>
                              <td>Debit Card</td>
                              <td>
                                <span className="badge badge-warning">
                                  Processing
                                </span>
                              </td>
                              <td>Mar 27,18</td>
                              <td>$8791</td>
                            </tr>
                            <tr role="row" className="even">
                              <td className="sorting_1">#51243</td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="../assetsBack/images/electronics/product/6.jpg"
                                    alt="img"
                                    className="img-fluid img-30 me-2 blur-up lazyloaded"
                                  />
                                  <img
                                    src="../assetsBack/images/furniture/8.jpg"
                                    alt="img"
                                    className="img-fluid img-30 blur-up lazyloaded"
                                  />
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-danger">
                                  Payment Failed
                                </span>
                              </td>
                              <td>Master Card</td>
                              <td>
                                <span className="badge badge-danger">
                                  Cancelled
                                </span>
                              </td>
                              <td>Sep 1,18</td>
                              <td>$139</td>
                            </tr>
                            <tr role="row" className="odd">
                              <td className="sorting_1">#51244</td>
                              <td>
                                <div className="d-flex">
                                  <img
                                    src="../assetsBack/images/jewellery/pro/18.jpg"
                                    alt="img"
                                    className="img-fluid img-30 me-2 blur-up lazyloaded"
                                  />
                                  <img
                                    src="../assetsBack/images/fashion/pro/06.jpg"
                                    alt="img"
                                    className="img-fluid img-30 blur-up lazyloaded"
                                  />
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-success">
                                  Paid
                                </span>
                              </td>
                              <td>Paypal</td>
                              <td>
                                <span className="badge badge-primary">
                                  Shipped
                                </span>
                              </td>
                              <td>May 18,18</td>
                              <td>$4678</td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className="dataTables_info"
                          id="basic-1_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 25 of 57 entries
                        </div>
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="basic-1_paginate"
                        >
                          <a
                            className="paginate_button previous disabled"
                            aria-controls="basic-1"
                            data-dt-idx={0}
                            tabIndex={0}
                            id="basic-1_previous"
                          >
                            Previous
                          </a>
                          <span>
                            <a
                              className="paginate_button current"
                              aria-controls="basic-1"
                              data-dt-idx={1}
                              tabIndex={0}
                            >
                              1
                            </a>
                            <a
                              className="paginate_button "
                              aria-controls="basic-1"
                              data-dt-idx={2}
                              tabIndex={0}
                            >
                              2
                            </a>
                            <a
                              className="paginate_button "
                              aria-controls="basic-1"
                              data-dt-idx={3}
                              tabIndex={0}
                            >
                              3
                            </a>
                          </span>
                          <a
                            className="paginate_button next"
                            aria-controls="basic-1"
                            data-dt-idx={4}
                            tabIndex={0}
                            id="basic-1_next"
                          >
                            Next
                          </a>
                        </div>
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
