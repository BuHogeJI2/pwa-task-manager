import React, { createContext, PropsWithChildren, useContext } from 'react';
import axios from 'axios';
import { TEvent } from '../types';

type TEventContextType = {
  getEvents: () => Promise<TEvent[]>;
  createEvent: (event: TEvent) => Promise<TEvent[]>;
  deleteEvent: (id: string) => Promise<TEvent[]>;
  updateEvent: (event: any) => Promise<TEvent[]>;
};

const EventContext = createContext<TEventContextType>({
  getEvents: () => Promise.resolve([]),
  createEvent: () => Promise.resolve([]),
  deleteEvent: () => Promise.resolve([]),
  updateEvent: () => Promise.resolve([]),
});

export default function EventsProvider({
  children,
}: PropsWithChildren): React.ReactElement {
  const getEvents = React.useCallback(async function getEvent() {
    const response = await axios.get<Array<TEvent>>('/api/events');
    return response.data;
  }, []);

  const createEvent = React.useCallback(async function createEvent(
    event: TEvent
  ) {
    const response = await axios.post('/api/events', event);
    return response.data;
  },
  []);

  const deleteEvent = React.useCallback(async function deleteEvent(id: string) {
    const response = await axios.delete(`/api/events/${id}`);
    return response.data;
  }, []);

  const updateEvent = React.useCallback(async function updateEvent(
    event: TEvent
  ) {
    const response = await axios.put(`/api/events/${event._id}`, event);
    return response.data;
  },
  []);

  return (
    <EventContext.Provider
      value={{ getEvents, createEvent, deleteEvent, updateEvent }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEventsContext() {
  return useContext(EventContext);
}
