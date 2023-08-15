import React from 'react';
import Event from '../Event/Event';
import { useEventsContext } from '../../context/EventsContext';

export default function EventsList() {
  const { getEvents } = useEventsContext();

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    getEvents().then(events => setEvents(events));
  }, [getEvents]);

  if (!events) return null;

  return (
    <div>
      <p>Events list</p>
      {events?.map(event => (
        <Event key={event._id} event={event} />
      ))}
    </div>
  );
}
