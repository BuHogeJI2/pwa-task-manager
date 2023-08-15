import React, { FormEvent, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { TEvent } from '../../types';
import { useEventsContext } from '../../context/EventsContext';

const initialEvent: TEvent = {
  name: '',
  date: '',
  description: '',
};

export default function NewEventForm(): React.ReactElement {
  const [newEvent, setNewEvent] = useState<TEvent>(initialEvent);
  const [isEventSaved, setIsEventSaved] = useState<boolean>(false);

  const { createEvent } = useEventsContext();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const savedEvent = await createEvent(newEvent);
    if (savedEvent) {
      setIsEventSaved(true);
    }
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="New event title"
                value={newEvent.name}
                onChange={e =>
                  setNewEvent(prevState => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={newEvent.date}
                onChange={e =>
                  setNewEvent(prevState => ({
                    ...prevState,
                    date: e.target.value,
                  }))
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                multiline
                rows={4}
                value={newEvent.description}
                onChange={e =>
                  setNewEvent(prevState => ({
                    ...prevState,
                    description: e.target.value,
                  }))
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  p: 2,
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Modal
        open={isEventSaved}
        onClose={() => {
          setNewEvent(initialEvent);
          setIsEventSaved(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'success.light',
            color: 'common.white',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Success
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Event {newEvent.name} successfully saved
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
