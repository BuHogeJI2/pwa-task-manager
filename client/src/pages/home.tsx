import { Grid, Paper, SxProps } from '@mui/material';
import EventsList from '../modules/Events/components/EventsList/EventsList';
import EventForm from '../modules/Events/components/EventForm/EventForm';
import React from 'react';

const paperStyle: SxProps = {
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '50vh',
};

export default function Home(): React.ReactElement {
  return (
    <Grid container spacing={3}>
      {/* EVENTS */}
      <Grid item xs={12} md={6} lg={6}>
        <Paper sx={paperStyle}>
          <EventsList />
        </Paper>
      </Grid>
      {/* NEW EVENT FORM */}
      <Grid item xs={12} md={6} lg={6}>
        <Paper sx={paperStyle}>
          <EventForm />
        </Paper>
      </Grid>
    </Grid>
  );
}
