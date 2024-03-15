import React, { FC, MouseEventHandler, ReactNode } from 'react';
import { Box, Button as ButtonMUI, Typography } from '@mui/material';

import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button/interfaces';

import * as styles from './Button.styles';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  text?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'submit';
}
const Button: FC<ButtonProps> = ({
  text,
  variant = ButtonVariant.FILLED,
  size = ButtonSize.LARGE,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <ButtonMUI
      sx={styles.button(variant, size)}
      disableRipple
      disableElevation
      {...rest}
    >
      {startIcon && <Box sx={styles.icon}>{startIcon}</Box>}
      <Typography
        variant={size === ButtonSize.SMALL ? 'body1Medium' : 'h8Medium'}
      >
        {text}
      </Typography>
      {endIcon && <Box sx={styles.icon}>{endIcon}</Box>}
    </ButtonMUI>
  );
};

export default Button;
