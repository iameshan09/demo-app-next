'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#03037F',
    },
    secondary: {
      main: '#939292',
    },
    error: {
      main: '#E94545',
    },
    space: '#f0f2f5',
    text: {
      secondary: '#00000099',
    },
    background: {
      main: '#F7F7F7',
    },
    disabled: {
      main: '#BDBDBD',
    },
    badge: {
      main: '#FF3434',
      contrastText: '#fffff',
    },
    icon: {
      main: '#fffff',
    },
  },
  spacing: 1,
  typography: {
    fontFamily: '__Manrope_7b1666',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 1,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderRadius: '4px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          marginInline: '6px',
        },
      },
    },
  },
});

export default theme;
