'use client';

import { createTheme } from '@mui/material/styles';

import palette from '@/lib/styles/theme/palette/palette';
import typography from '@/lib/styles/theme/typography/typography';

const theme = createTheme({
  palette: palette,
  typography: typography,
});

export default theme;
