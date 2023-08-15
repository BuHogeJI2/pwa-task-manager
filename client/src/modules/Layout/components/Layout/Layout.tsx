import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';

export default function Layout({
  children,
}: PropsWithChildren): React.ReactElement {
  const [isMenuOpened, setIsMenuOpened] = React.useState(true);
  function toggleMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Header isMenuOpened={isMenuOpened} toggleMenu={toggleMenu} />
      <Menu isMenuOpened={isMenuOpened} toggleMenu={toggleMenu} />
      <Main>{children}</Main>
    </Box>
  );
}
