import { ThemeProvider } from '@mui/system';
import type { Metadata } from 'next';
import Head from 'next/head';

import theme from '@/styles/theme';

export const metadata: Metadata = {
  title: 'Apartmány Pelhřimov',
  description: 'Apartmány Pelhřimov',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Krub:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
