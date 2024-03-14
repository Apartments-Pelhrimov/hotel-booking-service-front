'use client';

import { createTheme } from '@mui/material/styles';

import palette from '@/styles/theme/constants/palette';
import typography from '@/styles/theme/constants/typography';

const theme = createTheme({
  palette: palette,
  typography: typography,
});

export default theme;
