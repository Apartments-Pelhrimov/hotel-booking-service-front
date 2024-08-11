import { SxProps, Theme } from '@mui/material/styles';

export const reviewCard: SxProps<Theme> = {
  width: '505px',
  borderRadius: '0px',
  boxShadow: '3px 3px 4px 0px rgba(0, 0, 0, 0.25)',
  padding: '16px 24px',
  '.MuiCardContent-root': {
    padding: 0,
  },
};

export const reviewHead: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const userInfo: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '16px',
};

export const username: SxProps<Theme> = {
  color: 'dark.300',
};

export const reviewInfo: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  gap: '16px',
};

export const date: SxProps<Theme> = {
  color: 'grey.100',
};

export const rating: SxProps<Theme> = {
  backgroundColor: 'green.500',
  color: 'white.main',
  fontSize: '22px',
  fontWeight: '500',
  padding: '3px 6px',
  lineHeight: '28.6px',
  gap: '10px',
  borderRadius: '0px 4px',
};

export const comment: SxProps<Theme> = {
  display: 'flex',
  paddingTop: '12px',
};
