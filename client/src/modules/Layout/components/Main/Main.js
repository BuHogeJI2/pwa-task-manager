import useAxios from 'axios-hooks';
import React from 'react';
import { EventForm } from '../../../Events';

export default function Main({ children }) {
  const [{ data, loading }] = useAxios('/api/tasks');

  console.log({ data, loading });

  return (
    <div>
      <p>Main</p>
      <EventForm />
      {children}
    </div>
  );
}
