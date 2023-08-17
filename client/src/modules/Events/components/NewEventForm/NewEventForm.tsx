import React, { FormEvent, useState } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import { TEvent } from '../../types';
import { useEventsContext } from '../../context/EventsContext';
import { SuccessModal } from '../../../Layout/components';

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
      <SuccessModal
        show={isEventSaved}
        onClose={() => {
          setNewEvent(initialEvent);
          setIsEventSaved(false);
        }}
        title="Success"
        description={`Event ${newEvent.name} successfully saved!`}
      />
    </>
  );
}
