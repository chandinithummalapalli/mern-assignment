/*import { useEffect, useState } from "react";
import API from "../api";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.get("/events").then(res => setEvents(res.data));
  }, []);

  return (
    <div>
      {events.map(e => (
        <div key={e._id}>
          <h3>{e.title}</h3>
          <button onClick={() => API.post(`/events/${e._id}/rsvp`)}>
            RSVP
          </button>
        </div>
      ))}
    </div>
  );
}*/


/*function Events() {
    return (
      <div className="container">
        <h2>Events</h2>
        <p>Events will be displayed here after login.</p>
      </div>
    );
  }
  
  export default Events;*/


  function Events() {
  return (
    <div className="card">
      <h2>Events</h2>
      <ul className="events">
        <li>🎉 Tech Conference 2025</li>
        <li>📚 MERN Stack Workshop</li>
        <li>🚀 Startup Networking Event</li>
      </ul>
    </div>
  );
}

export default Events;