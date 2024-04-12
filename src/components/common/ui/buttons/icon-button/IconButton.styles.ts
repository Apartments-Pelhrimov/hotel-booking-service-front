import { SxProps, Theme } from '@mui/material/styles';

import applyColors from '@/components/common/ui/buttons/utils/apply-colors';

import { ButtonSize, ButtonState, ButtonVariant } from '../interfaces';

export const button = (
  variant: ButtonVariant,
  size: ButtonSize,
): SxProps<Theme> => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '8px',
  minWidth: '0',
  borderRadius: '0px',
  ...(size === ButtonSize.SMALL && {
    padding: '7px',
    width: '38px',
    height: '38px',
  }),
  ...(size === ButtonSize.MEDIUM && {
    padding: '9px',
    width: '42px',
    height: '42px',
  }),
  ...(size === ButtonSize.LARGE && {
    padding: '12px',
    width: '48px',
    height: '48px',
  }),
  ...(variant === ButtonVariant.OUTLINE && {
    border: '2px solid',
  }),
  backgroundColor: applyColors(variant, ButtonState.DEFAULT).backgroundColor,
  borderColor: applyColors(variant, ButtonState.DEFAULT).borderColor,
  color: applyColors(variant, ButtonState.DEFAULT).textColor,
  '&:hover': {
    backgroundColor: applyColors(variant, ButtonState.HOVER).backgroundColor,
    borderColor: applyColors(variant, ButtonState.HOVER).borderColor,
    color: applyColors(variant, ButtonState.HOVER).textColor,
    ...(variant === ButtonVariant.OUTLINE && {
      backgroundOpacity: 0.2,
    }),
  },
  '&:active': {
    backgroundColor: applyColors(variant, ButtonState.ACTIVE).backgroundColor,
    borderColor: applyColors(variant, ButtonState.ACTIVE).borderColor,
    color: applyColors(variant, ButtonState.ACTIVE).textColor,
    ...(variant === ButtonVariant.OUTLINE && {
      backgroundOpacity: 0.4,
    }),
  },
  '&:focus': {
    backgroundColor: applyColors(variant, ButtonState.FOCUSED).backgroundColor,
    borderColor: applyColors(variant, ButtonState.FOCUSED).borderColor,
    color: applyColors(variant, ButtonState.FOCUSED).textColor,
    ...(variant === ButtonVariant.OUTLINE && {
      backgroundOpacity: 0.3,
    }),
  },
  '&:disabled': {
    backgroundColor: applyColors(variant, ButtonState.DISABLED).backgroundColor,
    borderColor: applyColors(variant, ButtonState.DISABLED).borderColor,
    color: applyColors(variant, ButtonState.DISABLED).textColorDisabled,
    cursor: 'not-allowed',
  },
});

export const icon: SxProps<Theme> = {
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  padding: '0',
  border: 'none',
  gap: '0',
  svg: {
    width: '24px',
    height: '24px',
  },
};
