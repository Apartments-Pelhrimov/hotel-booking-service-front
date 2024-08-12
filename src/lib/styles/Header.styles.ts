import { SxProps, Theme } from '@mui/material/styles';

export const header: SxProps<Theme> = {
  padding: '0px 60px',
  backgroundColor: 'grey.600',
  boxShadow: 'none',
};

export const toolbar: SxProps<Theme> = {
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const linkList: SxProps<Theme> = {
  gap: '24px',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const link = (currentPath: string, link: string): SxProps<Theme> => ({
  typography: 'body1',
  color: 'dark.500',
  textDecoration: 'none',
  borderBottom: 'none',
  borderColor: 'green.400',
  minHeight: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingX: '15px',
  '&:hover': {
    backgroundColor: 'white.main',
    borderBottom: 'none',
    color: 'dark.500',
  },
  '&:active': {
    borderBottom: '2px solid',
    color: 'green.400',
    backgroundColor: 'transparent',
  },
  '&:focus': {
    border: '2px solid',
    borderColor: 'grey.800',
    backgroundColor: 'white.main',
    color: 'dark.500',
  },
  ...(currentPath === link && {
    color: 'green.400',
    borderBottom: '2px solid',
  }),
});
