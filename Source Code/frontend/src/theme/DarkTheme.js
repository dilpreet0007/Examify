import { createTheme, alpha } from '@mui/material/styles';
import typography from './Typography';
import { shadows } from './Shadows';

const basedarkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0B1220',
      paper: '#0F172A',
    },
    primary: {
      main: '#60A5FA',
      light: '#93C5FD',
      dark: '#2563EB',
      contrastText: '#08101F',
    },
    secondary: {
      main: '#34D399',
      light: '#6EE7B7',
      dark: '#059669',
      contrastText: '#04130D',
    },
    error: {
      main: '#FB7185',
    },
    warning: {
      main: '#FBBF24',
    },
    info: {
      main: '#38BDF8',
    },
    success: {
      main: '#22C55E',
    },
    divider: alpha('#94A3B8', 0.18),
    text: {
      primary: '#E2E8F0',
      secondary: '#94A3B8',
    },
    action: {
      hoverOpacity: 0.06,
      selectedOpacity: 0.10,
      disabledOpacity: 0.45,
      focusOpacity: 0.10,
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography,
  shadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0B1220',
          color: '#E2E8F0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${alpha('#94A3B8', 0.14)}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${alpha('#94A3B8', 0.14)}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#0F172A',
          borderBottom: `1px solid ${alpha('#94A3B8', 0.14)}`,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
          backgroundColor: '#0F172A',
          borderRight: `1px solid ${alpha('#94A3B8', 0.14)}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: alpha('#0B1220', 0.35),
        },
        notchedOutline: {
          borderColor: alpha('#94A3B8', 0.22),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#111C33',
          border: `1px solid ${alpha('#94A3B8', 0.18)}`,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export { basedarkTheme };

