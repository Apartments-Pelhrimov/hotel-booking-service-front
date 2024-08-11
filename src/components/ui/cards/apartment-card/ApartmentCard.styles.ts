import { SxProps, Theme } from '@mui/material/styles';

export const card: SxProps<Theme> = {
  width: '330px',
  borderRadius: '0px',
  boxShadow: '3px 3px 4px 0px rgba(0, 0, 0, 0.25)',
};

export const people: SxProps<Theme> = {
  svg: {
    width: '24px',
    height: '24px',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '8px',
};

export const reservation: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 'fit-content',
};

export const price: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'start',
  gap: '8px',
};

export const sum: SxProps<Theme> = {
  color: 'green.300',
};

export const title: SxProps<Theme> = {
  marginBottom: '16px',
};
