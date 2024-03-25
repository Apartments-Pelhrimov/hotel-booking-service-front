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
  border: '2px solid',
  borderRadius: '0px',
  textTransform: 'none',
  gap: '10px',
  ...(size === ButtonSize.SMALL && {
    padding: '6px 12px',
  }),
  ...(size === ButtonSize.MEDIUM && {
    padding: '10px 16px',
  }),
  ...(size === ButtonSize.LARGE && {
    padding: '14px 20px',
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
  '&:focused': {
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
  svg: {
    width: '24px',
    height: '24px',
  },
};
