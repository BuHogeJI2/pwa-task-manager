import React, { useCallback } from 'react';
import BaseModal, { IBaseModalProps } from './BaseModal';
import { Box, Button, Grid } from '@mui/material';

interface IConfirmationModalProps extends IBaseModalProps {
  yesButtonTitle?: string;
  noButtonTitle?: string;
  yesButtonAction?: () => void;
  noButtonAction?: () => void;
}

export default function ConfirmationModal({
  show,
  title,
  description,
  yesButtonTitle = 'Confirm',
  noButtonTitle = 'Decline',
  yesButtonAction,
  noButtonAction,
  sxProps,
  onClose,
}: IConfirmationModalProps): React.ReactElement {
  const handleNoButtonAction = useCallback(
    function () {
      noButtonAction?.();
      onClose();
    },
    [noButtonAction, onClose]
  );

  return (
    <BaseModal
      show={show}
      title={title}
      description={description}
      sxProps={sxProps}
      onClose={onClose}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mt: 3,
        }}
      >
        <Button variant="contained" color="error" onClick={yesButtonAction}>
          {yesButtonTitle}
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleNoButtonAction}
        >
          {noButtonTitle}
        </Button>
      </Grid>
    </BaseModal>
  );
}
