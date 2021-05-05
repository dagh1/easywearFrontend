import axios from "axios";
import React , { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchEvents, ListEvents } from '../../redux/slices/eventSlice';




const Events = () => {

  const dispatch = useDispatch();
  const [events , setEvents] = useState([]);
  //const events = useSelector(ListEvents);

    useEffect(()=>{
        //dispatch(fetchEvents());
        axios.get("http://localhost:3100/api/event/getAllEvents").then((res) => {
        console.log(res);  
        setEvents(res.data);
        });
    }, []);
    

  function onDelete (id){
    alert(id);
    axios.delete(`http://localhost:3100/api/event/deleteEvent/${id}`).then((res) => {
      alert("deleted succ");
    });
  }

  function filterContent(eventss , serchTerm){
      const result = eventss.filter((event) => 
            event.eventName.toLowerCase().includes(serchTerm) || 
            event.description.toLowerCase().includes(serchTerm)
      );
      setEvents(result);
  }

  function handleTextSearch(e) {
     const searchTerm = e.currentTarget.value;
     axios.get("http://localhost:3100/api/event/getAllEvents").then((res) => {
          filterContent(res.data, searchTerm);
     });
  }

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

          <div className="row">
            <div className="col col-md-6" style={{  paddingLeft:'25px',paddingRight:'25px'}} >
              <input className="form-control"
                      type="search"
                      placeholder="Search"
                      name="serchTerm"
                      onChange={(e) => handleTextSearch(e)}
                      />
            </div>

            <div className="col col-md-6">
            {<Link to="/addEvent">
                <a className="btn btn-success" style={{ marginLeft:'400px', paddingLeft:'25px',paddingRight:'25px'}} href="#">
                      <i className="fas fa-edit"></i>Add Event
                </a>
            </Link>}
            </div>
          </div>
            
            <div style={{ marginTop: '10px' , marginLeft: '15px' }} >
            <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Event Name</th>
                            <th scope="col">Date Debut</th>
                            <th scope="col">Date Fin</th>
                            <th scope="col">Description</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                        { events.map((event, index) => 
                           (
                          <tr key={index}>
                            <td>
                              <div className="d-flex">
                                  <img
                                    src={event.image_url}
                                    alt="img"
                                    className="img-fluid img-30 me-2 blur-up lazyloaded"
                                  />
                                </div>
                            </td>
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
                              {<Link to={`/editEvent/${event._id}`}>
                                      <a className="btn btn-warning" href="#">
                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                      </a>
                              </Link>}
                              &nbsp;
                              <a className="btn btn-primary" href="#" onClick={() => onDelete(event._id)}>
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
