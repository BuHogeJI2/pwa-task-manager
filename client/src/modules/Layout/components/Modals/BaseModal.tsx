import React, { PropsWithChildren } from 'react';
import { Box, Modal, SxProps, Typography } from '@mui/material';

export interface IBaseModalProps {
  show: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  sxProps?: SxProps;
}

export default function BaseModal({
  show,
  onClose,
  title,
  description,
  children,
  sxProps,
}: PropsWithChildren<IBaseModalProps>): React.ReactElement {
  const baseModalStyles: SxProps = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    width: 400,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...baseModalStyles,
          ...sxProps,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
}
