import { Grid, Paper, SxProps } from '@mui/material';
import { EventsList, NewEventForm } from '../modules/Events/components';
import React from 'react';

const paperStyle: SxProps = {
  px: 2,
  py: 4,
  display: 'flex',
  flexDirection: 'column',
};

export default function Home(): React.ReactElement {
  return (
    <Grid container spacing={3}>
      {/* EVENTS */}
      <Grid item xs={12} md={7} lg={7}>
        <Paper sx={{ ...paperStyle, minHeight: '500px' }}>
          <EventsList />
        </Paper>
      </Grid>
      {/* NEW EVENT FORM */}
      <Grid item xs={12} md={5} lg={5}>
        <Paper sx={paperStyle}>
          <NewEventForm />
        </Paper>
      </Grid>
    </Grid>
  );
}
