import React from 'react';
import { useEventsContext } from '../../context/EventsContext';
import { Box, Collapse, List, ListItemButton, Typography } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { TEvent } from '../../types';

type TExpandedEvents = {
  [key: string]: boolean;
};

export default function EventsList() {
  const { getEvents } = useEventsContext();

  const [events, setEvents] = React.useState<Array<TEvent>>([]);
  const [eventExpanded, setEventExpanded] = React.useState<TExpandedEvents>({});

  React.useEffect(() => {
    getEvents().then(events => setEvents(events));
  }, [getEvents]);

  function handleEventClick(id: string) {
    setEventExpanded(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  if (!events) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        component="h2"
        variant="overline"
        fontSize={20}
        fontWeight={700}
      >
        Events list
      </Typography>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Click to show details
          </ListSubheader>
        }
      >
        {events.map(({ _id, name, description }) => (
          <React.Fragment key={_id}>
            <ListItemButton onClick={() => handleEventClick(_id)}>
              <ListItemText
                primary={name}
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  pl: 2,
                }}
              />
              {eventExpanded[_id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={eventExpanded[_id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText
                  sx={{
                    pl: 4,
                    py: 2,
                    bgcolor: 'info.dark',
                    color: 'common.white',
                  }}
                  primary={description}
                />
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
