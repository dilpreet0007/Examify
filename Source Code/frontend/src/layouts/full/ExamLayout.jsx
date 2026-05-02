import React, { useState } from 'react';
import { styled, Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from './header/Header';

const MainWrapper = styled('div')(() => ({
  minHeight: '100vh',
  width: '100%',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

const ExamLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [, setMobileSidebarOpen] = useState(false);
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <MainWrapper>
      {/* ------------------------------------------- */}
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper>
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        <Header
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
          toggleMobileSidebar={() => setMobileSidebarOpen(true)}
        />
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Box sx={{ flex: 1, bgcolor: 'background.default', py: { xs: 2, sm: 3 } }}>
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </Box>
      </PageWrapper>
    </MainWrapper>
  );
};

export default ExamLayout;
