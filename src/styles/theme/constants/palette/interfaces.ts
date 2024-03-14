import { Color } from '@mui/material';

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    logo?: string;
  }

  interface PaletteColor extends Color {}

  interface Palette {
    gray: Palette['primary'];
    dark: Palette['primary'];
    green: Palette['primary'];
    black: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}
