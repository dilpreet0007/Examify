import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const BlankLayout = () => (
  <Box
    sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
      display: 'flex',
      alignItems: 'center',
      py: { xs: 4, sm: 6 },
    }}
  >
    <Container maxWidth="sm">
      <Outlet />
    </Container>
  </Box>
);

export default BlankLayout;
