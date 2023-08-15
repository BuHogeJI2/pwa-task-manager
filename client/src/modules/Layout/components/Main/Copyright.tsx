import { Link, SxProps, Typography } from '@mui/material';
import React from 'react';

interface ICopyRightProps {
  sx?: SxProps;
}

export default function Copyright(props: ICopyRightProps): React.ReactElement {
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
