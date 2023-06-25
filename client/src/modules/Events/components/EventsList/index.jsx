import React from 'react';
import Event from '../Event';
import useAxios from 'axios-hooks';

export default function EventList() {
  const [{ data: events, loading }] = useAxios('/api/events');
  console.log({ events });

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Events list</h1>
      {events?.map(event => (
        <Event key={event._id} event={event} />
      ))}
    </div>
  );
}
