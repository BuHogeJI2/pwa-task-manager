import React, { createContext, useContext, useEffect, useState } from 'react';
import noop from 'lodash/noop';

export const EventContext = createContext({
  events: [],
  setEvents: noop,
});

export default function EventsProvider({ children }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch all events when the component mounts
    fetch('/api/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventsContext() {
  return useContext(EventContext);
}
