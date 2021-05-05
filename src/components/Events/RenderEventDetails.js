import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { countPos, fetchPostsCount } from "../../redux/slices/eventSlice";

const RenderEventDetails = ({ event }) => {
  const dispatch = useDispatch();

  const count = useSelector(countPos);

  useEffect(() => {
    dispatch(fetchPostsCount(event._id));
  }, []);

  return (
    <div class='row blog-media'>
      <div class='col-xl-6'>
        <div class='blog-left'>
          <Link to={`eventDetails/${event._id}`}>
          <img
            src={event.image_url}
            alt="img"
            className="img-fluid img-30 me-2 blur-up lazyloaded"
          />
          </Link>
        </div>
      </div>
      <div class='col-xl-6'>
        <div class='blog-right'>
          <div>
            <h6>
              {" "}
              opening date :{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(event.date_debut)))}
            </h6>
            <Link to={`eventDetails/${event._id}`}>
              <h4>{event.eventName}</h4>
            </Link>
            <ul class='post-social'>
              <li>
                <i class='fa fa-comments'></i> {count}
              </li>
            </ul>
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderEventDetails;
