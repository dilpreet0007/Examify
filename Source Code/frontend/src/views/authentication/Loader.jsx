import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';

export default function Loader() {
  return (
    <Backdrop
      open
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: 'blur(4px)',
        background: 'rgba(11, 18, 32, 0.7)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          animation: 'slideUp 0.6s ease-out',
          '@keyframes slideUp': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <CircularProgress
          size={60}
          thickness={3}
          sx={{
            color: 'transparent',
            background: 'conic-gradient(from 0deg, #60A5FA, #34D399)',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite',
            '@keyframes spin': {
              from: { transform: 'rotate(0deg)' },
              to: { transform: 'rotate(360deg)' },
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            color: 'textSecondary',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
          }}
        >
          Loading...
        </Typography>
      </Box>
    </Backdrop>
  );
}
