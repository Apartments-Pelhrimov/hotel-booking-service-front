import { SxProps, Theme } from '@mui/material/styles';

export const footer: SxProps<Theme> = {
  background:
    "linear-gradient(to right, rgba(60, 89, 63, 1) 50%, rgba(60, 89, 63, 0.8) 100%), url('/main-background.jpg')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '202px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '100px',
  zIndex: '2',
  padding: '24px 60px',
};

export const textSection: SxProps<Theme> = {
  justifyContent: 'flex-start',
  display: 'flex',
  gap: '80px',
};

export const section: SxProps<Theme> = {
  display: 'flex',
  gap: '10px',
  flexDirection: 'column',
  width: 'fit-content',
};

export const gridSection: SxProps<Theme> = {
  display: 'flex',
  gap: '10px',
  flexDirection: 'column',
  width: '200px',
};

export const link: SxProps<Theme> = {
  typography: 'body1',
  color: 'white.main',
  padding: '6px 12px',
  '&:hover': {
    backgroundColor: 'green.300',
    border: 'none',
  },
  '&:active': {
    backgroundColor: 'green.100',
    border: 'none',
  },
  '&:focus': {
    backgroundColor: 'transparent',
    border: '2px solid',
    borderColor: 'green.400',
  },
};

export const underlineLink: SxProps<Theme> = {
  typography: 'body1',
  color: 'white.main',
  textDecorationColor: 'white',
  textDecorationThickness: '1px',
};

export const iconText: SxProps<Theme> = {
  gap: '12px',
  color: 'white.main',
  svg: {
    width: '24px',
    height: '24px',
  },
};
