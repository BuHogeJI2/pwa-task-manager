import React, { PropsWithChildren } from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import Copyright from './Copyright';

export default function Main({
  children,
}: PropsWithChildren): React.ReactElement {
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
        {children}
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}
