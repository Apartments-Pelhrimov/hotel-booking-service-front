import { TypographyOptions } from '@mui/material/styles/createTypography';
import { Cormorant } from 'next/font/google';
import { Krub } from 'next/font/google';

const cormorant = Cormorant({
  subsets: ['cyrillic', 'latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
});

const krub = Krub({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
});

const typography: TypographyOptions = {
  fontFamily: krub.style.fontFamily,
  h1Elegant: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '56px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h1ElegantBold: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '56px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2Elegant: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '48px',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  h2ElegantMedium: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '48px',
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h2ElegantBold: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h3Elegant: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '40px',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  h3ElegantMedium: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  h3ElegantBold: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h4Elegant: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '36px',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  h4ElegantMedium: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  h4ElegantBold: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h4: {
    fontFamily: krub.style.fontFamily,
    fontSize: '36px',
    fontWeight: 300,
    lineHeight: 1.3,
  },
  h4Medium: {
    fontFamily: krub.style.fontFamily,
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  h4Bold: {
    fontFamily: krub.style.fontFamily,
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h5Elegant: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  h5ElegantMedium: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  h5ElegantBold: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h5: {
    fontFamily: krub.style.fontFamily,
    fontSize: '32px',
    fontWeight: 300,
    lineHeight: 1.3,
  },
  h5Medium: {
    fontFamily: krub.style.fontFamily,
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  h5Bold: {
    fontFamily: krub.style.fontFamily,
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h6Elegant: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '28px',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  h6ElegantMedium: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '28px',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  h6ElegantBold: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h6: {
    fontFamily: krub.style.fontFamily,
    fontSize: '28px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  h6Medium: {
    fontFamily: krub.style.fontFamily,
    fontSize: '28px',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  h6Bold: {
    fontFamily: krub.style.fontFamily,
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h7Elegant: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1.3,
  },
  h7ElegantMedium: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  h7ElegantBold: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h7: {
    fontFamily: krub.style.fontFamily,
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  h7Medium: {
    fontFamily: krub.style.fontFamily,
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  h7Bold: {
    fontFamily: krub.style.fontFamily,
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h8Elegant: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  h8ElegantMedium: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  h8ElegantBold: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h8: {
    fontFamily: krub.style.fontFamily,
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  h8Medium: {
    fontFamily: krub.style.fontFamily,
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  h8Bold: {
    fontFamily: krub.style.fontFamily,
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body1: {
    fontFamily: krub.style.fontFamily,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  body1Medium: {
    fontFamily: krub.style.fontFamily,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  body1Bold: {
    fontFamily: krub.style.fontFamily,
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.6,
  },
  body2: {
    fontFamily: krub.style.fontFamily,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  body2Medium: {
    fontFamily: krub.style.fontFamily,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  body2Bold: {
    fontFamily: krub.style.fontFamily,
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: 1.6,
  },
};

export default typography;
