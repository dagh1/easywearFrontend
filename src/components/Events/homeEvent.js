import React, { Component } from 'react';
import {Card , CardImg, CardImgOverlay, CardTitle , Breadcrumb , BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import { fetchEvents } from '../../redux/slices/eventSlice';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';




const mapStateToProps = state => ({
    events: state.eventSlice.events
});

const mapDispatchToProps = dispatch => ({

    fetchEvents: () => dispatch(fetchEvents())
});



class HomeEvent extends Component {

    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.fetchEvents();
    }
    

    render(){

        const RenderEventDetails = ({ event }) => {
            return (
                
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
                              <h6> opening date : {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(event.date_debut)))}</h6><a href="#">
                                  <h4>{event.eventName}</h4>
                              </a>
                              <ul class="post-social">
                                  <li>Posted By : {event.user_id}</li>
                                  <li><i class="fa fa-comments"></i> 10 Posts</li>
                              </ul>
                              <p>{event.description}</p>
                          </div>
                        </div>
                        </div>
                        </div>
            );
        }

        const RenderEvent = (props) =>{
            const list_events = this.props.events.map((event) => {
                console.log(event);
                return(
                <div key={event.id}>
                    <RenderEventDetails event={event} />
                    <br/>
                </div>
                );
            });
    
            return(
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
                        {list_events}
                        </div>
                    </div>
                </div>
                </section>
            );
        }

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
                <RenderEvent />
            </>
        );

    }


}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeEvent));