import React from 'react';

export default function Event({ event }) {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
    </div>
  );
}
