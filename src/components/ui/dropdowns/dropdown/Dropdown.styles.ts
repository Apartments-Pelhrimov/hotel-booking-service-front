import { SxProps, Theme } from '@mui/material/styles';

export const mainLabel: SxProps<Theme> = {
  marginBottom: '10px',
  typography: 'body2Medium',
};

export const menuItem: SxProps<Theme> = {
  borderRadius: '0px',
  backgroundColor: 'grey.800',
  typography: 'body1',
  '&:hover': {
    backgroundColor: 'grey.600',
  },
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: 'grey.600',
  },
};

export const menuPaper: SxProps<Theme> = {
  borderRadius: '0px',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  width: 'fit-content',
  height: 'fit-content',
  left: '0 !important',
};

export const inputField: SxProps<Theme> = {
  borderRadius: '0px',
  backgroundColor: 'grey.800',
  typography: 'body1',
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:focus': {
    outline: 'none',
  },
};
