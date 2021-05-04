import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, listEvents } from '../../redux/slices/eventSlice';


/*const list_events = events.map((event) => {
    return (
      <ul class='recent-blog'>
        <li>
          <div class='media'>
            <img
              class='img-fluid blur-up lazyload'
              src='../assets/images/blog/1.jpg'
              alt='Generic placeholder image'
            />
            <div class='media-body align-self-center'>
              <h6>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(event.date_fin)))}
              </h6>
              <p>{event.eventName}</p>
            </div>
          </div>
        </li>
      </ul>
    );
  });*/

const UserEvents = () => {
    const dispatch = useDispatch();
    const events = useSelector(listEvents)
    useEffect(()=>{
        dispatch(fetchEvents());
    }, []);

    

    return (
        <>
            <div>
                hello
            </div>
        </>
    );
};

export default UserEvents;