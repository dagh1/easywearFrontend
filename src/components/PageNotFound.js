import React from "React";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <div>
                <div className="breadcrumb-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="page-title">
                                    <h2>404 page</h2>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <nav aria-label="breadcrumb" className="theme-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            404 page
                    </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="error-section">
                                    <h1>404</h1>
                                    <h2>page not found</h2>
                                    <Link to="/home" className="btn btn-solid">
                                        Back to Home
                  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default PageNotFound;
