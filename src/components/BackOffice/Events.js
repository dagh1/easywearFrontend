import React , { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, ListEvents } from '../../redux/slices/eventSlice';




const Events = () => {

  const dispatch = useDispatch();
  const events = useSelector(ListEvents);

    useEffect(()=>{
        dispatch(fetchEvents());
    }, []);
    



  return (
    <>
      <div style={{ marginLeft: 250 }} className="page-wrapper">
        <div class="page-body-wrapper">
          <div className="page-body">
          <div className="container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-lg-6">
                  <div className="page-header-left">
                    <h3>
                      Events
                      <small>Event Manage</small>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ol className="breadcrumb pull-right">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={5}
                          height={5}
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
                    <li className="breadcrumb-item active">Events</li>
                  </ol>
                </div>
                
              </div>
            </div>
            <div>
            <a className="btn btn-success" style={{ marginLeft:'1010px', paddingLeft:'25px',paddingRight:'25px'}} href="#">
                    <i className="fas fa-edit"></i>&nbsp;Add Event
                </a>
                <br/>
            </div>
            <div style={{ marginTop: '10px'}}>
            <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Event Name</th>
                            <th scope="col">Date Debut</th>
                            <th scope="col">Date Fin</th>
                            <th scope="col">Description</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                        { events.map((event) => 
                           (
                          <tr>
                            <th scope="row">{event.id}</th>
                            <td>{event.image_url}</td>
                            <td>{event.eventName}</td>
                            <td>{new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit",
                                  }).format(new Date(Date.parse(event.date_debut)))}
                            </td>
                            <td>{new Intl.DateTimeFormat("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "2-digit",
                                   }).format(new Date(Date.parse(event.date_fin)))}
                            </td>
                            <td>{event.description}</td>
                            <td>
                              <a className="btn btn-warning" href="#">
                                <i className="fas fa-edit"></i>&nbsp;Edit
                              </a>
                              &nbsp;
                              <a className="btn btn-primary" href="#">
                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                              </a>
                            </td>
                            </tr> )
                          )}
                        </tbody>
              </table>
              </div>

          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Events;
