import { createTheme, MantineColorsTuple } from '@mantine/core';

// BLUEFOX primary color #22335a
const bluefoxBlue: MantineColorsTuple = [
  '#e6ebf5',
  '#c4d1e8',
  '#9fb4db',
  '#7a96cd',
  '#5578c0',
  '#22335a', // Primary color
  '#1b2847',
  '#141e36',
  '#0d1424',
  '#060a12',
];

export const theme = createTheme({
  primaryColor: 'bluefox',
  colors: {
    bluefox: bluefoxBlue,
  },
  fontFamily: 'Open Sans, sans-serif',
  headings: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '600',
  },
});
