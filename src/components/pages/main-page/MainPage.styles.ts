import { SxProps, Theme } from '@mui/material/styles';

export const firstBlock: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '627px',
  backgroundImage: 'url(/first-block-bg.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export const textContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '175px',
};

export const secondBlock: SxProps<Theme> = {
  width: '100%',
  height: '627px',
  backgroundColor: 'grey.800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const secondContentWrapper: SxProps<Theme> = {
  width: '1050px',
  height: '310px',
  display: 'flex',
  justifyContent: 'space-between',
};

export const imageSection: SxProps<Theme> = {
  width: '525px',
  height: '100%',
  border: '1px solid green',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const textSection: SxProps<Theme> = {
  width: '420px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

export const textSectionTitle: SxProps<Theme> = {
  width: '387px',
  height: '52px',
  marginBottom: '20px',
};

export const textSectionText: SxProps<Theme> = {
  gap: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  typography: 'body2',
  fontSize: 'medium',
};

export const thirdBlock: SxProps<Theme> = {
  width: '100%',
  height: '274px',
  display: 'flex',
  justifyContent: 'space-around',
};

export const propertyContainer: SxProps<Theme> = {
  width: '212px',
  height: '202px',
  typography: 'body2',
  fontSize: 'medium',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
};
