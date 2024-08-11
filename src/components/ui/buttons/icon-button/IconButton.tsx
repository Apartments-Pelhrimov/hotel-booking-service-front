import React, { FC, MouseEventHandler, ReactNode } from 'react';
import { Box, Button as ButtonMUI } from '@mui/material';

import { ButtonSize, ButtonVariant } from '../interfaces';

import * as styles from './IconButton.styles';

interface IconButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'submit';
}
const IconButton: FC<IconButtonProps> = ({
  variant = ButtonVariant.FILLED,
  size = ButtonSize.LARGE,
  icon,
  ...rest
}) => {
  return (
    <ButtonMUI
      sx={styles.button(variant, size)}
      disableRipple
      disableElevation
      {...rest}
    >
      <Box sx={styles.icon}>{icon}</Box>
    </ButtonMUI>
  );
};

export default IconButton;
