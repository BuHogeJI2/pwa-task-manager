import { Link, Typography } from '@mui/material';
import React from 'react';

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/BuHogeJI2"
        target="__blank"
      >
        Dzmitry Dziamidovich
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
