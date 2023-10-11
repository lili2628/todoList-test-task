import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7362B9',
            contrastText: '#FAF2EC',
        },
        secondary: {
            main: '#D393C5',
            contrastText: '#FAF2EC',
        },
        custom: {
            main: '#E7D1C7',
            contrastText: '#7362B9',
        },
        accent: {
            main: '#FCE574',
            contrastText: '#7362B9',
        },
        contrastThreshold: 5,
        tonalOffset: 0.2,
    },
});

  export default theme;