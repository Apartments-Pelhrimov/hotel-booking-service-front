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
