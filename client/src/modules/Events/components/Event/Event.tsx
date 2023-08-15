import React from 'react';
import { TEvent } from '../../types';

interface IEventProps {
  event: TEvent;
}

export default function Event({ event }: IEventProps): React.ReactElement {
  return (
    <div>
      <h3>{event.name}</h3>
      <p>{event.description}</p>
    </div>
  );
}
