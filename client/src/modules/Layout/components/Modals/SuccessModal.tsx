import React from 'react';
import BaseModal, { IBaseModalProps } from './BaseModal';

export default function SuccessModal({
  show,
  onClose,
  title,
  description,
}: IBaseModalProps): React.ReactElement {
  return (
    <BaseModal
      show={show}
      onClose={onClose}
      title={title}
      description={description}
      sxProps={{
        bgcolor: 'success.light',
        color: 'common.white',
      }}
    />
  );
}
