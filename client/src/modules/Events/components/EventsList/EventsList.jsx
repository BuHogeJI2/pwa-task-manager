import React from 'react';
import Event from '../Event/Event';
import { useEventsContext } from '../../context/EventsContext';

export default function EventList() {
  const { events } = useEventsContext();
  console.log({ events });

  return (
    <div>
      <h1>Events list</h1>
      {events?.map(event => (
        <Event key={event._id} event={event} />
      ))}
    </div>
  );
}
