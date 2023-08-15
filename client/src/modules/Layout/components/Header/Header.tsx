import { Badge, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar } from './Header.styled';
import React from 'react';

interface IHeaderProps {
  isMenuOpened?: boolean;
  toggleMenu: () => void;
}

export default function Header({
  isMenuOpened = true,
  toggleMenu,
}: IHeaderProps): React.ReactElement {
  return (
    <AppBar position="absolute" open={isMenuOpened}>
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleMenu}
          sx={{
            marginRight: '36px',
            ...(isMenuOpened && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Task Manager
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
