import React from 'react';
import { Box, Container, Grid, Paper, Toolbar } from '@mui/material';
import Copyright from './Copyright';
import EventsList from '../../../Events/components/EventsList/EventsList';
import EventForm from '../../../Events/components/EventForm/EventForm';

export default function Main(): React.ReactElement {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme => theme.palette.grey[100],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* EVENTS */}
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <EventsList />
            </Paper>
          </Grid>
          {/* NEW EVENT FORM */}
          <Grid item xs={12} md={6} lg={6}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <EventForm />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <p>Orders</p>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}
