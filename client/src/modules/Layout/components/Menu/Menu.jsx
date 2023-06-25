import { Divider, IconButton, List, Toolbar } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react';
import { Drawer } from './Menu.styled';
import { mainListItems, secondaryListItems } from './MenuItems';

export default function Menu({ isMenuOpened = true, toggleMenu }) {
  return (
    <Drawer variant="permanent" open={isMenuOpened}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleMenu}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </Drawer>
  );
}
