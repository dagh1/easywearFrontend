import React, { Component } from 'react';
import {Card , CardImg, CardImgOverlay, CardTitle , Breadcrumb , BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



function RenderEventItem ({events , onClick }){
    return(
        <Card>
            
                <CardImg />
                <CardImgOverlay>
                    <CardTitle></CardTitle>
                </CardImgOverlay>
            
        </Card>
    );
}


      /*  const listEvents = props.dishes.dishes.map((dish) => {
            return(
                <div key={} className="col-12 col-md-5 m-1">
                   <RenderEventItem events={events} />
                </div>
            );
        });*/

        const HomeEvent = (props) => {
            return(
                <>
                  <div class="breadcrumb-section">
                      <div class="container">
                      <div className="row">
                              <Breadcrumb>
                                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                  <BreadcrumbItem active>Events</BreadcrumbItem>
                              </Breadcrumb>
                              <div className="col-12">
                                  <h3>Events</h3>
                                  <hr />
                              </div>
                          </div>
                      </div>
                  </div>
  
                  <section class="section-b-space blog-page ratio2_3">
                      <div class="container">
                          <div class="row">
                          
                              <div class="col-xl-3 col-lg-4 col-md-5">
                                  <div class="blog-sidebar">
                                      <div class="theme-card">
                                          <h4>Recent Events</h4>
                                      </div>
                                      <div class="theme-card">
                                          <h4>Popular Events</h4>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-xl-9 col-lg-8 col-md-7 order-sec">
                              <div class="row blog-media">
                                    <div class="col-xl-6">
                                        <div class="blog-left">
                                            <a href="#"><img src="../assets/images/blog/1.jpg"
                                                    class="img-fluid blur-up lazyload bg-img" alt=""/>
                                                </a>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                            <div class="blog-right">
                                <div>
                                    <h6>25 January 2018</h6><a href="#">
                                        <h4>you how all this mistaken idea of denouncing pleasure and praising pain was
                                            born.</h4>
                                    </a>
                                    <ul class="post-social">
                                        <li>Posted By : Admin Admin</li>
                                        <li><i class="fa fa-heart"></i> 5 Hits</li>
                                        <li><i class="fa fa-comments"></i> 10 Comment</li>
                                    </ul>
                                    <p>Consequences that are extremely painful. Nor again is there anyone who loves or
                                        pursues or desires to obtain pain of itself, because it is pain, but because
                                        occasionally circumstances occur in which toil and pain can procure him some
                                        great pleasure.</p>
                                </div>
                            </div>
                        </div>
                              </div>
                            </div>
                          </div>
                      </div>
                  </section>
  
                </>
            );

        }
          


export default HomeEvent;